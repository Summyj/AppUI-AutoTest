const {config} = require('./wdio.config'); 

config.capabilities = [ 
{ 
 platformName: 'iOS', 
 deviceName: 'iPhone 11', 
 platformVersion: '14.0', 
 automationName: 'XCUITest', 
 app: '/Users/vagrant/git/e2eRepo/AppUI-AutoTest/app/iOS-Simulator-NativeDemoApp-0.2.1.app', 
 } 
 ]; 
 exports.config = config; 

 
