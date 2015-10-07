var appUtils = require('utils/appUtils'),
router = require('utils/router'),
index = require('utils/app');

var app = {
  initialize: function() {
    this.bindEvents();
    appUtils.hideToolbar();
},
bindEvents: function() {
    if(appUtils.isPhonegap()) {
      console.log("is PG");
      document.addEventListener('deviceready', this.onDeviceReady, false);
  }else{
      console.log("is not PG");
      window.onload = this.onDeviceReady();
  }
},
onDeviceReady: function() {
    console.log("device ready");
    app.receivedEvent('deviceready');
},
receivedEvent: function(event) {
    switch (event) {
      case 'deviceready':
      app.initMainView();
      break;
  }
},
initMainView:function(){
    var lang = appUtils.getLocal();
    console.log("lang", lang)
    switch (lang){
      case 'en-us':
      console.log("en-us");
      // require(['lang/en-us'], function(lang){
      //   window.i18n = lang;
        app.initFramework7();
    // });
      break;
      case 'zh-cn':
      // require(['lang/zh-cn'], function(lang){
      //   window.i18n = lang;
        app.initFramework7();
    // });
      break;
  }

},
initFramework7: function(){
    console.log("init F7");
        //Register custom Template7 helpers
        Template7.registerHelper('t', function (options){
          var key = options.hash.i18n || '';
          var keys = key.split('.');

          var value;
          for (var idx = 0, size = keys.length; idx < size; idx++)
          {
            if (value != null)
            {
              value = value[keys[idx]];
          } else {
              value = i18n[keys[idx]];
          }

      }
      return value;
  });

        window.$$ = Dom7;
        window.myApp = new Framework7({
          pushState: false,
          popupCloseByOutside:false,
          animateNavBackIcon: true,
          modalTitle: "TITLE",//i18n.global.modal_title,
          modalButtonOk: "OK", //i18n.global.modal_button_ok,
          modalButtonCancel: "Cancel"//i18n.global.cancel
            // template7Pages: true,
            // template7Data: {
            //     'page:item': {
            //         back: i18n.global.back,
            //         title: i18n.item.title,
            //         comment: i18n.timeline.comment,
            //         forward: i18n.timeline.forward
            //     },
            //     'page:message': {
            //         chat: i18n.chat.title,
            //         chatPlaceholder: i18n.chat.chatPlaceholder,
            //         send: i18n.global.send
            //     },
            //     'page:feedback': {
            //         feedBack: i18n.setting.feed_back,
            //         feedBackPlaceholder: i18n.setting.feed_back_placeholder
            //     },
            //     'page:about': {
            //         appName: i18n.app.name,
            //         about: i18n.setting.about
            //     },
            //     'page:language': {
            //         back: i18n.global.back,
            //         done: i18n.global.done,
            //         switchLanguage: i18n.global.switch_language
            //     }
            // }
        });

// window.homeF7View = myApp.addView('#siew', {
//   dynamicNavbar: true
// });

        // hiApp.addView('#contactView', {
        //     dynamicNavbar: true
        // });

        // myApp.addView('#settingView', {
        //     dynamicNavbar: true
        // });

        // init app
        router.init();
        index.init();
    }
};

app.initialize();

// // Initialize app and store it to myApp variable for futher access to its methods
// var myApp = new Framework7({
//   init: false //Disable App's automatica initialization
// });
// // We need to use custom DOM library, let's save it to $$ variable:
// var $$ = Dom7;
// var appFunc = require('utils/appUtils');
// // Add view
// // appFunc.hideToolbar();
// var mainView = myApp.addView('.view-main', {
//   // Because we want to use dynamic navbar, we need to enable it for this view:
//   dynamicNavbar: true
// });

// // Now we need to run the code that will be executed only for About page.
// function setFlexboxHeight(){
//   var screenH = document.documentElement.clientHeight;
//   var headerH = document.getElementsByTagName('header')[0].clientHeight;
//   var navH = document.getElementsByTagName('nav')[0].clientHeight;
//   var footerH = document.getElementsByTagName('footer')[0].clientHeight;
//   //remaining height = screen - header - nav - footer
//   var heightLeft = screenH - headerH - navH - footerH;
//   document.getElementById('flexbox').style.height = (heightLeft - 20) + "px";
//   // document.getElementsByClassName('pages')[0].style.height = (screenH - navH) + "px";
// }

// //home page JS calls on init
// // appFunc.hideToolbar();
// // setFlexboxHeight();
// // mainView.router.loadContent($$('#myPage').html());
// myApp.onPageBeforeAnimation('index', function (page) {
//   // Do something here for "about" page
//   // myApp.alert('Here comes About page');
//   // appFunc.hideToolbar();
//   setFlexboxHeight();
// })
// myApp.onPageInit('index', function (page) {
//   // Do something here for "about" page
//   myApp.alert('Here comes Index page');
//   // myApp.alert('Here comes About page');
//   appFunc.showToolbar();
// })
// // Option 1. Using page callback for page (for "about" page in this case) (recommended way):
// myApp.onPageInit('about', function (page) {
//   // Do something here for "about" page
//   // myApp.alert('Here comes About page');
//   appFunc.showToolbar();
// })
// myApp.addView('#settingView', {
//   dynamicNavbar: true
// });
// settingView = require('../setting/setting');
// settingView.init();
// myApp.init();