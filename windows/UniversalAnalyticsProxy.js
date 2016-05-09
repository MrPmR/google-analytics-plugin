cordova.commandProxy.add("UniversalAnalytics",{
    startTrackerWithId:function(successCallback, failCallback, args) {
        if(args.length < 0)
            failCallback("Bad tracking Id");
        var config = new GoogleAnalytics.EasyTrackerConfig();
        config.trackingId = args[0];
        // TODO: Get real app name/version
        config.appName = "Test App";
        config.appVersion = "1.0.0.0";
        GoogleAnalytics.EasyTracker.current.config = config;
        // trackingId = JSON.stringify(trackingId);
        // try {
        //     var res = UniversalAnalyticsRuntimeComponent.UniversalAnalytics.def.startTrackerWithId(trackingId);
        //     successCallback();
            
        // } catch (error) {
        //     console.log("Error while starting tracker : " + error);
        //     errorCallback(res);
        // }
        
    },
    trackEvent: function (successCallback, failCallback, args)
    {
        switch(args.length)
        {
            case 0:
                failCallback("Expected at least two arguments");
                break;
            case 1:
                failCallback("Expected at least two arguments");
                break;
            case 2:
                GoogleAnalytics.EasyTracker.getTracker().sendEvent(args[0], args[1]);
                break;
            case 3:
                GoogleAnalytics.EasyTracker.getTracker().sendEvent(args[0], args[1], args[2]);
                break;
            default:
                GoogleAnalytics.EasyTracker.getTracker().sendEvent(args[0], args[1], args[2], args[3]);
                break;
        }
        successCallback();
        // args = JSON.stringify(args);
        // try {
        //     var res = UniversalAnalyticsRuntimeComponent.UniversalAnalytics.def.trackEvent(args);
        //     successCallback();
        // }
        // catch (error)
        // {
        //     console.log("Error while tracking event : " + error);
        //     errorCallback(res);
        // }
    }
});