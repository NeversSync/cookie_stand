'use strict';

//to do:

var storeHours = ['8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

//first store- 1st and pike
var storePike = {
  minCustomer: 23,
  maxCustomer: 65,
  avgCookiesPer: 6.3,
  store: '1st and Pike',

  randomCustomerCount: function() {
    return (Math.floor((Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer) * this.avgCookiesPer));
  },

  printToDom: function() {
    var storeName = document.getElementById ('store_name');
    var newH3 = document.createElement ('h3');
    newH3.textContent = this.store;
    storeName.appendChild(newH3);
    this.cookiesPerHour();
  },

  cookiesPerHour: function() {
    var storeList = document.createElement ('ul');
    var totalCookies = 0;
    for (var i = 0; i < storeHours.length; i++) {
      var numCookiesPerHour = this.randomCustomerCount();
      console.log(storeHours[i] + ' ' + numCookiesPerHour);
      var newHourlyLi = document.createElement ('li');
      newHourlyLi.textContent = storeHours[i] + ': ' + numCookiesPerHour + ' cookies';
      storeList.appendChild(newHourlyLi);
      totalCookies += numCookiesPerHour;
    }
    var newTotalLi = document.createElement ('li');
    newTotalLi.textContent = 'total cookies: ' + totalCookies;
    storeList.appendChild(newTotalLi);

    var storeName = document.getElementById ('store_name');
    storeName.appendChild(storeList);
  }
};

storePike.printToDom(); //printing first store object to DOM

//second store airport
var storeAirport = {
  minCustomer: 3,
  maxCustomer: 24,
  avgCookiesPer: 1.2,
  store: 'Seatac Airport',

  randomCustomerCount: function() {
    return (Math.floor((Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer) * this.avgCookiesPer));
  },

  printToDom: function() {
    var storeName = document.getElementById ('store_name');
    var newH3 = document.createElement ('h3');
    newH3.textContent = this.store;
    storeName.appendChild(newH3);
    this.cookiesPerHour();
  },

  cookiesPerHour: function() {
    var storeList = document.createElement ('ul');
    var totalCookies = 0;
    for (var i = 0; i < storeHours.length; i++) {
      var numCookiesPerHour = this.randomCustomerCount();
      console.log(storeHours[i] + ' ' + numCookiesPerHour);
      var newHourlyLi = document.createElement ('li');
      newHourlyLi.textContent = storeHours[i] + ': ' + numCookiesPerHour + ' cookies';
      storeList.appendChild(newHourlyLi);
      totalCookies += numCookiesPerHour;
    }
    var newTotalLi = document.createElement ('li');
    newTotalLi.textContent = 'total cookies: ' + totalCookies;
    storeList.appendChild(newTotalLi);

    var storeName = document.getElementById ('store_name');
    storeName.appendChild(storeList);
  }
};

storeAirport.printToDom(); //printing second store to DOM

// third store seattle center
var storeSeattleCenter = {
  minCustomer: 11,
  maxCustomer: 38,
  avgCookiesPer: 3.7,
  store: 'Seattle Center',

  randomCustomerCount: function() {
    return (Math.floor((Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer) * this.avgCookiesPer));
  },

  printToDom: function() {
    var storeName = document.getElementById ('store_name');
    var newH3 = document.createElement ('h3');
    newH3.textContent = this.store;
    storeName.appendChild(newH3);
    this.cookiesPerHour();
  },

  cookiesPerHour: function() {
    var storeList = document.createElement ('ul');
    var totalCookies = 0;
    for (var i = 0; i < storeHours.length; i++) {
      var numCookiesPerHour = this.randomCustomerCount();
      console.log(storeHours[i] + ' ' + numCookiesPerHour);
      var newHourlyLi = document.createElement ('li');
      newHourlyLi.textContent = storeHours[i] + ': ' + numCookiesPerHour + ' cookies';
      storeList.appendChild(newHourlyLi);
      totalCookies += numCookiesPerHour;
    }
    var newTotalLi = document.createElement ('li');
    newTotalLi.textContent = 'total cookies: ' + totalCookies;
    storeList.appendChild(newTotalLi);

    var storeName = document.getElementById ('store_name');
    storeName.appendChild(storeList);
  }
};

storeSeattleCenter.printToDom();//printing third store to DOM

// fourth store Capitol Hill
var storeCapitol = {
  minCustomer: 20,
  maxCustomer: 38,
  avgCookiesPer: 2.3,
  store: 'Capitol Hill',

  randomCustomerCount: function() {
    return (Math.floor((Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer) * this.avgCookiesPer));
  },

  printToDom: function() {
    var storeName = document.getElementById ('store_name');
    var newH3 = document.createElement ('h3');
    newH3.textContent = this.store;
    storeName.appendChild(newH3);
    this.cookiesPerHour();
  },

  cookiesPerHour: function() {
    var storeList = document.createElement ('ul');
    var totalCookies = 0;
    for (var i = 0; i < storeHours.length; i++) {
      var numCookiesPerHour = this.randomCustomerCount();
      console.log(storeHours[i] + ' ' + numCookiesPerHour);
      var newHourlyLi = document.createElement ('li');
      newHourlyLi.textContent = storeHours[i] + ': ' + numCookiesPerHour + ' cookies';
      storeList.appendChild(newHourlyLi);
      totalCookies += numCookiesPerHour;
    }
    var newTotalLi = document.createElement ('li');
    newTotalLi.textContent = 'total cookies: ' + totalCookies;
    storeList.appendChild(newTotalLi);

    var storeName = document.getElementById ('store_name');
    storeName.appendChild(storeList);
  }
};

storeCapitol.printToDom(); //printing third store to DOM

//fourth store Alki
var storeAlki = {
  minCustomer: 2,
  maxCustomer: 16,
  avgCookiesPer: 4.6,
  store: 'Alki',

  randomCustomerCount: function() {
    return (Math.floor((Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer) * this.avgCookiesPer));
  },

  printToDom: function() {
    var storeName = document.getElementById ('store_name');
    var newH3 = document.createElement ('h3');
    newH3.textContent = this.store;
    storeName.appendChild(newH3);
    this.cookiesPerHour();
  },

  cookiesPerHour: function() {
    var storeList = document.createElement ('ul');
    var totalCookies = 0;
    for (var i = 0; i < storeHours.length; i++) {
      var numCookiesPerHour = this.randomCustomerCount();
      console.log(storeHours[i] + ' ' + numCookiesPerHour);
      var newHourlyLi = document.createElement ('li');
      newHourlyLi.textContent = storeHours[i] + ': ' + numCookiesPerHour + ' cookies';
      storeList.appendChild(newHourlyLi);
      totalCookies += numCookiesPerHour;
    }
    var newTotalLi = document.createElement ('li');
    newTotalLi.textContent = 'total cookies: ' + totalCookies;
    storeList.appendChild(newTotalLi);

    var storeName = document.getElementById ('store_name');
    storeName.appendChild(storeList);
  }
};

storeAlki.printToDom(); //Printing fourth store to DOM