// add onclick="cardReposition () to card button
function cardReposition () {
    console.log("card click trigger working");
    document.getElementById("blogCard1").style.gridRowStart = "1";
    document.getElementById("blogCard1").style.gridColumnStart = "1"; 
    document.getElementById("card").style.height = "700px";
    document.getElementById("card").style.width = "100%";
}

function killCard () {
    console.log("killcard triggered");
    var elem = document.getElementById("killme");
    elem.remove();
}