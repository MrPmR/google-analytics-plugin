cordova.commandProxy.add("UniversalAnalytics",{
    trackerStarted: false,
    debugModeEnabled: false,
    customDimensions: {},
    startTrackerWithId:function(successCallback, failCallback, args) {
        // TODO: On start, create resume and suspend events
        if(args.length < 0)
            failCallback("Tracker Id is not valid.");
        else
        {
            if(this.trackerStarted)
            {
                console.log('Tracker already started');
                return;
            }
            var config = new GoogleAnalytics.EasyTrackerConfig();
            config.trackingId = args[0];
            // TODO: Get real app name/version
            config.appName = "Hall Monitor";
            var version = Windows.ApplicationModel.Package.current.id.version;
            config.appVersion = [version.major + version.minor + version.build + version.revision].join('.');
            GoogleAnalytics.EasyTracker.current.config = config;
            // this.tracker = GoogleAnalytics.EasyTracker.getTracker();
            this.trackerStarted = true;
            successCallback("Tracker started");
        }
        
    },
    trackView: function (successCallback, failCallback, args)
    {
        if(args == null || args.length == 0)
            failCallback("Expected one non-empty string argument");
        else
        {
            var view = args[0];
            GoogleAnalytics.EasyTracker.getTracker().sendView(view);
            successCallback("Track Screen: " + view);
        }
        
    },
    addCustomDimension: function (successCallback, failCallback, args)
    {
      // TODO: Deal with custom dimensions  
    },
    trackEvent: function (successCallback, failCallback, args)
    {
        if(args == null || args.length < 2)
            failCallback("Expected non-empty string arguments");
        else
        {
            switch(args.length)
            {
                case 2:
                    GoogleAnalytics.EasyTracker.getTracker().sendEvent(args[0], args[1], null, 0);
                    break;
                case 3:
                    GoogleAnalytics.EasyTracker.getTracker().sendEvent(args[0], args[1], args[2], 0);
                    break;
                case 4:
                    GoogleAnalytics.EasyTracker.getTracker().sendEvent(args[0], args[1], args[2], args[3]);
                    break;
                default:
                    failCallback("Wrong number of arguments when trying to track Event.");
                    break;        
            }
            successCallback("Track Event: " + args[0]);
        }

    },
    trackException: function (successCallback, failCallback, args)
    {
        if (! this.trackerStarted)
        {
            failCallback("Tracker not started");
            return;
        }
        
        if(args != null && args.length == 2)
        {
            GoogleAnalytics.EasyTracker.getTracker().sendException(args[0], args[1]);
            successCallback("Track Exception: " + args[0]);
        }
        else
        {
            failCallback("Expected non-empty string arguments.");
        }
    },
    trackTiming: function (successCallback, failCallback, args)
    {
        if(!this.trackerStarted)
        {
            failCallback("Tracker not started");
            return;
        }
        if( args != null && args.length == 4)
        {
            GoogleAnalytics.EasyTracker.getTracker().sendTiming(args[1], args[0], args[2], args[3]);
            successCallback("Track Timing: " + args[0]);
        }
        else
        {
            failCallback("Expected non-empty string arguments.");
        }
    },
    addTransaction: function (successCallback, failCallback, args)
    {
        if(!this.trackerStarted)
        {
            failCallback("Tracker not started");
        }
        if(args != null && args.length == 6 && args[0] != null && args[0] != "")
        {
            // TODO: Support transactions
        }
        else
        {
            failCallback("Expected non-empty ID.")
        }
    },
    addTransactionItem: function (successCallback, failCallback, args)
    {
        if(!this.trackerStarted)
        {
            failCallback("Tracker not started");
        }
        if(args != null && args.length == 7 && args[0] != null && args[0] != "")
        {
            // TODO: Support transactions
        }
        else
        {
            failCallback("Expected non-empty ID.")
        }
    },
    debugMode: function(successCallback, failCallback, args)
    {
        
    },
    setUserId: function(successCallback, failCallback, args)
    {
        
    },
    enableUncaughtExceptionReporting: function( successCallback, failCallback, args)
    {
        
    }
    
});