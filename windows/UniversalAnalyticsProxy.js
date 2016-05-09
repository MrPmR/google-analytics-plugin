cordova.commandProxy.add("UniversalAnalytics",{
    UA: null,
    startTrackerWithId:function(successCallback, errorCallback, strInput) {
        var trackingId = strInput[0];
        if(this.UA == null)
        {
            this.UA = new UniversalAnalyticsRuntimeComponent.UniversalAnalytics();
        }
        var res = this.UA.startTrackerWithId(trackingId);
        if(res.indexOf("Error") == 0) {
            errorCallback(res);
        }
        else {
            successCallback(res);
        }
    }
});