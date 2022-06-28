
// Create a Ship class
class Ship {
  constructor(shipName, startingPointValue, damagePointValue, element) {
    this.shipName = shipName;
    this.currentPoints = startingPointValue;
    this.damagePointValue = damagePointValue;
    this.element = element;
  }
  getShipSummary() {
    return `${this.shipName} starts with ${this.currentPoints} hit points; and loses ${this.damagePointValue} points every time it is hit.`
  }

  deductDamage() {
    this.currentPoints -= this.damagePointValue;
    this.element.innerHTML = this.currentPoints;
  }
}
// Create instances of Ship class:
const mothership = new Ship("Mothership", 100, 9, document.getElementById("mothershipScore"));
const defenceship = new Ship("Defence Ship", 80, 10, document.getElementsByClassName("defenceshipScore"));
const attackship = new Ship("Attack Ship", 45, 12, document.getElementsByClassName("attackshipScore"));

console.log(mothership)
console.log(defenceship)
console.log(attackship)

// Displaying scores:
const mShip = mothership.element;
  mShip.innerHTML = mothership.currentPoints;
  
  // mothership.deductDamage()
  // defenceship.deductDamage()
  // attackship.deductDamage()

const defenceShips = defenceship.element;
  const defenceShipsArr = Array.from(defenceShips);
    defenceShipsArr.forEach(ship => {
    ship.innerHTML = defenceship.currentPoints;
  });
  console.log(defenceShipsArr)

  const attackShips = attackship.element;
  const attackShipsArr = Array.from(attackShips);
    attackShipsArr.forEach(ship => {
    ship.innerHTML = attackship.currentPoints;
  });

// Creating an array of all ships in the fleet:
const allShips = attackShipsArr.concat(defenceShipsArr, mShip);
  
// Selecting a random ship from this array:
const randomShip = Math.floor(Math.random() * allShips.length);
console.log(allShips[randomShip])
// console.log(randomShip)
console.log(mShip)

// HOW TO DEDUCT POINTS/APPLY DEDUCT DAMAGE() TO THE ITEM THAT HAS BEEN RANDOMLY SELECTED???
// ???????????????????????????




//console.log(allShips.slice(8,12))

// Deducting points from ship that is hit;
// if (randomShip <= 7) {
//   deductDamage();
// } else if (randomShip <= 12) {
//   deductDamage();
// } else {
//   mothership.deductDamage();
// }
    
  
// console.log(mothership.getShipSummary());
// console.log(defenceship.getShipSummary());
// console.log(attackship.getShipSummary());
// console.log(allShips);
// console.log(randomShip, allShips[randomShip]);


// When a ship is randomly selected, its points will reduce accordingly
// When a ship's points reach zero it is destroyed and cannot be hit again

// shipDestroyed() {
//   this.currentPointValue <= 0;
// }

 // Set up button to randomly select a ships when it is clicked

// All ships are destroyed if the mothership is destroyed
// The game is over when all ships are destroyed - Should be able to start a new game once finished
// gameOver() {
//   if(mothership.currentPointValue <= 0 || defenceship.currentPointValue <= 0 && attackship.currentPointValue <= 0)
//     return "Game Over!"
// }

