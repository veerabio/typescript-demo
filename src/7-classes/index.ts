// very similar to the ES6 classes
// except we have access modifiers - public, private, and protected

// In TypeScript, each member is **public** by default. You can still mark a member public explicitly


// It supports the newer private field syntax but target must be ES2015 or later
class Animal {
  #name: string;
  constructor(theName: string) {
    this.#name = theName;
  }
}

new Animal("Cat").#name;

// This is supported by javascript so is enforced even during runtime.
// it is ignored by Object.keys, Object.entries, JSON.stringify, for..in loop


// Class hierarchies can accidentally overwrite private properties
// https://www.typescriptlang.org/play?ts=3.8.0-dev.20200110#code/MYGwhgzhAECC0G9oFgBQ0PQMRmgXmgCIxCBuNTaAMwDtYAKASkWgCcBTAFwFdWbpOACwCWEAHQ5S0AL5pZqNKEgwAQtHYAPTuxoATGPAQVMOfEQBGZFOky0VTFhx58BI8ZJly0igPY0InNDmZjTsAO7Q9ozkqMB+ED4g7GIgPgDm9OZitAyM0dAA9AVsXLz+RCTQUtw0wgCO3OzQAA6sPs3srJwAnti4wvzwotABwiAgJZxgA+y6vv6JyakZWXZM+UWTZTCEltabWAC0rcIAbmDa0MM19Y3eseBQcABMLMYYJ+eXuATEZO-UOgOJBOMquURiMBSeTyRSPVSvTTaPQGV5ITYAFQAytAwmA+DBuDAhBcWm0Ol1emkuDAfKdOmFWMJOMixNZKJ8Lk0fhYrAC1swQaUXEIIVDPKhYbF4oFzK8CKEIipnkwYnEFkkUulMs9skC8lJNqCCbz5glNcsdXqohtisbyrtCGhNqTWDVDpxhABbJqtdqdHoVQjUNpeyKvOkMpnaHaVKihl5oIA


// Abstract classes

abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log("Department name: " + this.name);
  }

  abstract printMeeting(): void; // must be implemented in derived classes
}

const specialDepartment = new Department('special');

class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing"); // constructors in derived classes must call super()
  }

  // printMeeting(): void {
  //   console.log("The Accounting Department meets each Monday at 10am.");
  // }
}

const accountingDepartment = new AccountingDepartment();


// readonly and parameter properties

class Octopus {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) {}

  printName() {
    console.log(this.name);
  }
}


// Interface for class instance and static side


interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
  tick(): void;
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);