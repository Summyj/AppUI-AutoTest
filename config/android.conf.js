const{config}=require("./wdio.conf");

config.capabilities=[
    {
        platformName: "Android",
        platformVersion: "10.0",
        deviceName: "Pixel 3 XL API 29",
        automationName: "UiAutomator2",
        app: "/Users/myjing/Documents/appAuto-Android/app/Android-NativeDemoApp-0.2.1.apk"
    }
];

exports.config = config;