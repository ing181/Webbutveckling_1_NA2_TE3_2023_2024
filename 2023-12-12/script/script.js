var x = document.getElementById("knapp");
x.addEventListener("click",red);
function red()
{
    document.getElementById("gul").style.backgroundColor("red");
}
var  y= document.getElementById("gul");
y.addEventListener("mouseover",black);

function black()
{
    document.getElementById("gul").style.backgroundColor("black");
}