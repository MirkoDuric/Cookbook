// identify buttonID, establish cardID, inject css
// let cardOrder = -1;
// const onClick = (event) => {
    // establish Card ID
    // if (event.target.nodeName === 'BUTTON') {
        // console.log(event.target.id);
        // const cardID = "card" + event.target.id;
        // console.log(cardID);
        // reposition Card
        // console.log(cardOrder);
        // document.getElementById(cardID).style.order = cardOrder;
        // cardOrder--
        // console.log(cardOrder);
        // resize Card
        // document.getElementById(cardID).style.height = "700px";
        // document.getElementById(cardID).style.width = "100%";
            // reformat card
                // document.getElementById(cardID).style.display = "flex"
                // document.getElementById(cardID).style.alignItems = "flex-start"
            // create method and ingredients sections
                // var tag = document.createElement("div");
                // var textIngredients = ("Ingredients");
                // tag.appendChild(textIngredients);
                // var element = document.getElementById(cardID);
                // element.appendChild(tag);
  //   }
  // }
  // window.addEventListener('click', onClick);

const cards = document.querySelectorAll(".resizeCard");
let cardWidth = cards.offsetWidth;
let cardHeight = cards.offsetHeight;
const recipeButtons =  document.querySelectorAll(".recipeButton");

function resizingCard(){
  if(!(cardWidth == "100%")){
    for(let i=0; i<cards.length; i++){
      cardWidth = "100%";
      cardHeight = "700px";
    }
  }else {
    for(let i=0; i<cards.length; i++){
      cardWidth = "42%";
    }
  }
};

for(let i = 0; i < recipeButtons.length; i++){
  recipeButtons[i].addEventListener('click', function(){
    console.log('Ok')
    resizingCard();
  })
}
// document.addEventListener('DOMContentLoaded', resizingCard, false);



  
// function killCard () {
//     console.log("killcard triggered");
//     var elem = document.getElementById("killme");
//     elem.remove();
// }
const buttons = document.querySelectorAll(".shareButton");
function alertMessage(){
  alert('Share our recipe!')
}

 for (let i = 0; i < buttons.length; i++) {
     buttons[i].addEventListener("click", function() {
       alertMessage();
     });
 }