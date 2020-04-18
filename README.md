# WebXR_Demos

The workflow for developing WebXR application while in VR

Run:

node demo.js 

Nav to localhost:8082/demo.html

This should start SteamVR auto-magically. To enter VR, click the goggles Icon

Update, while in the headset you don't need to click the goggles icon. After putting the URL in and pressing enter, Firefox will start. But this is where it freezes up. It just says, "Firefox next up" and does nothing.

I tried visiting localhost:8082 via SuperMedium, but nothing happened. 

Here is the only thing that worked, clicking the goggles at the bottom left corner of the brower will take me into the WebXR app. But this sucks because I want to not take off my headset. 

Ok here is how I did this, Launch the URL via FireFox. It will stall of course!
Now nav back to the desktop via steam (not Virtual Desktop). Now you can click the googles, this will take you into the WebXR app. 

This does NOT work in Chrome. 

Various demos and code around the WebXR API

04/18/2020

https://github.com/jSquaredSolutions/WebXR_Demos/wiki/WebXR-Workflow

core:a-assets:warn Asset loading timed out in   3000 ms browser.js:111:32

Why? 

Adding the file to the demo.js web server seems to fix this issue.

Error: GLTFLoader: 2ms - timer ended

Why?

