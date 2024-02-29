// const readline = require('readline');
// const readlineInterface = readline.createInterface(process.stdin, process.stdout);

// function ask(questionText) {
//   return new Promise((resolve, reject) => {
//     readlineInterface.question(questionText, resolve);
//   });
// }

// start();

// async function start() {
//   const welcomeMessage = `182 Main St.
// You are standing on Main Street between Church and South Winooski.
// There is a door here. A keypad sits on the handle.
// On the door is a handwritten sign.`;
//   let answer = await ask(welcomeMessage);
//   console.log('Now write your code to make this work!');
//   process.exit();
// }

//state machine; current room state to new room state
let rooms = {
  mainStreet: {
   canChangeTo: ["cityhall"],
  },
  cityhall: {
    canChangeTo: ["antechamber"],
  },
  antechamber: {
    canChangeTo: ["hallway"],
  },
  hallway: {
    canChangeTo: ["office", "kitchen", "fireescape"],
  },
  office: {
    canChangeTo: ["hallway"],
  },
  kitchen: {
    canChangeTo: ["hallway"],
  },
  fireescape: {
    canChangeTo: ["hallway"],
  },
};

let currentRoom = "mainStreet";
//Class Constructor for items
class Items {
  constructor(name, description, takeable) {
    this.name = name,
    this.description = description,
    this.takeable = true;
    (this.name = name),
      (this.description = description),
      (this.takeable = true);
  }
}
//Items constructor
const ticketStub = new Items(
);
//Item lookup table
let itemLookUp = {
  "stick": stick,
  "newsPaper": newsPaper,
  "rainJacket": rainJacket,
  "ticketStub": ticketStub,
  stick: stick,
  newsPaper: newsPaper,
  rainJacket: rainJacket,
  ticketStub: ticketStub,
};

//Class constructors of the rooms
class Room {
  constructor(
    name,
    description,
    inv,
    locked
  ) {
  constructor("name, description, inv, locked"); {
    this.name = name;
    this.description = description;
    this.inv = inv;
  const hallway = new Room()
const office = new Room()
  }

  "office",
  "At the top of the stairs there is another long hallway with many doors, but there is a door on the left that catches your eye, inside you find the door has lead you into an office with a large desk in one corner with two chairs in front. On the desk is an old newspaper.\nIn the opposite corner you see a cart that used to house a mini bar but almost everything has been tipped over and broken.\n An untouched bottle of Scotch is the only thing remaining.",
  ['newsPaper', 'scotch'],
  false
const kitchen = new Room();
const fireescape = new Room();
  "fire escape",
  "As your running down the hallway you check the door and find it is locked.",
  "You made out of City Hall Well DONE!",
  [],
  true
//Room Lookup table
let roomLookUp = {
  "mainStreet": mainStreet,
  "cityhall": cityhall,
  "hallway": hallway,
  "antechamber": antechamber,
  "office": office,
  "kitchen": kitchen,
  "fireescape": fireescape,
  mainStreet: mainStreet,
  cityhall: cityhall,
  hallway: hallway,
  antechamber: antechamber,
  office: office,
  kitchen: kitchen,
  fireescape: fireescape,
};
//Lookup table for actions
let actions = {
  move: ["move","enter",],
  take: ["take","grab","pickup"],
  drop: ["drop","leave",],
  inspect: ["inspect","examine"],
  move: ["move", "enter"],
  take: ["take", "grab", "pickup"],
  drop: ["drop", "leave"],
  inspect: ["inspect", "examine"],
};
//player variables
const player = {
  inventory: [],
  location: null,
}
};
//Function Block
//Tracks if the current room can change to new room
//Change room function
function = changeRoom(newRoom) 
  // If the new room is a available movement and it is locked}
};
  if (
    validTransitions.includes(newRoom) &&
    roomLookUp[newRoom].locked === true
  ) {
    // if it is locked, and they have a stick they can leave City Hall
    if (player.inventory.includes("stick")) {
      fireescape.locked = false;
      currentRoom = newRoom;
      let roomForTable = roomLookUp[currentRoom];
      //description for the rooms

      console.log(roomForTable.description);

      //if player doesn't have a stick, door remains locked
    } else {
      console.log("The door before you is locked. Maybe you should find a stick.");
    }
  }
  //if the room exists and the door is not locked
  else if (
    validTransitions.includes(newRoom) &&
    roomLookUp[newRoom].locked === false
  ) {
    currentRoom = newRoom;
    console.log(roomLookUp[currentRoom].description);
  } else {
    console.log("doors locked");
    let roomForTable = roomLookUp[currentRoom];
    //console log the room descriptions
    console.log(roomForTable.description);
  }
  //if the room change is invalid
    console.log("That doesn't seem to be a place I know about. Try again");
  //change player location
  player.location = roomLookUp[currentRoom];

function sanitizedWord(dirtyInput) {
}
//pickup function
function pickUp(takeIt) {
  let takeableItem = itemLookUp[takeIt];
  console.log(player)

  if (takeableItem) {
    console.log(player)
    console.log("That does not exist in this room")
  } else if (takeableItem.takeable === true && player.location.inv.includes(takeIt)) {
    console.log(player)
    player.location.inv.splice(player.location.inv.indexOf(takeIt), 1)
    player.inventory.push(takeIt)
    console.log("You picked up the " + takeIt)
    console.log("That does not exist in this room");
  } else if (
    takeableItem.takeable === true &&
    player.location.inv.includes(takeIt)
  ) {
    player.location.inv.splice(player.location.inv.indexOf(takeIt), 1);
    player.inventory.push(takeIt);
    console.log("You picked up the " + takeIt);
  } else {
    console.log("You can't take that!");
  }
}
//drop items function
function dropIt(trash) {
  if (player.inventory.includes(trash)) {
    player.inventory.splice(player.inventory.indexOf(trash), 1)
    player.location.inv.push(trash)
    console.log("You have dropped the " + trash)
    player.inventory.splice(player.inventory.indexOf(trash), 1);
    player.location.inv.push(trash);
    console.log("You have dropped the " + trash);
  } else {
    console.log("You don't have this item");
  }
}
// examine items function
function lookAt(checkMe) {
  let lookAtItems = itemLookUp[checkMe];
  if (player.location.inv.includes(checkMe)) {
    console.log(lookAtItems.description)
    console.log(lookAtItems.description);
  } else {
    console.log("Nothing to look at");
  }
  process.exit();
};