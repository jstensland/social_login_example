// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


$.externalScript("http://cdn-social.janrain.com/social/janrain-social.min.js")
// # settings for the app
janrain.settings.appUrl = 'https://social-login-example.rpxnow.com';
janrain.settings.social = {
   providers: [
       "facebook",
       "email-google",
       "native-facebook",
       "native-googleplus"
   ],
   orientation: "vertical",
   formFactor: "drawer"
};


window.addEventListener("load", pageFullyLoaded, false);

function pageFullyLoaded(e) {
   janrain.social.addWidgetTo($('.janrainSocialPlaceholder').get(0));
};
