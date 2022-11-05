const cards = document.querySelectorAll(".resizeCard");
const recipeButtons =  document.querySelectorAll(".recipeButton");
function onClick(e){
    const expandClass = "expanded";
    const parentDiv = e.target.parentNode.parentNode;
    const cardBody = e.target.parentNode;
    if(!parentDiv.classList.contains("expanded")){
        buttonID = event.target.id;
        cardID = "card" + event.target.id; // establish global Card ID
        gridContainerID = "gridContainer" + gridContainerCounter; //establish gridContainerID
        parentDiv.className = "expanded";
        const GridContainer = document.createElement('div')
        GridContainer.id = gridContainerID;
        document.getElementById("flexContainer").appendChild(GridContainer);

        document.getElementById(gridContainerID).style.display = "grid"; //prepare grid skeleton
        document.getElementById(gridContainerID).style.marginTop = "30px";
        document.getElementById(gridContainerID).style.gridTemplateColumns = "222px 1fr";
        document.getElementById(gridContainerID).style.gridTemplateRows = "450px 350px";
        document.getElementById(gridContainerID).style.gap = "10px";

        document.getElementById(gridContainerID).appendChild(document.getElementById(cardID)); //add card to grid
        document.getElementById(cardID).style.gridColumnStart = "1"; //assign location to card
        document.getElementById(cardID).style.gridRowStart = "1";
        document.getElementById(cardID).style.width = "100%"; // get rid of the bootstrap resizing garbage

        window.scrollTo({ top: document.body.scrollHeight, left: 0, behavior: 'smooth' });
        document.getElementById(buttonID).innerText = "Remove"; // replace button text

        document.getElementById(cardID).id = "removeCard" + buttonID;

        const iframeIngredients = document.createElement("iframe"); //create and setup iframe
        iframeIngredients.id = "iframeIngredients" + buttonID;
        const ingredientsPageURL = "./src/iframe files/ingredientsCard" + buttonID + ".html";
        iframeIngredients.src = ingredientsPageURL;
        document.getElementById(gridContainerID).appendChild(iframeIngredients); //add ingredients iframe to grid
        document.getElementById(iframeIngredients.id).style.display = "flex"; //configure iframe
        document.getElementById(iframeIngredients.id).style.gridColumnStart = "2";
        document.getElementById(iframeIngredients.id).style.gridRowStart = "1";
        document.getElementById(iframeIngredients.id).style.width = "100%";
        document.getElementById(iframeIngredients.id).style.height = "100%";

        const iframeMethod = document.createElement("iframe"); //create and setup iframe
        iframeMethod.id = "iframeMethod" + buttonID;
        const methodPageURL = "./src/iframe files/methodCard" + buttonID + ".html";
        iframeMethod.src = methodPageURL;
        document.getElementById(gridContainerID).appendChild(iframeMethod); //add method iframe to grid
        document.getElementById(iframeMethod.id).style.display = "flex"; //configure iframe
        document.getElementById(iframeMethod.id).style.gridColumn = "1 / span 2";
        document.getElementById(iframeMethod.id).style.gridRowStart = "2";
        document.getElementById(iframeMethod.id).style.width = "100%";
        document.getElementById(iframeMethod.id).style.height = "100%";
        gridContainerCounter ++;
    }else{
        parentDiv.style.height = "448px";
        cardBody.

    }
}


for(let i = 0; i < recipeButtons.length; i++){
    recipeButtons[i].addEventListener('click', function(e){
      console.log('Event Ok')
      onClick(e);
    })
  }