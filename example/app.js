// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var window = Ti.UI.createWindow({
	backgroundColor:'white'
});

var cookiejar = require('com.kosso.cookiejar');
Ti.API.info("module is => " + cookiejar);


// This will log a user out of their Google account in a webview, if no logout option is available (often the case).

cookiejar.clearWebViewCookies('.google.com');
cookiejar.clearWebViewCookies('.google.co.uk');
cookiejar.clearWebViewCookies('accounts.google.com');		