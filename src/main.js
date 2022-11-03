// identify buttonID, establish cardID, inject css
//let cardOrder = -1;
const onClick = (event) => {
    if (event.target.nodeName === 'BUTTON') {
        // establish Card ID
        const cardID = "card" + event.target.id;
        // reposition Card and decrement cardOrder
        // document.getElementById(cardID).style.order = cardOrder;
        // cardOrder--;
        // resize Card
        //document.getElementById(cardID).style.height = "700px";
        //document.getElementById(cardID).style.width = "100%";

        //Mirko, this is the 1st version of the element creation.
                    // let div = document.createElement('div');
                    // div.id = 'tempGrid';
                    // div.innerHTML = '<p>CreateElement example </p>';
                    // document.body.appendChild(div);
                    // document.getElementById(cardID).parentElement.appendChild(div);
        // shifting to another approach...
        // const cardInUse = document.querySelector("#gridContainer");

                                                          // ("[class^='abc']")
        // const cardInUse = document.getElementById('gridContainer').querySelector("[id^='card']")[0].id;
        if (document.getElementById('gridContainer').style.gridTemplateColumns = "222px 1fr") {
          const cardInUse = document.getElementById('gridContainer').querySelector("div[class~='card']")[0].id;
          console.log(cardInUse);
        }
        // document.getElementById('flexContainer').appendChild(cardInUse);
        document.getElementById('gridContainer').style.gridTemplateColumns = "222px 1fr";
        document.getElementById('gridContainer').style.gridTemplateRows = "450px 350px";
        document.getElementById('gridContainer').appendChild(document.getElementById(cardID)); //add card to grid
        document.getElementById(cardID).style.width = "100%"; // get rid of the bootstrap resizing garbage
        //document.getElementById('gridContainer').appendChild(document.createElement());


                                //add new grid item
                                // const flexIngredientsDiv = document.createElement("div");
                                // flexIngredientsDiv.id = "flexIngredientsDiv";
                                // document.body.appendChild(flexIngredientsDiv);
                                // document.getElementById(cardID).appendChild(flexIngredientsDiv);

                                // const flexIngredients = document.createElement("flexIngredients");
                                // flexIngredients.innerText = "Button";
                                // flexIngredients.id = "flexIngredients-1";
                                // flexIngredientsDiv.appendChild(flexIngredients);

                                // reformat card
                                // document.getElementById(cardID).parentElement.style.display = "grid";
                                // document.getElementById(cardID).style.gridTemplateColumns = "auto 1fr";
                                // document.getElementById(cardID).style.gridTemplateRows = "1fr 1fr";
                                // document.getElementById(cardID).style.gridColumnStart = "1";
                                // document.getElementById(cardID).style.gridRowStart = "1";

    }
  }
  window.addEventListener('click', onClick);

                                // function killCard () {
                                //     console.log("killcard triggered");
                                //     var elem = document.getElementById("killme");
                                //     elem.remove();
                                // }