const{config}=require("./wdio.conf");

config.capabilities=[
    {
        platformName: "Android",
        platformVersion: "10.0",
        // deviceName: "Pixel_3_XL_API_29",
        deviceName: "emulator",
        automationName: "UiAutomator2",
        // app: "/Users/usr/Documents/AppUI-AutoTest/app/Android-NativeDemoApp-0.2.1.apk"
        app: "/bitrise/src/AppUI-AutoTest/app/Android-NativeDemoApp-0.2.1.apk"
    }
];

exports.config = config;