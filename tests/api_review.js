const { Builder, By, until } = require('selenium-webdriver');

(async function apiReview() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:5500/index.html');
    await driver.findElement(By.id('ff1')).click();
    await driver.sleep(1000); // đợi tải API

    const name = await driver.findElement(By.css('.frame12-2')).getText();
    console.log(name !== 'Wade Warren' ? "✅ TC-A1 PASSED" : "❌ TC-A1 FAILED");

  } catch (err) {
    console.error("❌ TC-A1 ERROR:", err);
  } finally {
    await driver.quit();
  }
})();