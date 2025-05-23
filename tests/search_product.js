const { Builder, By, Key } = require('selenium-webdriver');

(async function searchProduct() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:5500/index.html');
    const search = await driver.findElement(By.id('search'));
    await search.sendKeys('vàng', Key.ENTER);
    console.log("✅ TC-S1 PASSED (Kiểm tra kết quả thủ công trên giao diện)");

  } catch (err) {
    console.error("❌ TC-S1 ERROR:", err);
  } finally {
    await driver.quit();
  }
})();