const Asteroid = require("./asteroid");


const canvasCtx = document.addEventListener("DOMContentLoaded", () => {
        const canvasEl = document.getElementById("game-canvas");
        console.log(canvasEl);
        canvasEl.width=800;
        canvasEl.height=1100;
        
        const ctx = canvasEl.getContext('2d');  
        window.ctx = ctx;
        window.Asteroid = Asteroid;
        ctx.fillStyle = 'black';
        ctx.fillRect(20, 20, 700, 750);


})
//     console.log(ctx);
//     ctx.fillStyle = 'black';
//     ctx.fillRect(0, 0, 500, 500);
//     ctx.beginPath(); // prepare to draw to a shape.
//     ctx.arc(250, 250, 80, 0, 2 * Math.PI, true); // define the path of the line that will be drawn.  The first two numbers are the x and y position of the center of the shape. The third value is the radius of the arc.  The fourth is the starting angle, and the fifth is the finishing angle.
//     ctx.strokeStyle = 'white'; // define the color of the line to be drawn.
//     ctx.lineWidth = 30; // define the width of the line.
//     ctx.stroke(); // Actually draw the line onto the canvas.
//     ctx.fillStyle = 'blue'; // define the color for the inside of the shape.
//     ctx.fill(); // fill in the shape with it's fill color.
//   }) 
  
 module.exports = { canvasCtx };

// const MovingObject = require("./moving_object.js");
// window.MovingObject = MovingObject;