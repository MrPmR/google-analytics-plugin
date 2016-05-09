cordova.commandProxy.add("UniversalAnalytics",{
    startTrackerWithId:function(successCallback, errorCallback, trackingId) {
        try {
            var res = UniversalAnalyticsRuntimeComponent.UniversalAnalytics.startTrackerWithId(trackingId);
            
        } catch (error) {
            console.log("Error while starting tracker : " + error);
        }
        
    }
});