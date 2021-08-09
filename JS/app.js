'use strict';

let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

let container = document.getElementById('container');

let SeattleShop = {
    name: 'seattle',
    minCust: 23,
    maxCust: 65,
    avgCookieSale: 6.3,
    randCust: [],
    avgCookiesPerH: [],
    total: 0,
    calcRandomCustPerH: function () {
        let min;
        let max;
        for (let i = 0; i<hours.length; i++) {
            min = Math.ceil(this.minCust);
            max = Math.floor(this.maxCust);
            let randCustomer = Math.floor(Math.random() * (max - min + 1) + min);
            this.randCust.push(randCustomer);
        }
    },
    calcAvgCookiesPerH: function () {
        for (let i = 0; i < hours.length; i++) {
            this.avgCookiesPerH[i] = Math.ceil(this.randCust[i] * this.avgCookieSale);
            this.total = this.total + this.avgCookiesPerH[i];
        }
    },
    render:function(){
        let h2El = document.createElement('h2');
        h2El.textContent = this.name;
        container.appendChild(h2El);
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let i = 0; i<hours.length;i++){
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[i]}: ${this.avgCookiesPerH[i]} cookies.`
        }
        let totalEl = document.createElement('li');
        ulEl.appendChild(totalEl);
        totalEl.textContent = `Total: ${this.total}.`
    }
}
SeattleShop.calcRandomCustPerH();
SeattleShop.calcAvgCookiesPerH();
SeattleShop.render();

let TokyoShop = {
    name: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookieSale: 1.2,
    randCust: [],
    avgCookiesPerH: [],
    total: 0,
    calcRandomCustPerH: function () {
        let min;
        let max;
        for (let i = 0; i<hours.length; i++) {
            min = Math.ceil(this.minCust);
            max = Math.floor(this.maxCust);
            let randCustomer = Math.floor(Math.random() * (max - min + 1) + min);
            this.randCust.push(randCustomer);
        }
    },
    calcAvgCookiesPerH: function () {
        for (let i = 0; i < hours.length; i++) {
            this.avgCookiesPerH[i] = Math.ceil(this.randCust[i] * this.avgCookieSale);
            this.total = this.total + this.avgCookiesPerH[i];
        }
    },
    render:function(){
        let h2El = document.createElement('h2');
        h2El.textContent = this.name;
        container.appendChild(h2El);
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let i = 0; i<hours.length;i++){
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[i]}: ${this.avgCookiesPerH[i]} cookies.`
        }
        let totalEl = document.createElement('li');
        ulEl.appendChild(totalEl);
        totalEl.textContent = `Total: ${this.total}.`
    }
}
TokyoShop.calcRandomCustPerH();
TokyoShop.calcAvgCookiesPerH();
TokyoShop.render();

let DubaiShop = {
    name: 'Dubai',
    minCust: 1,
    maxCust: 38,
    avgCookieSale: 3.7,
    randCust: [],
    avgCookiesPerH: [],
    total: 0,
    calcRandomCustPerH: function () {
        let min;
        let max;
        for (let i = 0; i<hours.length; i++) {
            min = Math.ceil(this.minCust);
            max = Math.floor(this.maxCust);
            let randCustomer = Math.floor(Math.random() * (max - min + 1) + min);
            this.randCust.push(randCustomer);
        }
    },
    calcAvgCookiesPerH: function () {
        for (let i = 0; i < hours.length; i++) {
            this.avgCookiesPerH[i] = Math.ceil(this.randCust[i] * this.avgCookieSale);
            this.total = this.total + this.avgCookiesPerH[i];
        }
    },
    render:function(){
        let h2El = document.createElement('h2');
        h2El.textContent = this.name;
        container.appendChild(h2El);
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let i = 0; i<hours.length;i++){
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[i]}: ${this.avgCookiesPerH[i]} cookies.`
        }
        let totalEl = document.createElement('li');
        ulEl.appendChild(totalEl);
        totalEl.textContent = `Total: ${this.total}.`
    }
}
DubaiShop.calcRandomCustPerH();
DubaiShop.calcAvgCookiesPerH();
DubaiShop.render();

let ParisShop = {
    name: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookieSale: 2.3,
    randCust: [],
    avgCookiesPerH: [],
    total: 0,
    calcRandomCustPerH: function () {
        let min;
        let max;
        for (let i = 0; i<hours.length; i++) {
            min = Math.ceil(this.minCust);
            max = Math.floor(this.maxCust);
            let randCustomer = Math.floor(Math.random() * (max - min + 1) + min);
            this.randCust.push(randCustomer);
        }
    },
    calcAvgCookiesPerH: function () {
        for (let i = 0; i < hours.length; i++) {
            this.avgCookiesPerH[i] = Math.ceil(this.randCust[i] * this.avgCookieSale);
            this.total = this.total + this.avgCookiesPerH[i];
        }
    },
    render:function(){
        let h2El = document.createElement('h2');
        h2El.textContent = this.name;
        container.appendChild(h2El);
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let i = 0; i<hours.length;i++){
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[i]}: ${this.avgCookiesPerH[i]} cookies.`
        }
        let totalEl = document.createElement('li');
        ulEl.appendChild(totalEl);
        totalEl.textContent = `Total: ${this.total}.`
    }
}

ParisShop.calcRandomCustPerH();
ParisShop.calcAvgCookiesPerH();
ParisShop.render();

let LimaShop = {
    name: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCookieSale: 4.6,
    randCust: [],
    avgCookiesPerH: [],
    total: 0,
    calcRandomCustPerH: function () {
        let min;
        let max;
        for (let i = 0; i<hours.length; i++) {
            min = Math.ceil(this.minCust);
            max = Math.floor(this.maxCust);
            let randCustomer = Math.floor(Math.random() * (max - min + 1) + min);
            this.randCust.push(randCustomer);
        }
    },
    calcAvgCookiesPerH: function () {
        for (let i = 0; i < hours.length; i++) {
            this.avgCookiesPerH[i] = Math.ceil(this.randCust[i] * this.avgCookieSale);
            this.total = this.total + this.avgCookiesPerH[i];
        }
    },
    render:function(){
        let h2El = document.createElement('h2');
        h2El.textContent = this.name;
        container.appendChild(h2El);
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let i = 0; i<hours.length;i++){
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[i]}: ${this.avgCookiesPerH[i]} cookies.`
        }
        let totalEl = document.createElement('li');
        ulEl.appendChild(totalEl);
        totalEl.textContent = `Total: ${this.total}.`
    }
}
LimaShop.calcRandomCustPerH();
LimaShop.calcAvgCookiesPerH();
LimaShop.render();