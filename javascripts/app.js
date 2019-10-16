// Iteration 1 | The Rover Object

const rover = {
  direction: "N",
  travelLog: []
}

// Iteration 2 | Turning the Rover

function turnLeft(){
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
  console.log(`turnLeft was called! Current direction is: ${rover.direction}.`);
}

function turnRight(){
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log(`turnRight was called! Current direction is: ${rover.direction}.`);
}

// Iteration 3 | Moving the Rover
// Iteration 5 | Tracking
// Bonus | Enforce Boundaries

rover.x = 0;
rover.y = 0;

function moveForward(){
  if (rover.direction === "W" && rover.x > 0) {
    rover.x -= 1;
    console.log(`moveForward was called! Current position is: [${rover.x},${rover.y}].`);
    } else if (rover.direction === "N" && rover.y > 0) {
      rover.y -= 1;
      console.log(`moveForward was called! Current position is: [${rover.x},${rover.y}].`);
    } else if (rover.direction === "S" && rover.y < 10) {
      rover.y += 1;
      console.log(`moveForward was called! Current position is: [${rover.x},${rover.y}].`);
    } else if (rover.direction === "E" && rover.x <10) {
      rover.x += 1;
      console.log(`moveForward was called! Current position is: [${rover.x},${rover.y}].`);
    } else {
      console.log("moveForward was called! Careful: you must stay within the grid!");
    }
  rover.travelLog.push("[" + rover.x + "," + rover.y + "]");
}

// Bonus | Moving Backwards
// Iteration 5 | Tracking
// Bonus | Enforce Boundaries

function moveBackward(){ 
  if (rover.direction === "W" && rover.x < 10) {
    rover.x += 1;
    console.log(`moveBackward was called! Current position is: [${rover.x},${rover.y}].`);
    } else if (rover.direction === "N" && rover.y < 10) {
      rover.y += 1;
      console.log(`moveBackward was called! Current position is: [${rover.x},${rover.y}].`);
    } else if (rover.direction === "S" && rover.y > 0) {
      rover.y -= 1;
      console.log(`moveBackward was called! Current position is: [${rover.x},${rover.y}].`);
    } else if (rover.direction === "E" && rover.x > 0) {
      rover.x -= 1;
      console.log(`moveBackward was called! Current position is: [${rover.x},${rover.y}].`);
    } else {
      console.log("moveBackward was called! Careful: you must stay within the grid!");
    }
  rover.travelLog.push("[" + rover.x + "," + rover.y + "]");
}

// Iteration 4 | Commands
// Bonus | Validate Inputs
// Iteration 5 | Tracking

function commands(string) {
  for (i = 0; i < string.length; i++) {
    if (string[i] !== "f" && string[i] !== "r" && string[i] !== "l" && string[i] !== "b") {
    console.log("Invalid input! Valid commands: 'f'; 'r'; 'l'; 'b'.");
    }
  }
  for (i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "f":
        moveForward();
        break;
      case "r":
        turnRight();
        break;
      case "l":
        turnLeft();
        break;
      case "b":
        moveBackward();
    } 
  }
  console.log(`Coordinates: ${rover.travelLog}.`);
}

commands("rfbfrfzzzfblfrfbf");


// Another option for Iterations 4 and 5

/* function commands(string) {
  for (i = 0; i < string.length; i++) {
    if (string[i] !== "f" && string[i] !== "r" && string[i] !== "l" && string[i] !== "b") {
    console.log("Invalid input! Valid commands: 'f', 'r', 'l' and 'b'.");
    }
  }
  for (i = 0; i < string.length; i++) {
    if (string[i] === "f") {
      moveForward();
    } else if (string[i] === "r") {
      turnRight();
    } else if (string[i] === "l") {
      turnLeft();
    } else if (string[i] === "b") {
      moveBackward();
    }
  }
}

for (travelLog in rover) {
  console.log(`Coordinates: ${rover.travelLog}.`);
} */


// Bonus | Obstacles -> Working on it!
// Bonus | Other Rovers -> Working on it!
