  interface StringArray {
    [index: number]: string;
  }
  
  let myArray: StringArray;
  myArray = ["Bob", "Fred"];
  
  let myStr: string = myArray[0];



  // There are two types of supported index signatures: string and number. 
  // It is possible to support both types of indexers, but the type returned
  // from a numeric indexer must be a subtype of the type returned from the string indexer. 
  // This is because when indexing with a number, JavaScript will actually convert that to a string before indexing into an object. 
  interface Animal {
    name: string;
  }
  
  interface Dog extends Animal {
    breed: string;
  }
  
  // Error: indexing with a numeric string might get you a completely separate type of Animal!
  interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
  }


  interface NumberDictionary {
    [index: string]: number;
    length: number; // ok, length is a number
    name: string; // error, the type of 'name' is not a subtype of the indexer
  }

  interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number; // ok, length is a number
    name: string; // ok, name is a string
  }


  interface ReadonlyStringArray {
    readonly [index: number]: string;
  }

  // NOTE: there is a built-in ReadOnlyArray - ReadOnlyArray<string> or readonly string[]
  // same for tuples - readonly [string, string]
  
  let myReadOnlyArray: ReadonlyStringArray = ["Alice", "Bob"];
  myReadOnlyArray[2] = "Mallory"; // error!