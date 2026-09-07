import puppeteer from 'puppeteer';
(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
    await page.goto('http://localhost:5173/');
    await page.waitForTimeout(3000);
    
    const errors = await page.evaluate(() => {
      return document.querySelector('#root').innerHTML.length;
    });
    console.log('Root HTML length:', errors);
    
    // Check if MostViewedProducts is in DOM
    const mvpInfo = await page.evaluate(() => {
      const el = document.querySelector('.mvp-grid');
      if (!el) return 'NOT FOUND';
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      let parent = el.parentElement;
      let parentHidden = false;
      while(parent) {
         if(window.getComputedStyle(parent).display === 'none' || window.getComputedStyle(parent).visibility === 'hidden') {
             parentHidden = true;
         }
         parent = parent.parentElement;
      }
      return { rect, display: style.display, visibility: style.visibility, opacity: style.opacity, parentHidden };
    });
    console.log('MVP Info:', mvpInfo);

    await browser.close();
  } catch(e) {
    console.error(e);
  }
})();
