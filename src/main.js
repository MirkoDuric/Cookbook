// add onclick="cardReposition () to card button
function cardReposition () {
    console.log("card click trigger working");
    document.getElementById("blogCard1").style.gridRowStart = "1";
    document.getElementById("blogCard1").style.gridColumnStart = "1"; 
    document.getElementById("blogCard1").style.gridRowEnd = "-1";
    document.getElementById("blogCard1").style.gridColumnEnd = "-1";
}