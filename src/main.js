// identify buttonID, establish cardID, inject order css
let cardOrder = -1;
const onClick = (event) => {
    if (event.target.nodeName === 'BUTTON') {
        console.log(event.target.id);
        const cardID = "card" + event.target.id;
        console.log(cardID);
        document.getElementById(cardID).style.order = cardOrder;
        cardOrder--
        console.log(cardOrder);
        document.getElementById(cardID).style.height = "700px";
        document.getElementById(cardID).style.width = "100%";
    }
  }
  window.addEventListener('click', onClick);
   
// function killCard () {
//     console.log("killcard triggered");
//     var elem = document.getElementById("killme");
//     elem.remove();
// }
