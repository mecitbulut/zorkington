//Function Block
//Change room function
function changeRoom(newRoom) {
    let validTransitions = roomLookUp[currentRoom].canChangeTo;
    console.log (validTransitions)
    // If the new room is a available movement and it is locked
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
      let roomForTable = roomLookUp[currentRoom];
      //console log the room descriptions
      console.log(roomForTable.description);
    }
    //if the room change is invalid
    else {
      console.log(
        "That doesn't seem to be a place I know about. Care to try again?"
      );
    }
    //change player location
    player.location = roomLookUp[currentRoom];
  }
  changeRoom("cityhall");
  
  console.log(roomLookUp)
  
  console.log(itemLookUp)
  
  console.log(hallway)


  let splitInput = ['move', 'cityhall']
  let action = "move"
  let target = "cityhall"
  let itemLookUp = "cityhall"
  let item = "move"


   //check the value of the action if the value is move then you want to do your moving logic if the value take or something else then you want to do your item logic.
  //   if (roomLookUp[currentRoom].canChangeTo.includes(target)) {
  //     currentRoom = target;
  //     console.log(roomLookUp[currentRoom].description);
  //   } else {
  //     console.log("sorry you can't go there!");
      

  //   let currentItem = "stick";
  //   console.log(itemLookUp[currentItem].description);

  //   if (itemLookUp[currentItem].takeable.includes(playerInput)) {
  //     currentItem = playerInput;
  //     console.log(itemLookUp[currentItem].description);
  //   } else {
  //     console.log("you picked the stick");
  //   }
  // } 
//     if (player.inventory.includes("stick")) {
//    fireescape.locked = false;
//    currentRoom = newRoom;

//  let roomForTable = roomLookUp[currentRoom];

//    console.log(roomForTable.description);

//    }  else if (actions.take.includes(playerInput)) {
//     pickup(activity)
//    } else if (actions.drop.includes(playerInput)) {
//     dropIt(activity)
//    } else if ( actions.inspect.includes(playerInput)) {
//     lookAt(activity)
//     console.log(player.inventory);
//    } else {
//     console.log("The door before you is locked. Maybe you should find a stick.");
//  }