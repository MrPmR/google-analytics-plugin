UniversalAnalyticsProxy = {
    
    startTrackerWithId: function (successCallback, failCallback, trackerId, args)
    {
        console.log('starting tracker with id' + trackerId);
        // successCallback([version.major, version.minor, version.build, version.revision].join('.'));
    },
    trackView: function (successCallback, failCallback, screen)
    {
        console.log('tracking view' + screen);
    },
    trackEvent: function (successCallback, failCallback, category, action, label, value)
    {
        console.log('tracking event' + category + action + label);
    },
    trackException: function (successCallback, failCallback, args)
    {
         console.log('tracking exception' + args);
    },
    trackTiming: function (successCallback, failCallback, category, intervalInMilliseconds, name, label)
    {
          console.log('tracking timing' + category);
    },
    addTransaction: function (successCallback, failCallback, args)
    {
         console.log('add transaction' + args);
    },
    addTransactionItem: function (successCallback, failCallback, args)
    {
         console.log('add transactionItem' + args);
    },
    setUserId: function (successCallback, failCallback, args)
    {
         console.log('set user id' + args);
        throw 'setUserId is not implemented for Lavaca';
    },
    debugMode: function (successCallback, failCallback, args)
    {
        console.log('debug mode' + args);
        throw 'debugMode is not implemented for Lavaca';

    },
    enableUncaughtExceptionReporting: function (successCallback, failCallback, args)
    {
         console.log('enable uncaught reporting' + args);
    },
  
};
cordova.commandProxy.add("UniversalAnalyticsProxy", UniversalAnalyticsProxy);