import moment from 'moment'
import woofer, { Dog } from './example'

const m = moment();
console.log(m);

let ringo: Dog;
ringo = {bark: () => console.log('ruff')} 
woofer(ringo)

// woofer({bark: () => console.log('ruff'), doATrick() { console.log('roll over')}})

// let roxy = {bark: () => console.log('ruff'), doATrick() { console.log('roll over')}};
// woofer(roxy);