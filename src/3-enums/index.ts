// literal types (used for narrowing)
// The process of going from an infinite number of potential cases to a smaller, finite number of potential cases is called narrowing.

type Direction = 'North' | 'East' | 'West' | 'South'; 
type Something = 1 | 'hellow';
type YesOrNo = true | false;

// by default starts with 0
enum CompassDirection {
    North,
    East,
    South,
    West,
  }

// can set values and the next values continue from there
enum StatusCodes {
    OK = 200,
    BadRequest = 400,
    Unauthorized,
    PaymentRequired,
    Forbidden,
    NotFound,
  }

// You reference an enum by using EnumName.Value
const startingDirection = CompassDirection.East;
const currentStatus = StatusCodes.OK;

// Enums support accessing data in both directions from key
// to value, and value to key.
const okNumber = StatusCodes.OK;
const okNumberIndex = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];

// Enums can be different types, a string type is common.
// Using a string can make it easier to debug, because the
// value at runtime does not require you to look up the number.
enum GamePadInput {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }

  const enum MouseAction {
    MouseDown,
    MouseUpOutside,
    MouseUpInside,
  }
  
  const handleMouseAction = (action: MouseAction) => {
    switch (action) {
      case MouseAction.MouseDown:
        console.log("Mouse Down");
        break;
    }
  };


// Both Enums and their members can be used as types
let direction: CompassDirection;
direction = CompassDirection.East;

let east: CompassDirection.West;
east = CompassDirection.West;

// Extra Info - Enums can have computed members to read about it see https://www.typescriptlang.org/docs/handbook/enums.html