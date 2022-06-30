
// Create a Ship class
class Ship {
  constructor(shipName, startingPointValue, damagePointValue, shipElement) {
    this.shipName = shipName;
    this.currentPoints = startingPointValue;
    this.damagePointValue = damagePointValue;
    this.shipElement = shipElement;
  }
  getShipSummary() {
    return `${this.shipName} starts with ${this.currentPoints} hit points; and loses ${this.damagePointValue} points every time it is hit.`
  }

  renderAllShips() {
    this.shipElement.innerHTML = this.currentPoints;
  }

  deductDamage() {
    this.currentPoints -= this.damagePointValue;
    this.shipElement.innerHTML = this.currentPoints;
  }
}

const mothershipElement = document.getElementById("mothershipScore");
const motherShip = new Ship("Mothership", 100, 9, mothershipElement);
motherShip.renderAllShips();

const defenceShipElements = Array.from(document.getElementsByClassName("defenceshipScore"));
const defenceShips = defenceShipElements.map(shipElement => new Ship("Defence Ship", 80, 10, shipElement));
defenceShips.forEach(ship => ship.renderAllShips());

const attackShipElements = Array.from(document.getElementsByClassName("attackshipScore"));
const attackShips = attackShipElements.map(shipElement => new Ship("Attack Ship", 45, 12, shipElement));
attackShips.forEach(ship => ship.renderAllShips());

// Creating an array of all ships in the fleet:
const allShips = attackShipElements.concat(defenceShipElements, mothershipElement);
console.log(allShips)
  
// Deducting points from ship that is hit;
const hitRandomShip = () => {
  const randomShip = Math.floor(Math.random() * allShips.length);
    if (randomShip == 13) {
      motherShip.deductDamage();
    } else if (randomShip <= 7) {
      attackShips[randomShip].deductDamage();
    } else {
      defenceShips[randomShip - 8].deductDamage();
    }
}

 
// console.log(mothership.getShipSummary());
// console.log(defenceship.getShipSummary());
// console.log(attackship.getShipSummary());



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

