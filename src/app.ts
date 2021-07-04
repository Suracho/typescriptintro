import {Invoice} from './class/invoice.js';
import {Payment} from './class/Payment.js';
import {HasFormatter} from './interface/HasFormatter.js'



const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#id') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const inv1 = new Invoice('fafa', 'wa', 3232);
const inv2 = new Invoice('suraj', 'workontheluigi', 233);
let docOne: HasFormatter;
let docTwo: HasFormatter;
docOne = new Invoice('yoshi','webwork',333);
docTwo = new Invoice('mario','plumwork',33332);
let docs: HasFormatter[]=[];
docs.push(docOne);
docs.push(docTwo);

docs.forEach(doc => {
    console.log(doc);
});

form.addEventListener('submit',(e: Event)=>{
    e.preventDefault();
    console.log(tofrom.value, amount.value, details.value);
})
