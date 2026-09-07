const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle2' });

  // Scroll down to trigger any scroll-based animations (like GSAP)
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if(totalHeight >= scrollHeight){
          clearInterval(timer);
          resolve();
        }
      }, 50);
    });
  });

  // Check for overflow
  const overflowingElements = await page.evaluate(() => {
    const docWidth = document.documentElement.scrollWidth;
    const winWidth = window.innerWidth;
    
    if (docWidth <= winWidth) {
      return { overflow: false, docWidth, winWidth, elements: [] };
    }

    const elements = document.querySelectorAll('*');
    const overflowing = [];

    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      
      // Check if the element actually renders outside the 390px boundary
      if (rect.right > winWidth && rect.width > 0 && style.display !== 'none' && style.visibility !== 'hidden') {
        overflowing.push({
          tagName: el.tagName,
          className: el.className,
          id: el.id,
          right: rect.right,
          width: rect.width,
          text: el.innerText ? el.innerText.substring(0, 30) : ''
        });
      }
    });

    return { overflow: true, docWidth, winWidth, elements: overflowing };
  });

  console.log(JSON.stringify(overflowingElements, null, 2));

  await browser.close();
})();
