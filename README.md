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

Why? Don't know yeah as this error does not seem to prevent the GLTF from being seen in the scene

04/19/2020

Why is it that the shere exported as .glb from TinderCad has such a different position that the naive Sphere? 

I think this is because when I exported in TinkerCad I exported the whole scene and not just the shape. I also notice when viewing in firefox proper that the scene is way brigther. 

components:gltf-model:warn THREE.GLTFLoader: Failed to load buffer "2020.04.19-14.32.22.bin". 

I need the 2020.04.19-14.32.22.bin to the web server list and this error was resolved.

I compared side by side the .gltf and the .glb and I can not tell a difference. The color from Sculpt carried over!! Nice, next I'll try a multicolor object and see if each color carries over. 

After adding a light I can see the .glb ang .gltf. Some of the edges are smooth after the export. But for the most part both look identical with high detail. 

Something is still very strange about the scaling. The .glb is huge .1 and average size at .001

I zoomed out .01x in SculptVR and save thinking that might being the scale closer to normal. 

I couldn't get that scaled down model to work. 

core:a-assets:warn Asset loading timed out in   3000 ms

I'll try cranking up the timeout threshold