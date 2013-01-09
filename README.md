CDVSMSComposer
===

Cordova (iOS) Xcode Plugin Template
---




###Installation:
    $ cd ~/Library/Developer/Xcode/Templates/File\ Templates
    $ git clone https://github.com/RandyMcMillan/CDVSMSComposer.git

![image](https://raw.github.com/RandyMcMillan/CDVSMSComposer/master/CDVSMSComposer.xctemplate/ScreenShot.png)

###Usage:
####Open your Cordova (iOS) Xcode Project

* Press `<COMMAND+n>`    

    ![image](https://raw.github.com/RandyMcMillan/CDVSMSComposer/master/CDVSMSComposer.xctemplate/ScreenShot2.png)    

* Add MessageUI.framework to your project<br>

 

    ![image](https://raw.github.com/RandyMcMillan/CDVSMSComposer/master/CDVSMSComposer.xctemplate/ScreenShot3.png)  

* Copy the ___FILEBASENAME___.js file to your /www folder

    ![image](https://raw.github.com/RandyMcMillan/CDVSMSComposer/master/CDVSMSComposer.xctemplate/ScreenShot4.png)
    
[Sample index.html is included in the generated plugin](https://raw.github.com/RandyMcMillan/CDVSMSComposer/master/CDVSMSComposer.xctemplate/index.html)

####Add to www/index.html

`<script type="text/javascript" charset="utf-8" src="CDVSMSComposer.js"></script>`




#####Add Cordova.plist values

| Key | Type | Value |
| ------------ |---| ------------- |
| ___FILEBASENAME___ | String | ___FILEBASENAME___ |

#####Cordova 2.3+ Add config.xml values
`<plugin name="___FILEBASENAME___" value="___FILEBASENAME___" />`

<br>


### • You will need to add MessageUI.framework to your project if it is not already included.


[Sample index.html is included in the generated plugin](https://raw.github.com/RandyMcMillan/CDVSMSComposer/master/CDVSMSComposer.xctemplate/index.html)


    cordova.exec(null, null, "___FILEBASENAME___", "showSMSComposer", [args]);

####or

    function show () {
                    
            var args;
            cordova.exec(null, null, "___FILEBASENAME___", "showSMSComposer", [args]);
                    
                }




<br><br>

 Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at
 
 http://www.apache.org/licenses/LICENSE-2.0
 
 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied.  See the License for the
 specific language governing permissions and limitations
 under the License.
 
 
 or 
 
 
The MIT License

Copyright (c) 2012 Randy McMillan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
