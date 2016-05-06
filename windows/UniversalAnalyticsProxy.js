cordova.commandProxy.add("UniversalAnalytics",{
    startTrackerWithId:function(successCallback, errorCallback, strInput) {
        var trackingId = strInput[0];
        
        var res = UniversalAnalyticsRuntimeComponent.UniversalAnalytics.startTrackerWithId(trackingId);
        if(res.indexOf("Error") == 0) {
            errorCallback(res);
        }
        else {
            successCallback(res);
        }
    }
});