const { Builder, By, until } = require('selenium-webdriver');

(async function loginEmpty() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:5500/index.html');

    // Đợi logo3 hiển thị & scroll tới vị trí giữa màn hình
    const logo = await driver.wait(until.elementLocated(By.className('logo3')), 5000);
    await driver.wait(until.elementIsVisible(logo), 2000);
    await driver.executeScript("arguments[0].scrollIntoView({block: 'center'});", logo);
    await driver.sleep(500);
    await logo.click();

    // Tương tự cho nút login
    const loginBtn = await driver.wait(until.elementLocated(By.id('login1')), 5000);
    await driver.wait(until.elementIsVisible(loginBtn), 2000);
    await loginBtn.click();

    const errorMsg = await driver.findElement(By.css('.invalid-feedback1'));
    console.log(errorMsg ? "✅ TC-L2 PASSED" : "❌ TC-L2 FAILED");

    await driver.executeScript("arguments[0].scrollIntoView(true);", logo);
    await driver.sleep(2000);
  } catch (err) {
    console.error("❌ TC-L2 ERROR:", err);
  } finally {
    await driver.quit();
  }
})();
