// identify buttonID, establish cardID, inject css
let cardOrder = -1;
const onClick = (event) => {
    if (event.target.nodeName === 'BUTTON') {
        // establish Card ID
        console.log(event.target.id);
        const cardID = "card" + event.target.id;
        console.log(cardID);
        // reposition Card
        console.log(cardOrder);
        document.getElementById(cardID).style.order = cardOrder;
        cardOrder--;
        console.log(cardOrder);
        // resize Card
        document.getElementById(cardID).style.height = "700px";
        document.getElementById(cardID).style.width = "100%";

        // const box = document.createElement("div");
        // box.id = "box";
        // document.body.appendChild(box);
        // document.getElementById(cardID).appendChild(box);

        // const button = document.createElement("button");
        // button.innerText = "Button";
        // button.id = "button-1";
        // box.appendChild(button);

        // const box = document.createElement("div");
        // box.id = "box";
        // document.body.appendChild(box);
        // document.getElementById(cardID).appendChild(box);

        // reformat card
        document.getElementById(cardID).style.display = "grid";
        // document.getElementById(cardID).style.gridTemplateColumns = "auto 1fr";
        // document.getElementById(cardID).style.gridTemplateRows = "1fr 1fr";
        // document.getElementById(cardID).style.gridColumnStart = "1";
        // document.getElementById(cardID).style.gridRowStart = "1";


        // create method and ingredients sections
            // var tag = document.createElement("div");
            // var textIngredients = ("Ingredients");
            // tag.appendChild(textIngredients);
            // var element = document.getElementById(cardID);
            // element.appendChild(tag);
    }
  }
  window.addEventListener('click', onClick);


  // function killCard () {
      //     console.log("killcard triggered");
      //     var elem = document.getElementById("killme");
//     elem.remove();
// }
