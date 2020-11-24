canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="blue";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth = 5;
ctx.arc(250, 210, 40 ,0, 2 * Math.PI);
ctx.stroke();
color="black";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth = 5 ;
ctx.arc(350, 210, 40 ,0, 2 * Math.PI);
ctx.stroke();
color="red";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth = 5;
ctx.arc(450, 210, 40 ,0, 2 * Math.PI);
ctx.stroke();
color="black";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth = 5;
ctx.arc(350, 210, 40 ,0, 2 * Math.PI);
ctx.stroke();
color="yellow";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth = 5;
ctx.arc(300, 250, 40 ,0, 2 * Math.PI);
ctx.stroke();
color="green";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth = 5;
ctx.arc(400, 250, 40 ,0, 2 * Math.PI);
ctx.stroke();

function circle(mouse_x , mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
    ctx.stroke();
}
function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

}