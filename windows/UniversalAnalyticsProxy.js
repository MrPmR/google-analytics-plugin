cordova.commandProxy.add("UniversalAnalytics",{
    startTrackerWithId:function(successCallback, errorCallback, trackingId) {
        try {
            var res = UniversalAnalyticsRuntimeComponent.UniversalAnalytics.default.startTrackerWithId(trackingId);
            successCallback();
            
        } catch (error) {
            console.log("Error while starting tracker : " + error);
            errorCallback(res);
        }
        
    }
});