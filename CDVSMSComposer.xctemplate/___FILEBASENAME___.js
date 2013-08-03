/*
 *   Licensed to the Apache Software Foundation (ASF) under one
 *   or more contributor license agreements.  See the NOTICE file
 *   distributed with this work for additional information
 *   regarding copyright ownership.  The ASF licenses this file
 *   to you under the Apache License, Version 2.0 (the
 *   "License"); you may not use this file except in compliance
 *   with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing,
 *   software distributed under the License is distributed on an
 *   "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *   KIND, either express or implied.  See the License for the
 *   specific language governing permissions and limitations
 *   under the License.
 *
 *      ___FILEBASENAME___
 *      ___FILEBASENAME___ Template Created ___DATE___.
 *      Copyright 2013 @RandyMcMillan
 *
 *     Created by ___FULLUSERNAME___ on ___DATE___.
 *     Copyright ___ORGANIZATIONNAME___ ___YEAR___. All rights reserved.
 */

(function() {
 
 var cordovaRef = window.PhoneGap || window.Cordova || window.cordova; // old to new fallbacks
 
 function ___FILEBASENAME___(){
 
 this.resultCallback = null;
 
 }
 
 ___FILEBASENAME___.ComposeResultType = {
 
 Cancelled:0,
 Sent:1,
 Failed:2,
 NotSent:3
 
 }
 
 
 ___FILEBASENAME___.prototype.showSMSComposer = function(toRecipients, body) {
 
 var args = {};
 
 if(toRecipients)
 
 args.toRecipients = toRecipients;
 
 if(body)
 
 args.body = body;
 
 cordovaRef.exec("___FILEBASENAME___.showSMSComposer",args);
 
 }
 
 ___FILEBASENAME___.prototype.showSMSComposerWithCB = function(cbFunction,toRecipients,body) {
 
 this.resultCallback = cbFunction;
 this.showSMSComposer.apply(this,[toRecipients,body]);
 
 }
 
 ___FILEBASENAME___.prototype._didFinishWithResult = function(res) {
 
 this.resultCallback(res);
 
 }
 
 ___FILEBASENAME___.install = function() {
 
 if ( !window.plugins ) {
 
 window.plugins = {};
 
 }
 
 if ( !window.plugins.___FILEBASENAME___ ) {
 
 window.plugins.___FILEBASENAME___ = new ___FILEBASENAME___();
 
 }
 
 }
 
 if (cordovaRef && cordovaRef.addConstructor) {
 
 cordovaRef.addConstructor(___FILEBASENAME___.install);
 
 } else {
 
 console.log("___FILEBASENAME___ Cordova Plugin could not be installed.");
 
 return null;
 
 }
 
 
 })();