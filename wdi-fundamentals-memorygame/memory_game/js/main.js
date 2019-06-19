
const cards = ["queen","queen","king","king"];
const cardsInPlay = [];

function checkForMatch(){
  if (cardsInPlay[0]===cardsInPlay[1]) {
    alert("you found a match!");
  }else{
    alert("Sorry try again");
  }
};

function flipCard(cardId){

  console.log("User flipped " + cards[cardId]);

  cardsInPlay.push(cards[cardId]);

  checkForMatch();

  //logic test if statement
  if(cardsInPlay.length===2){
  //console test
    console.log(cardsInPlay.length);

  }

};
flipCard(0);
flipCard(2);
