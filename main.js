canvas = document.getElementById("OLY");
ctx= canvas.getContext("2d");
ctx.beginPath()
ctx.strokeStyle = "blue";
ctx.lineWidth = 4 ;
ctx.arc(200, 100, 40, 0, 2*Math.PI);
ctx.stroke()
ctx= canvas.getContext("2d");
ctx.beginPath()
ctx.strokeStyle = "black";
ctx.lineWidth = 4 ;
ctx.arc(300, 100, 40, 0, 2*Math.PI);
ctx.stroke()
ctx= canvas.getContext("2d");
ctx.beginPath()
ctx.strokeStyle = "red";
ctx.lineWidth = 4 ;
ctx.arc(400, 100, 40, 0, 2*Math.PI);
ctx.stroke()
ctx= canvas.getContext("2d");
ctx.beginPath()
ctx.strokeStyle = "yellow";
ctx.lineWidth = 4 ;
ctx.arc(250, 150, 40, 0, 2*Math.PI);
ctx.stroke()
ctx= canvas.getContext("2d");
ctx.beginPath()
ctx.strokeStyle = "green";
ctx.lineWidth = 4 ;
ctx.arc(350, 150, 40, 0, 2*Math.PI);
ctx.stroke()