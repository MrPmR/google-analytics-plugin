cordova.commandProxy.add("UniversalAnalytics",{
    tracker: null,
    startTrackerWithId:function(successCallback, errorCallback, strInput) {
        var UA = strInput[0];
        if(this.tracker == null)
        {
            this.UA = new UniversalAnalyticsRuntimeComponent.UniversalAnalytics();
        }
        var res =UA.startTrackerWithId(trackingId);
        if(res.indexOf("Error") == 0) {
            errorCallback(res);
        }
        else {
            successCallback(res);
        }
    }
});