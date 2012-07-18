# cookiejar Titanium Module

## Description

Enables the abilty to clear cookies for specified domains from webviews. 
This is often required for webView based third party sites like Twitter/G+ etc. to totally  log out of their various intent windows and accounts etc. 

## Accessing the cookiejar Module

To access this module from JavaScript, you would do the following:

	var cookiejar = require("com.kosso.cookiejar");

The cookiejar variable is a reference to the Module object.	

## Reference

var cookiejar = require('com.kosso.cookiejar');
Ti.API.info("module is => " + cookiejar);


// This will log a user out of their Google account in a webview, if no logout option is available (often the case).

cookiejar.clearWebViewCookies('.google.com');
cookiejar.clearWebViewCookies('.google.co.uk');
cookiejar.clearWebViewCookies('accounts.google.com');		


### ___PROJECTNAMEASIDENTIFIER__.function

clearWebViewCookies(domain)

### ___PROJECTNAMEASIDENTIFIER__.property

TODO: This is an example of a module property.

## Usage

TODO: Enter your usage example here

## Author

TODO: Enter your author name, email and other contact
details you want to share here. 

## License

FREEDOM BABY!