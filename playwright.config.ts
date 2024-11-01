import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({

  // use: {
     
  // },
  
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
 // retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html',{open:"never"}],["json", { outputFile: "jsonReport/test-results.json" }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
  baseURL: 'https://restful-booker.herokuapp.com/',
    // launchOptions: {
    //   //     // 1
    //        args: ["--start-maximized"],
    //      },
         browserName: 'chromium',
    headless:false,
   viewport: { width: 1920, height: 1200 },
    deviceScaleFactor:undefined,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // launchOptions: {
    //   //     // 1
    //        args: ["--start-maximized"],
    //        viewport: { width: 1920, height: 1080 },
    //      },
    trace: 'on-first-retry',
    screenshot:"only-on-failure",
    video:"retain-on-failure"
  },
 retries: 0,
 

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: devices['Desktop Chrome'],
     // viewport: { width: 1920, height: 1080 }     
    },

   // {
   //   name: 'firefox',
   //   use: { ...devices['Desktop Firefox'] },
   // },

   // {
   //   name: 'webkit',
   //   use: { ...devices['Desktop Safari'] },
   // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
