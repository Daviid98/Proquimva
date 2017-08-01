/**
 * Copyright (C) 2015 Gimbal, Inc. All rights reserved.
 *
 * This software is the confidential and proprietary information of Gimbal, Inc.
 *
 * The following sample code illustrates various aspects of the Gimbal SDK.
 *
 * The sample code herein is provided for your convenience, and has not been
 * tested or designed to work on any particular system configuration. It is
 * provided AS IS and your use of this sample code, whether as provided or
 * with any modification, is at your own risk. Neither Gimbal, Inc.
 * nor any affiliate takes any liability nor responsibility with respect
 * to the sample code, and disclaims all warranties, express and
 * implied, including without limitation warranties on merchantability,
 * fitness for a specified purpose, and against infringement.
 */

#ifndef GMBLAction_h
#define GMBLAction_h

/// Supported action types
typedef NS_ENUM(NSInteger, GMBLActionType) {
    GMBLActionTypeUnknown,
    GMBLActionTypeWebView,
    GMBLActionTypeCarousel,
    GMBLActionTypeImage,
    GMBLActionTypeVideo,
    GMBLActionTypeAudio,
    GMBLActionTypeDeepLink
};

/// Action behavior when it is received while the app is in the foreground
typedef NS_ENUM(NSInteger, GMBLForegroundBehavior) {
    GMBLForegroundBehaviorUnknown,
    GMBLForegroundBehaviorNOOP,
    GMBLForegroundBehaviorNotify,
    GMBLForegroundBehaviorDialog,
    GMBLForegroundBehaviorDisplay,
    GMBLForegroundBehaviorNothing,
    GMBLForegroundBehaviorPlay
};

@class GMBLVisit;

/*!
 The GMBLAction class describes an action that was created in the Gimbal Experince Manager.
 */
@interface GMBLAction : NSObject

/// The type of action generated
@property (nonatomic, readonly) GMBLActionType actionType;

/// The behavior of an action when it is received in the foreground
@property (nonatomic, readonly) GMBLForegroundBehavior behavior;

/// An array of tags associated to the experience
@property (nonatomic, readonly) NSArray *tags;

/// The visit that triggered the action
@property (nonatomic, readonly) GMBLVisit *visit;

/// Date at which the action will be delivered
@property (nonatomic, readonly) NSDate *deliveryDate;

/*!
 The title for a notification generated by the action. 
 (Note: In the actual notification sent to the user, the title
 will be changed to the app name by the OS.)
 */
@property (nonatomic, readonly) NSString *notificationTitle;

/// The message that will be sent as the body of the notification triggered by the action.
@property (nonatomic, readonly) NSString *notificationMessage;

@end

#endif /* GMBLAction_h */
