import { useState, useEffect } from 'react';

// Global in-memory cache for API requests
const apiCache = {};

export function useApi(url, options = {}) {
  const [data, setData] = useState(() => {
    // Check cache synchronously for initial state to avoid any flashes
    return apiCache[url] ? apiCache[url] : null;
  });
  const [loading, setLoading] = useState(() => {
    return apiCache[url] ? false : true;
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    
    // If we have cached data, we don't necessarily need to fetch again,
    // but a stale-while-revalidate approach could be used.
    // For pure frontend optimization without changing API behavior,
    // skipping the fetch entirely if cached is the fastest approach.
    if (apiCache[url]) {
      setData(apiCache[url]);
      setLoading(false);
      return;
    }

    let isMounted = true;
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`API error: ${response.status} ${response.statusText}`);
        }
        const json = await response.json();
        if (isMounted) {
          apiCache[url] = json; // Store in cache
          setData(json);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url, JSON.stringify(options)]); // re-run if URL or options change

  return { data, loading, error };
}
