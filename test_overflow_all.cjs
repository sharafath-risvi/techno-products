const puppeteer = require('puppeteer');

async function testWidth(browser, w) {
  const page = await browser.newPage();
  await page.setViewport({ width: w, height: 800, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle2' });

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
      }, 20);
    });
  });

  const res = await page.evaluate(() => {
    const docWidth = document.documentElement.scrollWidth;
    const winWidth = window.innerWidth;
    return { width: winWidth, docWidth: docWidth, overflow: docWidth > winWidth };
  });

  await page.close();
  return res;
}

(async () => {
  const browser = await puppeteer.launch();
  const widths = [320, 360, 375, 390, 393, 412, 430];
  const results = [];
  for (const w of widths) {
    results.push(await testWidth(browser, w));
  }
  console.log(JSON.stringify(results, null, 2));
  await browser.close();
})();
