const{config}=require("./wdio.conf");

config.capabilities=[
    {
        platformName: "iOS",
        platformVersion: "14.0",
        deviceName: "iPhone 11",
        automationName: "XCUITest",
        app: "/Users/vagrant/git/AppUI-AutoTest/app/iOS-Simulator-NativeDemoApp-0.2.1.app"
        // app: "/Users/usr/Documents/AppUI-AutoTest/app/iOS-Simulator-NativeDemoApp-0.2.1.app"
    }
];

exports.config = config;
