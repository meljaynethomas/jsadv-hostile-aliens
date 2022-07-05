
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

  render() {
    this.shipElement.innerHTML = this.currentPoints;
  }

  deductDamage() {
    if(this.currentPoints > 0) {
      this.currentPoints -= this.damagePointValue;
    }
    this.updateShipState();
  }

  isDestroyed() {
    return this.currentPoints <= 0;
  }

  updateShipState() {
    if(this.currentPoints <= 0) {
      this.shipElement.innerHTML = "Boom";
    } else {
      this.shipElement.innerHTML = this.currentPoints;
    }
  }
}

const mothershipElements =  Array.from([document.getElementById("mothershipScore")]);
const motherShips = mothershipElements.map(mothershipElement => new Ship("Mothership", 100, 9, mothershipElement));
motherShips.forEach(motherShip => motherShip.render());

const defenceShipElements = Array.from(document.getElementsByClassName("defenceshipScore"));
const defenceShips = defenceShipElements.map(shipElement => new Ship("Defence Ship", 80, 10, shipElement));
defenceShips.forEach(ship => ship.render());

const attackShipElements = Array.from(document.getElementsByClassName("attackshipScore"));
const attackShips = attackShipElements.map(shipElement => new Ship("Attack Ship", 45, 12, shipElement));
attackShips.forEach(ship => ship.render());

// Creating an array of all ships in the fleet:
const allShips = attackShips.concat(defenceShips, motherShips);
console.log(allShips);

const isGameOver = () => {
  if(motherShips[0].isDestroyed()) {
    return true;
  }

  if(attackShips.length === 0 && defenceShips.length === 0) {
    return true;
  }
  
  return false;
}

// Deducting points from ship that is hit:
const hitRandomShip = () => {
  //find a random number within the all ships range
  const randomShipIndex = Math.floor(Math.random() * allShips.length);
  //if the random number is the last number, then it's a mothership
  if (randomShipIndex == allShips.length-1) {
    //deduct damage from the mothership
    motherShips[0].deductDamage();
  //otherwise if the random number is within the range of attack ships
  } else if (randomShipIndex <= attackShips.length-1) {
    //deduct damage from attach ships, using unmodified index
    attackShips[randomShipIndex].deductDamage();
    //remove from the attack ship array if it was destroyed
    if(attackShips[randomShipIndex].isDestroyed()){
      attackShips.splice(randomShipIndex, 1);
      allShips.splice(randomShipIndex, 1);
    }
  //otherwise if the random number is within the range of defense ships (deduct attack ships length)
  } else {
    //deduct the damange 
    defenceShips[randomShipIndex-attackShips.length].deductDamage();
    //remove from defence ships array if it was destroyed
    if(defenceShips[randomShipIndex-attackShips.length].isDestroyed()){
      defenceShips.splice(randomShipIndex-attackShips.length, 1);
      allShips.splice(randomShipIndex, 1);
    }
  }
     if(isGameOver()) {
      console.log("Game Over");
    }
}

  
  



//COMMENTS/NOTES/TAKEAWAYS
//we do not really need allShips array - could add the others together and work in this way...
//...so that we don't need to splice two arrays each time
  

//When working with multiple arrays, it is useful to think like this...
// [a1, a2, a3, a4];
// [d1, d2, d3, d4];
// [m];
//  0   1    2   3   4   5   6   7   8
// [a1, a2, a3, a4, d1, d2, d3, d4, m];




// Should be able to start a new game once finished

// When a ship is randomly selected, add class of 'hit' so it briefly turns red

// Add class to destroyed ship so it is replaced with an explosion image!

// All ships are destroyed if the mothership is destroyed

// console.log(mothership.getShipSummary());
// console.log(defenceship.getShipSummary());
// console.log(attackship.getShipSummary());