const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

(async () => {
  puppeteer.use(StealthPlugin());
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  const navigationPromise = page.waitForNavigation();

  //=================================================
  await page.setExtraHTTPHeaders({
    "accept-language": "en-US,en;q=0.9,hy;q=0.8",
  });
  //==================================================

  await page.goto("https://accounts.google.com/");

  await navigationPromise;

  await page.waitForSelector('input[type="email"]');
  await page.click('input[type="email"]');

  await navigationPromise;

  //TODO : change to your email
  await page.type('input[type="email"]', "your email");

  await page.waitForSelector("#identifierNext");
  await page.click("#identifierNext");

  await page.waitFor(500);

  await page.waitForSelector('input[type="password"]');
  await page.click('input[type="email"]');
  await page.waitFor(5000);

  //TODO : change to your password
  await page.type('input[type="password"]', "your password");

  await page.waitForSelector("#passwordNext");
  await page.click("#passwordNext");

  await navigationPromise;

  //await browser.close()

  //===================================================================
})();
