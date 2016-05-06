cordova.commandProxy.add("UniversalAnalyticsPlugin",{
    startTrackerWithId:function(successCallback, errorCallback, strInput) {
        console.log("strInput" + strInput);
        var res = UniversalAnalyticsRuntimeComponent.UniversalAnalytics.startTrackerWithId(strInput);
        if(res.indexOf("Error") == 0) {
            errorCallback(res);
        }
        else {
            successCallback(res);
        }
    }
});