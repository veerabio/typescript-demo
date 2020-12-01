// string
const helloWorld: string = 'Hello Br.io';
console.log(helloWorld);

// boolean
let isDone: boolean = false;

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

// array
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];

// tuple
let x: [string, number];
x = ["hello", 10]; // OK
x = [10, "hello"]; // Error

// unknown
let notSure: unknown = 4;
let xNum: number = notSure;

if( typeof notSure == 'number') {
    xNum = notSure;
}

// any
let looselyTyped: any = {};
let d = looselyTyped.a.b.c.d;

// void - when returning nothing(undefined) from a fuction

// undefined, null, object

// type assertions (type casting)
let someValue: unknown = "this is a string";

let strLength: number = (someValue as string).length;
let strLength1: number = (<string>someValue).length;

export default helloWorld;