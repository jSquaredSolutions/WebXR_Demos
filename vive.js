setInterval(function(){ 
    gameP = navigator.getGamepads();
    gp = gameP[0];
    console.log("x: "+gp.pose.position[0]);
    console.log("y: "+gp.pose.position[1]);
    console.log("z: "+gp.pose.position[2]);
  }, 500);

  /* I originally at this JS in the HTML file, but I could not set breakpoints there */