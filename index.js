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
  constructor (name, description, takeable) {
    this.name = name
      this.description = description
      this.takeable = takeable
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
  "It's a dark damp night and you are on the road out in front of 182 Main St.\n and you swear you heard a soft whisper.\nYou think maybe that was just in your head. \nYou need to decide, Do you really want to continue.? If yes than make your way over to cityhall across the street.",
  ["ticketStub"],
  false,
  ["cityhall"],


);
const cityhall = new Room(
  "city hall",
  "You walk up to cityhall. In front of you is a very large wooden door with a brass head of a lion as a knocker. Behind you is the steps you just came up that funnel you to this massive door. You knock, the door swings open as if it was unlocked waiting for you. You step inside into what you can describe as the antechamber",
  ["rainJacket"],
  false,
  ["antechamber"],
);
const antechamber = new Room(
  "antechamber",
  "You have entered the Antechamber. Right to the right of you is an umbrella stand with a big stick in the case.\n There is a massive chandelier in the center of the ceiling. It seems to be ever so slightly blowing in the breeze.\n Meanwhile, you heard the door lock behind you. You say to your self maybe I should take the stick,\nDo you take the stick or not and leave your umbrella behind.\n You proceed down the only path available to you, a short hallway",
  ["stick"],
  false,
  ["hallway"],
);
const hallway = new Room(
  "hallway",
  "You have entered the Entrance Hall, which is short and has a coat room on your left. You decide to leave your rain jacket behind and gather the ticket stub for your jacket from this elderly, blue haired women.\nAt the end of the hallway you have three choices where to go.\n To the left is a nice sunny lit hallway with people working in their offices.\n to the right is a dark dreary hallway with cobwebs covering the entrance.\n Straight ahead is a huge marble staircase.\n What way will you choose?. ",
  ["ticketStub"],
  false,
  ["office", "kitchen", "fireescape"],
);
const office = new Room(
  "office",
  "At the top of the stairs there is another long hallway with many doors, but there is a door on the left that catches your eye, inside you find the door has lead you into an office with a large desk in one corner with two chairs in front. On the desk is an old newspaper.\nIn the opposite corner you see a cart that used to house a mini bar but almost everything has been tipped over and broken.\n An untouched bottle of Scotch is the only thing remaining.",
  ["newsPaper", "scotch"],
  false,
  ["hallway"],
);
const kitchen = new Room(
  "kitchen",
  "Back out in the hallway at the top of the stairs is a door to the right that looks like a kitchen, inside is a dinning table and chairs with a mini bar in the corner that has only a bottle of Scotch remaining. On one wall of the kitchen is a open window with a crow sitting on the ledge. All of a sudden the crow squawks and says 'leave now or regret it'. So you need to leave that room in a hurry, but not before picking up the bottle of Scotch.",
  ["scotch"],
  false,
  ["hallway"],
);
const fireescape = new Room(
  "fire escape",
  "You made out of City Hall Well DONE!",
  ["stick"],
  true,
  ["hallway"],
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
let playerInput

//Lookup table for actions
let actions = {
  move: ["move", "enter"],
  take: ["take", "grab", "pickup"],
  drop: ["drop", "leave"],
  inspect: ["inspect", "examine"],
};
//player variables
const player = {
  inventory: [],
  location: null,
};
let currentRoom = "mainStreet";
console.log(roomLookUp[currentRoom].description)


async function start() {
 
  while (playerInput !=="exit") {
  playerInput = await ask(">_")
  if (roomLookUp[currentRoom].canChangeTo.includes(playerInput)) {
    currentRoom = playerInput
    console.log(roomLookUp[currentRoom].description)

  } else {
    console.log("sorry you can't go there!")
  }

  //Item pickup function (merging items to the rooms)
  let currentItem = "stick"
  console.log(itemLookUp[currentItem].description)

  if (itemLookUp[currentItem].takeable.includes(playerInput)) {
    currentItem = playerInput
    console.log(itemLookUp[currentItem].description)
  } else {
   console.log()
    }
  }
  }
    if (player.inventory.includes("stick")) {
     fireescape.locked = false;
     currentRoom = newRoom;

   let roomForTable = roomLookUp[currentRoom];
    //description for the rooms
  
     console.log(roomForTable.description);

     } else {
        console.log("The door before you is locked. Maybe you should find a stick.");
     }
     
start ()
// here i am trying to merge items but don't look like i am on right path, getting errors.