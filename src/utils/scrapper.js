// import puppeteer from 'puppeteer';

// (async () => {
//   // Launch the browser and open a new blank page
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   // Navigate the page to a URL
//   await page.goto('https://www.lidl.es/');

//   // Set screen size
//   await page.setViewport({width: 1080, height: 1024});

//   // Type into search box
//   await page.type("#mainsearch-input", 'patata frita');

//   // Wait and click on first result
//   const searchResultSelector = '.product-grid-box-tile';
//   await page.waitForSelector(searchResultSelector);
//   await page.click(searchResultSelector);

//   // Locate the full title with a unique string
//   const textSelector = await page.waitForSelector(
//     'text/Patatas fritas sabor trufa'
//   );
//   const fullTitle = await textSelector?.evaluate(el => el.textContent);

//   // Print the full title
//   console.log('Full Title:', fullTitle);

//   await browser.close();
// })();