import { random as randomLodash } from 'lodash';
import { random as randomUnder } from 'underscore';

const r1 = randomLodash(0, 5);

const r2 = randomUnder(0, 1);

console.log(r1);
console.log(r2);