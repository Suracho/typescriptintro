import { Invoice } from './class/invoice.js';
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#id');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
var inv1 = new Invoice('fafa', 'wa', 3232);
var inv2 = new Invoice('suraj', 'workontheluigi', 233);
var docOne;
var docTwo;
docOne = new Invoice('yoshi', 'webwork', 333);
docTwo = new Invoice('mario', 'plumwork', 33332);
var docs = [];
docs.push(docOne);
docs.push(docTwo);
docs.forEach(function (doc) {
    console.log(doc);
});
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(tofrom.value, amount.value, details.value);
});
