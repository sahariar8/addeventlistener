
function  makeBlue()
{
    document.body.style.background = "blue";
}

const green = document.getElementById('Green');

function makeGreen(){
    document.body.style.background = "green";
}
green.onclick = makeGreen;

document.getElementById('tomato').addEventListener('click',function(){document.body.style.background = "tomato"})