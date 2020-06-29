// const {Builder, By, Key, until} = require('selenium-webdriver');
// var assert = require('assert');


// async function loginTest() {
//   let driver = await new Builder().forBrowser('firefox').build();
//   try {
//     await driver.get('http://localhost:4200/auth/login');
//     await driver.findElement(By.name('username')).sendKeys('admin');
//     await driver.findElement(By.name('password')).sendKeys('admin123', Key.RETURN);
//     await driver.wait(until.urlIs("http://localhost:4200/pages/home"), 5000);
//   } finally {
//     await driver.getCurrentUrl().then(url => {
//       assert.equal('http://localhost:4200/pages/home', url);
//       console.log('loginFunctionTest passed');
//     })
//     //await driver.quit();

//   }
// }

// async function registerTest() {
//   let driver = await new Builder().forBrowser('firefox').build();
//   try {
//     await driver.get('http://localhost:4200/auth/login');
//     var linkReg = await driver.findElement(By.name('LinkRegister'));
//     await linkReg.click();
//     await driver.wait(until.urlIs("http://localhost:4200/auth/register"), 5000);
//     await driver.findElement(By.name('name')).sendKeys('admin2');
//     await driver.findElement(By.name('lastname')).sendKeys('admin2');
//     await driver.findElement(By.name('username')).sendKeys('admin2');
//     await driver.findElement(By.name('email')).sendKeys('admin2@gmail.com');
//     await driver.findElement(By.name('password')).sendKeys('admin123');
//     await driver.findElement(By.name('rePass')).sendKeys('admin123');

//     var selectCountry = await driver.findElement(By.name('idDataCountry'));
//     await selectCountry.click();
//     await driver.sleep(2000);
//     await driver.findElement(By.name('idDataCountry')).sendKeys('Pe', Key.RETURN);

    
//   } finally {
    
//     var registerButton = await driver.findElement(By.name('registerButton'));
//     await registerButton.click();
//     await driver.wait(until.urlIs("http://localhost:4200/auth/login"), 3000);
//     await driver.getCurrentUrl().then(url => {
//       assert.equal('http://localhost:4200/auth/login', url);
//       console.log('registerTest passed');
//     })
//     //await driver.quit();

//   }
// }

// async function logoutTest(){

//   let driver = await new Builder().forBrowser('firefox').build();
//   try {
//     await driver.get('http://localhost:4200/auth/login');
//     await driver.findElement(By.name('username')).sendKeys('admin');
//     await driver.findElement(By.name('password')).sendKeys('admin123', Key.RETURN);
//     await driver.wait(until.urlIs("http://localhost:4200/pages/home"), 1000);

//     var logoutButton = await driver.findElement(By.name('logout-button'));
//     await logoutButton.click();

//     await driver.wait(until.urlIs("http://localhost:4200/auth/login"), 5000);

//   } finally {

//     await driver.getCurrentUrl().then(url => {
//       assert.equal('http://localhost:4200/auth/login', url);
//       console.log('logoutTest passed');
//     })
//     //await driver.quit();
//   }
// }

// async function selectCountryTest() {
//   let driver = await new Builder().forBrowser('firefox').build();
//   try {
//     await driver.get('http://localhost:4200/auth/login');
//     await driver.findElement(By.name('username')).sendKeys('admin');
//     await driver.findElement(By.name('password')).sendKeys('admin123', Key.RETURN);
//     await driver.wait(until.urlIs("http://localhost:4200/pages/home"), 1000);
//     var selectCountry = await driver.findElement(By.name('idDataCountry'));
//     await selectCountry.click();
//     var country = await driver.findElement(By.id('nb-option-18'));
//     await country.click();
    
//   } finally {
//     console.log('selectCountryTest passed')
//     //await driver.quit();

//   }
// }


// async function postCommentTest() {
//   let driver = await new Builder().forBrowser('firefox').build();
//   try {
//     await driver.get('http://localhost:4200/auth/login');
//     await driver.findElement(By.name('username')).sendKeys('admin');
//     await driver.findElement(By.name('password')).sendKeys('admin123', Key.RETURN);
//     await driver.wait(until.urlIs("http://localhost:4200/pages/home"), 1000);
//     var selectCountry = await driver.findElement(By.name('idDataCountry'));
//     await selectCountry.click();
//     var country = await driver.findElement(By.id('nb-option-18'));
//     await country.click();
//     await driver.findElement(By
//       .name('textArea'))
//       .sendKeys('Prueba de Comentario');
//     var submitButton = await driver.findElement(By.name('addComment'));
//     await submitButton.click();

//   } finally {
//     await driver.findElement(By.className('inline-form-card ng-star-inserted'));
//     console.log('postCommentTest passed');
//     //await driver.quit();

//   }
// }

// async function countriesTableTest() {
//   let driver = await new Builder().forBrowser('firefox').build();
//   try {
//     await driver.get('http://localhost:4200/auth/login');
//     await driver.findElement(By.name('username')).sendKeys('admin');
//     await driver.findElement(By.name('password')).sendKeys('admin123', Key.RETURN);
//     await driver.wait(until.urlIs("http://localhost:4200/pages/home"), 5000);
//     var countryTableButton = await driver.findElement(By.className('menu-item ng-tns-c118-4 ng-star-inserted'));
//     await countryTableButton.click();
//     await driver.sleep(5000);
//     await driver.findElement(By.id('search')).sendKeys('Peru', Key.RETURN);
    
//   } finally {
//     await driver.sleep(8000);
//     var text = await driver.findElement(By.className('nb-tree-grid-cell nb-cell cdk-cell cdk-column-Pais nb-column-Pais ng-star-inserted')).getText();
//     assert.equal('Peru', text);
//     console.log('Texto: ', text);
//     console.log('countriesTableTest passed')
//     //await driver.quit();

//   }
// }

// //loginTest();
// //registerTest();
// //logoutTest();
// //selectCountryTest();
// //postCommentTest();
// //countriesTableTest();
