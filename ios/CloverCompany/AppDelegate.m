 #import "AppDelegate.h"

 #import <React/RCTBundleURLProvider.h>
 #import <React/RCTRootView.h>
 #import <Fabric/Fabric.h>
 #import <Crashlytics/Crashlytics.h>
 #import <ReactNativeNavigation/ReactNativeNavigation.h>
 #import "RNSplashScreen.h" 

 @implementation AppDelegate

 - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
 {
     NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
     [ReactNativeNavigation bootstrap:jsCodeLocation launchOptions:launchOptions];
     [Fabric with:@[[Crashlytics class]]];

     //     [RNSplashScreen show];
     return YES;
 }

 @end

