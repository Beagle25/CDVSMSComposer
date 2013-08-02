//
//  SMSComposer.m
//  SMS Composer plugin for PhoneGap
//
//  Created by Grant Sanders on 12/25/2010.
//

#import "___FILEBASENAME___.h"

@implementation ___FILEBASENAME___

- (CDVPlugin *)initWithWebView:(UIWebView *)theWebView
{
	self = (___FILEBASENAME___ *)[super initWithWebView:theWebView];
	return self;
}

- (void)showSMSComposer:(NSArray *)arguments withDict:(NSDictionary *)options
{
	Class messageClass = (NSClassFromString(@"MFMessageComposeViewController"));

	if (messageClass != nil) {
		if (![messageClass canSendText]) {
			UIAlertView *alert = [[UIAlertView alloc]	initWithTitle	:@"Notice" message:@"SMS Text not available."
														delegate		:self cancelButtonTitle:@"OK" otherButtonTitles:nil];
			[alert show];
#if !__has_feature(objc_arc)
			[alert release];
#endif
			return;
		}
	} else {
		UIAlertView *alert = [[UIAlertView alloc]	initWithTitle	:@"Notice" message:@"SMS Text not available."
													delegate		:self cancelButtonTitle:@"OK" otherButtonTitles:nil];
		[alert show];
#if !__has_feature(objc_arc)
		[alert release];
#endif
		return;
	}

	NSString	*body = [options valueForKey:@"body"];
	NSString	*toRecipientsString = [options valueForKey:@"toRecipients"];

	MFMessageComposeViewController *picker = [[MFMessageComposeViewController alloc] init];

	picker.messageComposeDelegate = self;

	if (body != nil) {
		picker.body = [options valueForKey:@"body"];
	}

	if (toRecipientsString != nil) {
		[picker setRecipients:[toRecipientsString componentsSeparatedByString:@","]];
	}

	[self.viewController presentModalViewController:picker animated:YES];
	[[UIApplication sharedApplication] setStatusBarHidden:YES];	// /This hides the statusbar when the picker is presented -@RandyMcMillan
#if !__has_feature(objc_arc)
	[picker release];
#endif
}

// Dismisses the composition interface when users tap Cancel or Send. Proceeds to update the message field with the result of the operation.
- (void)messageComposeViewController:(MFMessageComposeViewController *)controller didFinishWithResult:(MessageComposeResult)result
{
	// Notifies users about errors associated with the interface
	int webviewResult = 0;

	switch (result) {
		case MessageComposeResultCancelled:
			webviewResult = 0;
			break;

		case MessageComposeResultSent:
			webviewResult = 1;
			break;

		case MessageComposeResultFailed:
			webviewResult = 2;
			break;

		default:
			webviewResult = 3;
			break;
	}

	[self.viewController dismissModalViewControllerAnimated:YES];

	NSString *jsString = [[NSString alloc] initWithFormat:@"window.plugins.smsComposer._didFinishWithResult(%d);", webviewResult];
	[self writeJavascript:jsString];
#if !__has_feature(objc_arc)
	[jsString release];
#endif
}

@end
