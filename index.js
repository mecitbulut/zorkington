//constants that allow the program to run on the terminal
const readline = require("readline");
const r1 = readline.createInterface(process.stdin, process.stdout);

// Function Setting Up `ask()`
function ask(questionText) {
  return new Promise((resolve, reject) => {
    r1.question(questionText, resolve);
  });
}
//state machine; current room state to new room state

//intial starting room

//Class Constructor for items
class Items {
  constructor(name, description, takeable) {
    this.name = name;
    this.description = description;
    this.takeable = takeable;
  }
}

//using items class to create items
const stick = new Items(
  "stick",
  "Large wooden walking stick in case the path before gets rough",
  true
);
const scotch = new Items(
  "scotch",
  "An untouched, vintage 75 year old, highland, Single Malt Bottle of Scotch with some dust gathering on it.",
  true
);
const newsPaper = new Items(
  "news paper",
  "A Newspaper, October 31st, 1946.",
  false
);
const rainJacket = new Items(
  "rain jacket",
  "A slightly, damp, rain jacket from the cold wet outside weather.",
  true
);
const ticketStub = new Items(
  "ticket stub",
  "You receive a ticket stub for your rain jacket, also on the back it reads:'Good for 1 Free Bottle of Scotch'",
  true
);
//Item lookup table
let itemLookUp = {
  stick: stick,
  scotch: scotch,
  newsPaper: newsPaper,
  rainJacket: rainJacket,
  ticketStub: ticketStub,
};
//Class constructors of the rooms
class Room {
  constructor(name, description, inv, locked, canChangeTo) {
    this.name = name;
    this.description = description;
    this.inv = inv;
    this.locked = locked;
    this.canChangeTo = canChangeTo;
  }
}
//Room Constructors
const mainStreet = new Room(
  "main street",
  "Welcome to the game. You are in front of 182 Main St. make your way over to cityhall across the street. Type ( move cityhall ) to enter cityhall for more advanture",
  ["ticketStub"],
  false,
  ["cityhall"]
);
const cityhall = new Room(
  "city hall",
  "You walk up to cityhall. In front of you is a very large wooden door. You knock, the door swings open as if it was unlocked waiting for you. You step inside the cityhall, now you standing in front of antechamber,for stepping to antechamber, type ( move antechamber )",
  ["rainJacket"],
  false,
  ["antechamber"]
);
const antechamber = new Room(
  "antechamber",
  "You have entered the Antechamber. Right of you is an umbrella stand with a big stick in the case. Meanwhile, you heard the door lock behind you. You say to your self maybe I should take the stick, Do you take the stick or not and leave your umbrella behind. You proceed down the only path available to you, a short hallway, if you want to pick stick type (take stick) or make your way to hallway type (move hallway)",
  ["stick"],
  false,
  ["hallway"]
);
const hallway = new Room(
  "hallway",
  "You have entered the Hallway, which is short and has a coat room on your left. You decide to leave your rain jacket behind and gather the ticket stub for your jacket from this elderly, blue haired women. To leave your rainjacket to get ticketstub type - (take ticketStub) At the end of the hallway you have three choices where to go. To the left is a office. To the right entering a big kitchen. Straight ahead is a huge marble staircase ending with fireescape What way will you choose?. For moving to any of them type (move office, kitchen, fireescape) ",
  ["ticketStub"],
  false,
  ["office", "kitchen", "fireescape"]
);
const office = new Room(
  "office",
  "You are in office at the top of the stairs there is another long hallway with many doors, but there is a door on the left that catches your eye, inside you find the door has lead you into an office with a large desk in one corner with two chairs in front. On the desk is an old newspaper. In the opposite corner you see a cart that used to house a mini bar but almost everything has been tipped over and broken. An untouched bottle of Scotch is the only thing remaining. Choosing any of them Command (take newsPaper, scotch) and (move hallway) ",
  ["newsPaper", "scotch"],
  false,
  ["hallway"]
);
const kitchen = new Room(
  "kitchen",
  "Back out in the hallway at the top of the stairs is a door to the right that looks like a kitchen, inside is a dinning table and chairs with a mini bar in the corner that has only a bottle of Scotch remaining. On one wall of the kitchen is a open window with a crow sitting on the ledge. All of a sudden the crow squawks and says 'leave now or regret it'. So you need to leave that room in a hurry, but not before picking up the bottle of Scotch. picking Scotch command - (take scotch) make your way to hallway, command - (move hallway)",
  ["scotch"],
  false,
  ["hallway"]
);
const fireescape = new Room(
  "fire escape",
  "You made out of City Hall Well DONE! You have 2 more options, to go back to hallway, type - (move hallway)to pick the stick, type - (take stick)",
  ["stick"],
  true,
  ["hallway"]
);
//Room Lookup table
let roomLookUp = {
  mainStreet: mainStreet,
  cityhall: cityhall,
  hallway: hallway,
  antechamber: antechamber,
  office: office,
  kitchen: kitchen,
  fireescape: fireescape,
};
let playerInput;

//Lookup table for actions
let actions = {
  move: ["move", "enter"],
  take: ["take", "grab", "pickup"],
  drop: ["drop", "leave"],
  inspect: ["inspect", "examine"],
};

console.log(actions.move);
//player variables
const player = {
  inventory: [],
  location: null,
};
let currentRoom = "mainStreet";
console.log(roomLookUp[currentRoom].description);

async function start() {
  while (playerInput !== "exit") {
    playerInput = await ask(">_");
    let splitInput = playerInput.split(" ");
    let action = splitInput[0];
    let target = splitInput[1];

    if (actions.move.includes(action)) {
      if (roomLookUp[currentRoom].canChangeTo.includes(target)) {
        currentRoom = target;
        console.log(roomLookUp[currentRoom].description);
      } else {
        console.log("sorry you can't go there!");
      }
    } else if (actions.take.includes(action)) {
      if (roomLookUp[currentRoom].inv.includes(target)) {
        player.inventory.push(target);
        console.log(itemLookUp[target].description);
      } else {
        console.log("sorry that item is not in this room")
      }

      // Here i am trying to show up rooms and actions for player but its not getting what i want 
    } else if (actions.roomLookUp.includes(actions)) {
      if (roomLookUp[inv].includes(target))
      player.inventory.push(actions)
    }
  }
}

start();
