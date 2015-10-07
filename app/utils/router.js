var index = require('utils/app'),
    appUtils = require('utils/appUtils');
    // tweetModule = require('./tweet/tweet'),
    // feedbackModule = require('./feedback/feedback'),
    // aboutModule = require('./about/about'),
    // languageModule = require('./language/language'),
    // messageModule = require('./message/message');

module.exports = {
    init: function() {
        var that = this;
        $$(document).on('pageBeforeInit', function (e) {
            var page = e.detail.page;
            that.pageBeforeInit(page);
        });

        $$(document).on('pageAfterAnimation', function (e) {
            var page = e.detail.page;
            that.pageAfterAnimation(page);
        });
    },
    pageAfterAnimation: function(page){
        var name = page.name;
        var from = page.from;

        console.log("from", from, "name", name);
        if(name === 'homeView' || name === 'contactView' || name === 'setting' ){
            // if(from === 'left'){
                console.log("name is -> ", name);
                appUtils.showToolbar();
                 myApp.addView('#settingView', {
                    dynamicNavbar: true
                });
            // }
        }
    },
    pageBeforeInit: function(page) {
        var name = page.name;
        var query = page.query;
        appUtils.showToolbar();
        console.log("name", name, "query", query);
        // switch (name) {
        //     case 'about':
        //         aboutModule.init();
        //         break;
        //     case 'feedback':
        //         feedbackModule.init();
        //         break;
        //     case 'item':
        //         tweetModule.init(query);
        //         break;
        //     case 'message':
        //         messageModule.init(query);
        //         break;
        //     case 'language':
        //         languageModule.init();
        //         break;
        // }
    }
};