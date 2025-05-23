const { Builder, By } = require('selenium-webdriver');

(async function loginEmpty() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://127.0.0.1:5500/Source%20code/');
    await driver.findElement(By.className('logo3')).click();

    await driver.findElement(By.id('login1')).click();
    const errorMsg = await driver.findElement(By.css('.invalid-feedback1'));
    console.log(errorMsg ? "✅ TC-L2 PASSED" : "❌ TC-L2 FAILED");

  } catch (err) {
    console.error("❌ TC-L2 ERROR:", err);
  } finally {
    await driver.quit();
  }
})();