import test, { chromium, expect } from "@playwright/test";
import * as constants from '../tests/constants/login_data';

test.describe('Login scenario', () => {
test('login test', async ({ page }) => {
 // const browser= await chromium.launch();
 // const context = await browser.newContext(); // cache and cookies are not shared or carried over
 // const loginPage = await context.newPage();  // similar to new tab
  await page.goto(constants.loginURL);
  await expect(page.getByText('Test login')).toBeVisible();
  await page.isVisible('[id="username"]');
  await page.locator('[id="username"]').fill(constants.username);
  await expect(page.locator('[id="username"]')).toBeAttached();
  await page.locator('[id="password"]').type(constants.password,{delay: 40});
  await page.waitForTimeout(2000);
  await page.click('[id="submit"]');
});
test('login success', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/logged-in-successfully/');
  await expect(page).toHaveURL(constants.homePage);
  await expect(page.getByText('Logged In Successfully')).toBeVisible();
});
test('Interact with radio button and checkbox', async ({ }) => {
  const browser=  await chromium.launch({ headless: false,
    args:["--start-maximized"]})
const context= await browser.newContext()
const page = await context.newPage()
    await page.goto(constants.elementInteraction);
    await expect(page).toHaveTitle('Simple HTML Elements For Automation - Ultimate QA');
    const maleRadio = await page.locator("//input[@type='radio'][@value='male']");
  // console.log();
   await expect((await maleRadio.inputValue()).toString()).toBe('male');
   await maleRadio.click();
   await expect(page.locator("//input[@value='Car']")).not.toBeChecked();
  // const label = await maleRadio.evaluate(el => (el.closest('input') as HTMLElement).innerText);
  // console.log(label);
 const labelText = await maleRadio.evaluate((el) => {
  return el.nextSibling?.textContent; // Get the text next to the radio button
});

console.log(labelText);
  await (page.locator("//input[@value='Car']")).scrollIntoViewIfNeeded();
   await page.locator("//input[@value='Car']").check();
  await page.waitForTimeout(3000);
 // const dropdown= await page.locator("//select[@id='selectList']");
  });

  test.only('Dropdown interaction', async ({ }) => {
    const browser = await chromium.launch();
    const context = await browser.newContext(
    //     acceptDownloads: true,
    //     permissions: ['notifications'], // Example permission
    //     //storageState: null, // Start with no storage state
    //    // ignoreDefaultArgs: ['--disable-extensions'], // Prevent extensions
    //     viewport: { width: 1280, height: 720 },
    //     userAgent: 'your-user-agent',
    //     // Disabling cookies
    //   //  httpCredentials: null,
    //     //recordVideo: null,
    // }
    );
    await context.addCookies([
      {
          name: 'cookieConsent',
          value: 'accepted', // Adjust according to the site's cookie policy
          domain: 'www.lambdatest.com',
          path: '/',
      },
  ]);

    const page = await context.newPage();
    console.log(await page.viewportSize()?.width);
    console.log(await page.viewportSize()?.height);
    await page.setViewportSize({ width: 1920, height: 1200 });
    await page.goto(constants.jquerydropdownInteraction);
   await expect(page).toHaveTitle('Selenium Grid Online | Run Selenium Test On Cloud');
   //await page.locator("#files").click();

   const countryList=await page.locator("#country").textContent();
   await expect(countryList?.includes('Denmark')).toBeTruthy();
   await expect(countryList).toContain('India');
  // console.log(countryList);
   const listOfCountry=await page.locator("#country >option").allInnerTexts();
   console.log(listOfCountry);
   const checkCountry='Denmark';
   for (const country of listOfCountry) {
     if(country===checkCountry){
       console.log(country + "is in the list of countries");
       break;
     }
   }
    await page.selectOption('#files', { label: 'Python'});
  //   const selectedValue=await page.locator("#files").evaluate((el) => {el.nextSibling?.textContent});
  //  console.log(selectedValue);
  await (page.locator("#files")).scrollIntoViewIfNeeded();
    // await page.waitForTimeout(3000);
//     await page.selectOption("#select-demo", {
//       label: "Tuesday",
//     //  value: "Friday",
//     //  index: 5
//  })page.waitForTimeout— login.test.ts:84

 await page.waitForTimeout(3000);
  });
});