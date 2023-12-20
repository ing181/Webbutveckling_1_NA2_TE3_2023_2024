

var x = document.getElementById("knapp");
x.addEventListener("click",red);
function red()
{
    document.getElementById("gul").style.backgroundColor="red";
}
var x= document.getElementById("gul");
x.addEventListener("mouseover",black);

function black()
{
    document.getElementById("gul").style.backgroundColor="black";
}
