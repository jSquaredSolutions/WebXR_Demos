# WebXR_Demos
Various demos and code around the WebXR API

To get this working.

1. Run demo.js in node (I'll some change this to npm start opening automatically in firefox)
2. Open firefox and visit this URL localhost:8082/demo.html
3. interestingly when you visit the URL firefox "Knows" it's VR and launches steamVR without our needing to. You MUST click the "headset" icon in the left of the screen to start. The steamVR UI might be covering it up. 

b8: Added a outside sound
moved the sphere up and in so I could see it 
removed animation aframe lib script
removed vive.js cause I wasn't using them. 
I need to find a way to stop the server and re-launch firefox