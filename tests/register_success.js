const { Builder, By, until } = require('selenium-webdriver');

(async function registerSuccess() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:5500/index.html'); // Cập nhật lại URL theo local project
    await driver.findElement(By.className('logo3')).click();
    await driver.findElement(By.id('register')).click();

    const inputs = await driver.findElements(By.css('.dangki .red'));
    for (let i = 0; i < inputs.length; i++) {
      await inputs[i].sendKeys(`Test${i}`);
    }

    await driver.findElement(By.id('dangki')).click();
    await driver.wait(until.elementLocated(By.css('.dangnhap')), 5000);

    const isDisplayed = await driver.findElement(By.css('.dangnhap')).isDisplayed();
    console.log(isDisplayed ? "✅ TC-R3 PASSED" : "❌ TC-R3 FAILED");

  } catch (err) {
    console.error("❌ TC-R3 ERROR:", err);
  } finally {
    await driver.quit();
  }
})();