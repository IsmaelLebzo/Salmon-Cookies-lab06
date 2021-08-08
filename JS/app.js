'use strict';

let workinHours = ['6 am','7 am','8 am','9 am','10 am', '11 am','12 pm', '1 pm', '2 pm', '3 pm','4 pm','5 pm','6 pm','7 pm']

let seattleShop = {
    name: 'seattle',
    minCust: 23,
    maxCust: 65,
    avgcookieSale: 6.3,
    custPerHour: [],
    avgSellPerHour: [],
    RandNumGen: function(){
        let min = Math.ceil(this.minCust);
        let max = Math.floor(this.maxCust);
        for (let i = 0; i < this.workinHours.length; i++) {
            this.custPerHour.push( Math.floor( Math.random() * (max - min + 1) + min));
            this.avgSellPerHour.push( Math.ceil( this.custPerHour[i] * this.avgcookieSale))
    }
},

render:function(){
this.RandNumGen(this.maxCust, this,this.maxCust);
let divEl = document.getElementById('Sales per city');
let h1El = document.createElement('h1');
divEl.appendChild(h1El);
h1El.textContent = this.name;
let ulEl = document.createElement('ul');
divEl.appendChild(ulEl);
for (i = 0;i < workinHours.length;i++){
let liEl = document.createElement('li');
liEl.textContent = `${this.workinHours[i]}: ${this.avgSellPerHour[i]} cookies.`
}
}
}