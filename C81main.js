canvas=document.getElementById("draw");
ctx=canvas.getContext("2d");
colour="#76a0e3";

canvas.addEventListener("mousedown",my_mouse_down)
function my_mouse_down(e){
    var x=e.clientX-canvas.offsetLeft;
    var y=e.clientY-canvas.offsetTop;
    console.log("xvalue= "+x+" yvalue= "+y);
    circle(x,y);
}
function circle(x,y){
    ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=5;
ctx.arc(x,y,50,0,2*Math.PI);
ctx.stroke();

ctx.strokeStyle=colour;
ctx.lineWidth=1;
console.log("last_x="+last_x+" last_y"+last_y);
ctx.moveTo(last_x,last_y);
console.log("currentX="+currentX+" currentY"+currentY);
  ctx.lineTo(currentX,currentY);
ctx.stroke();
}
function clearcanvass(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}