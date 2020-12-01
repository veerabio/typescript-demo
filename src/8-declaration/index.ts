import { random as randomLoadash } from 'lodash';
import { random as randomUnder } from 'underscore';

const r1 = randomLoadash(0, 5);

const r2 = randomUnder(0, 1);

console.log(r1);
console.log(r2);