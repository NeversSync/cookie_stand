'use strict';

var storeHours = ['8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm'];

//first store- 1st and pike
var storePike = {
  minCustomer: 23,
  maxCustomer: 65,
  avgCookiesPer: 6.3,
  store: '1st and Pike',

  randomCustomerCount: function() {
    return (Math.floor((Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer) * this.avgCookiesPer));
  },

  cookiesPerHour: function() {
    var storeList = document.getElementById ('store_list');
    for (var i = 0; i < storeHours.length; i++) {
      var numCookiesPerHour = this.randomCustomerCount();
      console.log(storeHours[i] + ' ' + numCookiesPerHour);
      var newHourlyLi = document.createElement ('li');
      newHourlyLi.textContent = storeHours[i] + ' number of cookies: ' + numCookiesPerHour;
      storeList.appendChild(newHourlyLi);
    }
  },

  printToDom: function() {
    var storeName = document.getElementById ('store_name');
    var newH3 = document.createElement ('h3');
    newH3.textContent = this.store;
    storeName.prepend(newH3);
    this.cookiesPerHour();
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

  cookiesPerHour: function(){
    var storeList = document.getElementById ('store_list');
    for (var i = 0; i < storeHours.length; i++) {
      var numCookiesPerHour = this.randomCustomerCount();
      console.log(storeHours[i] + ' ' + numCookiesPerHour);
      var newHourlyLi = document.createElement ('li');
      newHourlyLi.textContent = storeHours[i] + ' number of cookies: ' + numCookiesPerHour;
      storeList.appendChild(newHourlyLi);
    }
  },

  printToDom: function() {
    var storeName = document.getElementById('store_name');
    var newH3 = document.createElement ('h3');
    newH3.textContent = this.store;
    storeName.prepend(newH3);
    this.cookiesPerHour();
  }

};

storeAirport.printToDom(); //printing second store to DOM

//third store seattle center
var storeSeattleCenter = {
  minCustomer: 11,
  maxCustomer: 38,
  avgCookiesPer: 3.7,
  store: 'Seattle Center',

  randomCustomerCount: function() {
    return (Math.floor((Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer) * this.avgCookiesPer));
  },

  cookiesPerHour: function() {
    var storeList = document.getElementById ('store_list');
    for (var i = 0; i < storeHours.length; i++) {
      var numCookiesPerHour = this.randomCustomerCount();
      console.log(storeHours[i] + ' ' + numCookiesPerHour);
      var newHourlyLi = document.createElement ('li');
      newHourlyLi.textContent = storeHours[i] + ' number of cookies: ' + numCookiesPerHour;
      storeList.appendChild(newHourlyLi);
    }
  },

  printToDom: function() {
    var storeName = document.getElementById ('store_name');
    var newH3 = document.createElement ('h3');
    newH3.textContent = this.store;
    storeName.prepend(newH3);
    this.cookiesPerHour();
  }
};

storeSeattleCenter.printToDom();//printing third store to DOM

//fourth store Capitol Hill
var storeCapitol = {
  minCustomer: 20,
  maxCustomer: 38,
  avgCookiesPer: 2.3,
  store: 'Capitol Hill',

  randomCustomerCount: function() {
    return (Math.floor((Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer) * this.avgCookiesPer));
  },

  cookiesPerHour: function() {
    var storeList = document.getElementById ('store_list');
    for (var i = 0; i < storeHours.length; i++) {
      var numCookiesPerHour = this.randomCustomerCount();
      console.log(storeHours[i] + ' ' + numCookiesPerHour);
      var newHourlyLi = document.createElement ('li');
      newHourlyLi.textContent = storeHours[i] + ' number of cookies: ' + numCookiesPerHour;
      storeList.appendChild(newHourlyLi);
    }
  },

  printToDom: function() {
    var storeName = document.getElementById ('store_name');
    var newH3 = document.createElement ('h3');
    newH3.textContent = this.store;
    storeName.prepend(newH3);
    this.cookiesPerHour();
  }
};

storeCapitol.printToDom();//printing third store to DOM

//fourth store Alki
var storeAlki = {
  minCustomer: 2,
  maxCustomer: 16,
  avgCookiesPer: 4.6,
  store: 'Alki',

  randomCustomerCount: function() {
    return (Math.floor((Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer) * this.avgCookiesPer));
  },

  cookiesPerHour: function() {
    var storeList = document.getElementById ('store_list');
    for (var i = 0; i < storeHours.length; i++) {
      var numCookiesPerHour = this.randomCustomerCount();
      console.log(storeHours[i] + ' ' + numCookiesPerHour);
      var newHourlyLi = document.createElement ('li');
      newHourlyLi.textContent = storeHours[i] + ' number of cookies: ' + numCookiesPerHour;
      storeList.appendChild(newHourlyLi);
    }
  },

  printToDom: function() {
    var storeName = document.getElementById ('store_name');
    var newH3 = document.createElement ('h3');
    newH3.textContent = this.store;
    storeName.prepend(newH3);
    this.cookiesPerHour();
  }
};

storeAlki.printToDom();//Printing fourth store to DOM