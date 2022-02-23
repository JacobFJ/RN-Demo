#import <React/RCTBridgeDelegate.h>
#import <EXUpdates/EXUpdatesAppController.h>
#import <Expo/Expo.h>
#import <UIKit/UIKit.h>

#import <ExpoModulesCore/EXAppDelegateWrapper.h>

@interface AppDelegate : EXAppDelegateWrapper <RCTBridgeDelegate, EXUpdatesAppControllerDelegate>

@property (nonatomic, strong) UIWindow *window;

@end
