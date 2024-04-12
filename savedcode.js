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