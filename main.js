
// Create a Ship class
class Ship {
  constructor(shipName, startingPointValue, damagePointValue) {
    this.shipName = shipName;
    this.currentPoints = startingPointValue;
    this.damagePointValue = damagePointValue;
  }

  getShipSummary() {
    return `${this.shipName} starts with ${this.startingPointValue} hit points; and loses ${this.damagePointValue} points every time it is hit.`
  }

  deductDamage() {
    this.currentPoints -= this.damagePointValue;
    this.element.innerHTML = this.currentPoints;
  }
}

// Create instances of Ship class:
const mothership = new Ship("Mothership", 100, 9);
const defenceship = new Ship("Defence Ship", 80, 10);
const attackship = new Ship("Attack Ship", 45, 12)

console.log(mothership.getShipSummary())
console.log(defenceship.getShipSummary())
console.log(attackship.getShipSummary())

// Get 1 x mothership, 5 x defence ships, and 8 x attack ships to appear on the page and display points on the ship:
const mShip = document.getElementById("mothership-score");
mShip.innerHTML = mothership.startingPointValue;

const defenceShips = document.getElementsByClassName("defenceship-score");
  Array.from(defenceShips).forEach(ship => {
    ship.innerHTML = defenceship.startingPointValue;
  });
  
const attackShips = document.getElementsByClassName("attackship-score");
  Array.from(attackShips).forEach(ship => {
    ship.innerHTML = attackship.startingPointValue;
  });

// Select random ship:


  
  // showCurrentPoints() {
  //   
  // }

// When a ship is randomly selected, its points will reduce accordingly
// When a ship's points reach zero it is destroyed and cannot be hit again

// shipDestroyed() {
//   this.currentPointValue <= 0;
// }

 // Set up button to randomly select a ships when it is clicked
  // Needs function to reduce points accordingly
  // reducePoints() {

    
  // }

// All ships are destroyed if the mothership is destroyed
// The game is over when all ships are destroyed - Should be able to start a new game once finished
// gameOver() {
//   if(mothership.currentPointValue <= 0 || defenceship.currentPointValue <= 0 && attackship.currentPointValue <= 0)
//     return "Game Over!"
// }

