'use strict';

let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm','Total'];
let store = [];
let totalPerHourForStore = [];
let container = document.getElementById('container');
let tableEl = document.createElement('table');
container.appendChild(tableEl);

function cityStoreLocations(name, minCust, maxCust, avgCookieSale) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieSale = avgCookieSale;
    this.salecontainer = [];
    store.push(this);
}

cityStoreLocations.prototype.randCustperHour = function () {
    let min = Math.ceil(this.minCust);
    let max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

cityStoreLocations.prototype.salePerHour = function(){
    let sumSales = 0;
    for (let i = 0; i < hours.length; i++) {
        if (i == (hours.length - 1)) {
            this.salecontainer[i] = sumSales;
        }
        else {
            let sale = Math.ceil(this.randCustperHour() * this.avgCookieSale);
            this.salecontainer[i] = sale;
            sumSales = sumSales + sale;
        }
    }
    return this.salecontainer
}
function calculateTotalSoldCookiesPerHour() {
    for (let i = 0; i < store[0].salecontainer.length; i++) {
        totalPerHourForStore[i] = 0;
    }
    for (let i = 0; i < store.length; i++) {
        for (let p = 0; p < store[0].salecontainer.length; p++) {
            totalPerHourForStore[p] = totalPerHourForStore[p] + store[i].salecontainer[p];
        }
    }
}
function renderTHeader() {
    let theadEl = document.createElement('thead');
    let trEl = document.createElement('tr');
    let thEl = document.createElement('th');
    thEl.textContent = '';
    trEl.appendChild(thEl);
    for (let i = 0; i < hours.length; i++) {
        let thEl = document.createElement('th');
        thEl.textContent = hours[i];
        trEl.appendChild(thEl);
    }
    theadEl.appendChild(trEl);
    tableEl.appendChild(theadEl);
}

cityStoreLocations.prototype.renderTBody = function () {
    this.salePerHour();
    let tbodyEl = document.createElement('tbody');
    let trEl = document.createElement('tr');
    let tdEl =document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);
    for (let i = 0; i<this.salecontainer.length;i++){
        let tdEl = document.createElement('td');
        tdEl.textContent = this.salecontainer[i];
        trEl.appendChild(tdEl);
    }
    tbodyEl.appendChild(trEl);
    tableEl.appendChild(tbodyEl);
}

function renderTFooter(){
    calculateTotalSoldCookiesPerHour();
    let tFootEl = document.createElement('tfoot');
    let trEl = document.createElement('tr');
    let tdTotalEl = document.createElement('td');
    tdTotalEl.textContent = 'Total';
    trEl.appendChild(tdTotalEl);
    for (let i = 0;i<hours.length; i++){
        let tdEl = document.createElement('td');
        tdEl.textContent = totalPerHourForStore[i];
        trEl.appendChild(tdEl);
    }
    tFootEl.appendChild(trEl);
    tableEl.appendChild(tFootEl);
}
function render(){
    renderTHeader();
    for (let i = 0; i<store.length; i++){
        store[i].renderTBody();
    }
    renderTFooter();
}

new cityStoreLocations('Seattle', 23, 65, 6.3);
new cityStoreLocations('Tokyo', 3, 24, 1.2);
new cityStoreLocations('Dubai', 11, 38, 3.7);
new cityStoreLocations('Paris', 20, 38, 2.3);
new cityStoreLocations('Lima', 2, 16, 4.6);
render();