cordova.commandProxy.add("UniversalAnalytics",{
    startTrackerWithId:function(successCallback, errorCallback, trackingId) {
        trackingId = JSON.stringify(trackingId);
        try {
            var res = UniversalAnalyticsRuntimeComponent.UniversalAnalytics.def.startTrackerWithId(trackingId);
            successCallback();
            
        } catch (error) {
            console.log("Error while starting tracker : " + error);
            errorCallback(res);
        }
        
    },
    trackEvent: function (successCallback, failCallback, args)
    {
        args = JSON.stringify(args);
        try {
            var res = UniversalAnalyticsRuntimeComponent.UniversalAnalytics.def.trackEvent(args);
            successCallback();
        }
        catch (error)
        {
            console.log("Error while tracking event : " + error);
            errorCallback(res);
        }
    }
});