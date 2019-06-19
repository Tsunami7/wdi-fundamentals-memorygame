
const cards = ["queen","queen","king","king"];
const cardsInPlay = [];
var cardOne=cards[0];
var cardTwo=cards[1];
var cardThree=cards[2];
var cardFour=cards[3];
/*cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
cardsInPlay.push(cardThree);
cardsInPlay.push(cardFour);
*/

//console test
console.log("User flipped queen "+cardsInPlay[0]);
cardsInPlay.push(cardTwo);
console.log("User flipped king "+cardsInPlay[1]);


const flipCard(cardId){
  //logic test if statement
  if(cardsInPlay.length===2){
  //console test
    console.log(cardsInPlay.length);
    if (cardsInPlay[0]===cardsInPlay[1]) {
      alert("you found a match!");
    }else{
      alert("Sorry try again");
    }
  }

};
