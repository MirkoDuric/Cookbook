// // identify buttonID, establish cardID, inject css
// let cardOrder = -1;
// const onClick = (event) => {
//     // establish Card ID
//     if (event.target.nodeName === 'BUTTON') {
//         console.log(event.target.id);
//         const cardID = "card" + event.target.id;
//         console.log(cardID);
//         // reposition Card
//         console.log(cardOrder);
//         document.getElementById(cardID).style.order = cardOrder;
//         cardOrder--
//         console.log(cardOrder);
//         // resize Card
//         document.getElementById(cardID).style.height = "700px";
//         document.getElementById(cardID).style.width = "100%";
//             // reformat card
//                 document.getElementById(cardID).style.display = "flex"
//                 document.getElementById(cardID).style.alignItems = "flex-start"
//             // create method and ingredients sections
//                 var tag = document.createElement("div");
//                 var textIngredients = ("Ingredients");
//                 tag.appendChild(textIngredients);
//                 var element = document.getElementById(cardID);
//                 element.appendChild(tag);
//     }
//   }
//   window.addEventListener('click', onClick);

// RESIZING FUNCTION
const cards = document.querySelectorAll(".resizeCard");
const recipeButtons =  document.querySelectorAll(".recipeButton");

function resizingCard(e){
  const classesForBigCards = 'card text-center col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 resizeCard expanded';
  const classesForSmalCards = 'card text-center col-10 col-sm-10 col-md-5 col-lg-3 col-xl-3';
  const cardParentDiv = e.target.parentNode.parentNode;
  let cardHeight =  cardParentDiv.offsetHeight;
  console.log(cardHeight);
  console.log(cardParentDiv.offsetWidth);
  if(!cardParentDiv.classList.contains('expanded')){
      console.log('if condition ok')
      cardParentDiv.style.height = "700px";
      cardParentDiv.className = classesForBigCards;
  }else {
    console.log('else condition ok')
      cardParentDiv.className = classesForSmalCards;
      cardParentDiv.style.height = "448px";
  }
};

for(let i = 0; i < recipeButtons.length; i++){
  recipeButtons[i].addEventListener('click', function(e){
    console.log('Event Ok')
    resizingCard(e);
  })
}
// ALERT MESSAGE
const buttons = document.querySelectorAll(".shareButton");
function alertMessage(){
  alert('Share our recipe!')
}

 for (let i = 0; i < buttons.length; i++) {
     buttons[i].addEventListener("click", function() {
       alertMessage();
     });
 }
 // function killCard () {
//     console.log("killcard triggered");
//     var elem = document.getElementById("killme");
//     elem.remove();
// }