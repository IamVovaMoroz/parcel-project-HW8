const e=document.querySelector("iframe"),n=new Vimeo.Player(e);n.on("play",(function(){console.log("played the video!")})),n.getVideoTitle().then((function(e){console.log("title:",e)}));n.on("play",(function(e){})),n.play().then((function(){})).catch((function(e){e.name}));
//# sourceMappingURL=02-video.0a45fb65.js.map
