!function(){const n=document.querySelector("iframe"),e=new Vimeo.Player(n);e.on("play",(function(){console.log("played the video!")})),e.getVideoTitle().then((function(n){console.log("title:",n)}));e.on("play",(function(n){})),e.play().then((function(){})).catch((function(n){n.name}))}();
//# sourceMappingURL=02-video.f1ab859b.js.map
