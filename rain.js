const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    "https://support.google.com/legal/contact/lr_counternotice?product=websearch"
  );

  await page.type("#full_name", "KevinLamping");
  await page.type("#your_title", "KevinLamping");
  await page.type("#companyname", "KevinLamping");
  await page.type("#contact_email_noprefill", "dang.mhieu123@gmail.com");
  await page.type("#address", "KevinLamping,123 AAA");
  await page.type("#phone", "0589414233");
  await page.type(
    "#material_location",
    "https://www.youtube.com/watch?v=joTU_ocL5A8&t=312s"
  );

  await page.click("#consent_statement1--dmca_consent_statement", {
    clickCount: 1,
  });

  await page.click("#consent_statement2--dmca_consent_statementtwo", {
    clickCount: 1,
  });

  // await page.type("#txtUsername", "KevinLamping");
  // await page.type("#txtPassword", process.env.KEVINS_SECRET_PASSWORD);

  // await Promise.all([
  //   page.waitForNavigation(), // The promise resolves after navigation has finished
  //   page.click("#btnLogin"), // Clicking the link will indirectly cause a navigation
  // ]);

  // const rainInput = await page.$("#frmReport_prTotalPrecip__ctl1_tbPrecip");
  // await rainInput.click({ clickCount: 3 });
  // await rainInput.type(amount);

  // await page.click("#frmReport_btnSubmitTop");

  await page.screenshot({ path: "example.png" });

  // console.log("Rainfall Submitted!");

  // await browser.close();
})();
