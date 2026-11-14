import { useState, useEffect } from 'react';

// Global in-memory cache for API requests
const apiCache = {};
const inFlightRequests = {};

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
    
    // If we have cached data, return synchronously without redundant network calls
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
        // In-flight deduplication: prevent duplicate simultaneous requests across multiple components
        if (!inFlightRequests[url]) {
          inFlightRequests[url] = fetch(url, options)
            .then(async (response) => {
              if (!response.ok) {
                throw new Error(`API error: ${response.status} ${response.statusText}`);
              }
              const contentType = response.headers.get('content-type') || '';
              if (!contentType.includes('application/json')) {
                throw new Error(`API returned non-JSON response (${response.status})`);
              }
              return response.json();
            })
            .finally(() => {
              delete inFlightRequests[url];
            });
        }

        const json = await inFlightRequests[url];
        apiCache[url] = json; // Store in cache
        if (isMounted) {
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
