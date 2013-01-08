/**
 * SMS Composer plugin for Cordova
 * window.plugins.SMSComposer
 * 
 * @constructor
 */
function ___FILEBASENAME___()
{
	this.resultCallback = null;
}

___FILEBASENAME___.ComposeResultType =
{
Cancelled:0,
Sent:1,
Failed:2,
NotSent:3
}

___FILEBASENAME___.prototype.showSMSComposer = function(toRecipients, body)
{
	
	var args = {};
	
	if(toRecipients)
		args.toRecipients = toRecipients;
	
	if(body)
		args.body = body;
	
	cordova.exec("___FILEBASENAME___.showSMSComposer",args);
}

___FILEBASENAME___.prototype.showSMSComposerWithCB = function(cbFunction,toRecipients,body)
{
	this.resultCallback = cbFunction;
	this.showSMSComposer.apply(this,[toRecipients,body]);
}

___FILEBASENAME___.prototype._didFinishWithResult = function(res)
{
	this.resultCallback(res);
}

cordova.addConstructor(function() {
					   
					   if(!window.plugins)	{
					   window.plugins = {};
					   }
					   window.plugins.___FILEBASENAME___ = new ___FILEBASENAME___();
					   });
