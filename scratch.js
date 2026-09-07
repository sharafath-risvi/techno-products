async function test() {
  try {
    const firstPageRes = await fetch('https://technoproducts.in/wp-json/api/v1/products?page=1&per_page=50');
    const firstPageData = await firstPageRes.json();
    const totalPages = firstPageData.pagination?.total_pages || 10;
    let allFetchedProducts = [...firstPageData.data];

    const fetchPromises = [];
    for (let p = 2; p <= totalPages; p++) {
      fetchPromises.push(
        fetch(`https://technoproducts.in/wp-json/api/v1/products?page=${p}&per_page=50`)
          .then(res => res.json())
      );
    }

    const remainingPagesData = await Promise.all(fetchPromises);
    remainingPagesData.forEach(pageData => {
      if (pageData && pageData.data) {
        allFetchedProducts = [...allFetchedProducts, ...pageData.data];
      }
    });

    console.log("Fetched all products. Count:", allFetchedProducts.length);

    function normalizeProduct(product) {
      const name = product.name || '';
      const desc = product.description || '';
      const combinedText = `${name} ${desc}`.toUpperCase();

      const attributes = {};
      
      let category_slug = 'all';
      if (/\bMOTOR(S)?\b/i.test(combinedText)) {
        category_slug = 'motors';
      } else if (/\b(GEARBOX(ES)?|WORM|HELICAL|PLANETARY)\b/i.test(combinedText) || /\bW\s*\d+\b/i.test(combinedText)) {
        category_slug = 'gearbox';
      } else if (/\b(DRIVE(S)?|FC\s*\d+|VFD)\b/i.test(combinedText)) {
        category_slug = 'drives';
      } else if (/\b(CABLE(S)?|POLYCAB|WIRE(S)?|FRLS|FR)\b/i.test(combinedText)) {
        category_slug = 'cables';
      } else if (/\b(ENCLOSURE(S)?|DOOR|HOFFMANN|PANEL(S)?)\b/i.test(combinedText) || /FLOOR STANDING/i.test(combinedText)) {
        category_slug = 'enclosure';
      } else if (/\b(SWITCHGEAR(S)?|MCB|MCCB|ACB|SIEMENS|CONTACTOR|RELAY)\b/i.test(combinedText)) {
        category_slug = 'switchgears';
      } else {
        category_slug = 'uncategorized';
      }

      const hpMatch = combinedText.match(/([\d\.]+)\s*HP/);
      if (hpMatch) attributes.hp = parseFloat(hpMatch[1]).toString();

      const rpmMatch = combinedText.match(/(\d{3,4})\s*RPM/);
      if (rpmMatch) {
        const rpmVal = parseInt(rpmMatch[1], 10);
        if (rpmVal >= 2800) attributes.rpm = "3000 2 Pole";
        else if (rpmVal >= 1400 && rpmVal < 2800) attributes.rpm = "1500 4 Pole";
        else if (rpmVal >= 900 && rpmVal < 1400) attributes.rpm = "1000 6 Pole";
        else if (rpmVal >= 700 && rpmVal < 900) attributes.rpm = "750 8 Pole";
      }

      const brands = ["SIEMENS", "CROMPTON", "HAVELLS", "BHARAT BIJLEE", "MARATHON", "BBL", "BONFIGLIOLI", "DANFOSS"];
      for (const b of brands) {
        if (combinedText.includes(b)) {
          if (b === "BBL") attributes.brand = "Bharat Bijlee";
          else attributes.brand = b.charAt(0) + b.slice(1).toLowerCase();
          break;
        }
      }

      if (combinedText.includes("FOOT CUM FLANGE")) attributes.mounting = "Foot Cum Flange";
      else if (combinedText.includes("FOOT CUM FACE")) attributes.mounting = "Foot Cum Face";
      else if (combinedText.includes("FLANGE")) attributes.mounting = "Flange";
      else if (combinedText.includes("FACE")) attributes.mounting = "Face";
      else if (combinedText.includes("FOOT") || combinedText.includes("B3")) attributes.mounting = "Foot";

      const kwMatch = combinedText.match(/([\d\.]+)\s*KW/);
      if (kwMatch) attributes.kw = parseFloat(kwMatch[1]).toString();

      if (category_slug === 'drives') {
        if (combinedText.includes("FC302") || combinedText.includes("FC 302")) attributes.model = "AUTOMATION DRIVE (ADVANCED) - FC302";
        else if (combinedText.includes("FC301") || combinedText.includes("FC 301")) attributes.model = "AUTOMATION DRIVE (ADVANCED) - FC301";
        else if (combinedText.includes("FC360") || combinedText.includes("FC 360")) attributes.model = "AUTOMATION DRIVE (BASIC) - FC360";
        else if (combinedText.includes("FC102") || combinedText.includes("FC 102")) attributes.model = "HVAC (ADVANCED) - FC102";
        else if (combinedText.includes("FC101") || combinedText.includes("FC 101")) attributes.model = "HVAC (BASIC) - FC101";
        else if (combinedText.includes("FC051") || combinedText.includes("FC 51") || combinedText.includes("FC 051")) attributes.model = "MICRO DRIVE(BASIC) - FC051";
      }

      if (category_slug === 'gearbox') {
        if (combinedText.includes("WORM") || combinedText.includes(" W ")) attributes.type = "Worm - W";
        else if (combinedText.includes("BEVEL HELICAL") || combinedText.includes(" A ")) attributes.type = "Bevel Helical - A Series";
        else if (combinedText.includes("INLINE HELICAL") || combinedText.includes(" AS ")) attributes.type = "Inline Helical- AS Series";
        else if (combinedText.includes("PLANETARY") || combinedText.includes(" 3 ")) attributes.type = "Planetary - 3 SERIES";
        else if (combinedText.includes("SHAFT MOUNTED") || combinedText.includes(" TA ")) attributes.type = "Shaft Mounted - TA Series";
        else if (combinedText.includes("VFR")) attributes.type = "VFR Series";
        else if (combinedText.includes("VF")) attributes.type = "VF";
        else if (combinedText.includes("WR")) attributes.type = "WR";

        const modelMatch = combinedText.match(/(?:W|VF|A)\s*(\d+)/);
        if (modelMatch) attributes.model = modelMatch[1];
      }

      if (category_slug === 'cables') {
        if (combinedText.includes("ALUMINIUM")) attributes.category = "Aluminium Armd";
        else if (combinedText.includes("COPPER")) attributes.category = "Copper Armd";
        else if (combinedText.includes("FLEXIBLE")) attributes.category = "Flexible";

        const colors = ["BLACK", "BLUE", "BROWN", "GREEN", "GREY BLACK", "GREY", "ORANGE", "RED", "WHITE", "YELLOW WITH GREEN", "YELLOW"];
        for (const c of colors) {
          if (combinedText.includes(c)) {
            attributes.color = c.charAt(0) + c.slice(1).toLowerCase().replace('with', 'with').replace('black', 'Black');
            break;
          }
        }

        if (combinedText.includes("FRLS")) attributes.type = "FRLS";
        else if (combinedText.includes("FR")) attributes.type = "FR";
      }

      if (category_slug === 'enclosure') {
        if (combinedText.includes("DOUBLE DOOR")) attributes.type = "Double Door";
        else if (combinedText.includes("SINGLE DOOR")) attributes.type = "Single Door";
        else if (combinedText.includes("FLOOR STANDING")) attributes.type = "Floor Standing";

        if (combinedText.includes("WALL MOUNTED") || combinedText.includes("WALL MOUNT")) attributes.mounting = "Wall Mounted";
        else if (combinedText.includes("FLOOR MOUNTED") || combinedText.includes("FLOOR MOUNT")) attributes.mounting = "Floor Mounted";

        const depthMatch = combinedText.match(/(?:D|DEPTH)\s*[:=\-]?\s*(\d{3})/);
        if (depthMatch) attributes.depth = depthMatch[1];
      }

      if (category_slug === 'switchgears') {
        if (combinedText.includes("MCCB")) attributes.category = "MCCB";
        else if (combinedText.includes("MCB")) attributes.category = "MCB";
        else if (combinedText.includes("ACB")) attributes.category = "ACB";

        const poleMatch = combinedText.match(/([34])\s*POLE/);
        if (poleMatch) attributes.pole = poleMatch[1];

        const ampMatch = combinedText.match(/(\d{2,4})\s*A/);
        if (ampMatch) attributes.amps = ampMatch[1];
      }

      return {
        ...product,
        category_slug,
        attributes
      };
    }

    const normalizedProducts = allFetchedProducts.map(normalizeProduct);
    console.log("Normalized all products");
  } catch (e) {
    console.error("Error:", e);
  }
}

test();
