// javascript

const wdio = require("webdriverio");
const assert = require("assert");

const opts = {
  path: '/wd/hub',
  port: 4723,
  //  capabilities: {
  //    platformName: "Android",
  //    platformVersion: "8",
  //    deviceName: "Android Emulator",
  //    app: "/path/to/the/downloaded/ApiDemos-debug.apk",
  //    appPackage: "io.appium.android.apis",
  //    appActivity: ".view.TextFields",
  //    automationName: "UiAutomator2"
  //  }
  capabilities: {
    "platformName": "iOS",
    "platformVersion": "14.4",
    "deviceName": "iPhone 7",
    "automationName": "XCUITest",
    "app": "Expo Go"
  }
};

async function main () {
  const client = await wdio.remote(opts);

  const field = await client.$("android.widget.EditText");
  await field.setValue("Hello World!");
  const value = await field.getText();
  assert.strictEqual(value,"Hello World!");

  await client.deleteSession();
}

main();
