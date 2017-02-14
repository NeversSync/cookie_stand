'use strict';

//to do:

function Store(minCustomer, maxCustomer, avgCookiesPer, store) {
  this.minCustomer = minCustomer,
  this.maxCustomer = maxCustomer,
  this.avgCookiesPer = avgCookiesPer,
  this.storeName = store;
  this.storeHours = ['8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
};

Store.prototype.randomCustomerCount = function() {
  return (Math.floor((Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer) * this.avgCookiesPer));
};

Store.prototype.cookiesPerHour = function() {
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
};

Store.prototype.render = function() {//replaced printToDom
  //making thead
  var tableData = document.getElementById ('store_data');
  var newTHead = document.createElement ('thead');
  tableData.appendChild(newTHead);
//making tr
  var newTR = document.createElement ('tr');
  newTHead.appendChild(newTR);
//making th
  var newTH = document.createElement ('th');
  newTR.appendChild(newTH);
  //adding hours to th's
  for(var i = 0; i < this.storeHours.length; i++) {
    var newTh = document.createElement ('th');
    newTh.textContent = this.storeHours[i];
    newTR.appendChild(newTh);
  }
  var totalTH = document.createElement ('th');
  totalTH.textContent = 'Daily Location Total';
  newTR.appendChild(totalTH);
};

// Pushing values to new stores
var pikeStore = new Store(23, 65, 6.3, '1st and Pike');
var airportStore = new Store(3, 24, 1.2, 'Seatac Airport');
var seattleCenterStore = new Store(11, 38, 3.7, 'Seattle Center');
var capitolStore = new Store(20, 38, 2.3, 'Capitol Hill');
var alkiStore = new Store(2, 16, 4.6, 'Alki');

pikeStore.render();

// OLD CODE
//first store- 1st and pike
// var storePike = {
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookiesPer: 6.3,
//   store: '1st and Pike',

//   randomCustomerCount: function() {
//     return (Math.floor((Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer) * this.avgCookiesPer));
//   },

// printToDom: function() {
//   var storeName = document.getElementById ('store_name');
//   var newH3 = document.createElement ('h3');
//   newH3.textContent = this.store;
//   storeName.appendChild(newH3);
//   this.cookiesPerHour();
// },

//   cookiesPerHour: function() {
//     var storeList = document.createElement ('ul');
//     var totalCookies = 0;
//     for (var i = 0; i < storeHours.length; i++) {
//       var numCookiesPerHour = this.randomCustomerCount();
//       console.log(storeHours[i] + ' ' + numCookiesPerHour);
//       var newHourlyLi = document.createElement ('li');
//       newHourlyLi.textContent = storeHours[i] + ': ' + numCookiesPerHour + ' cookies';
//       storeList.appendChild(newHourlyLi);
//       totalCookies += numCookiesPerHour;
//     }
//     var newTotalLi = document.createElement ('li');
//     newTotalLi.textContent = 'total cookies: ' + totalCookies;
//     storeList.appendChild(newTotalLi);

//     var storeName = document.getElementById ('store_name');
//     storeName.appendChild(storeList);
//   }
// };

// // storePike.printToDom(); //printing first store object to DOM

// //second store airport
// // var storeAirport = {
// //   minCustomer: 3,
// //   maxCustomer: 24,
// //   avgCookiesPer: 1.2,
// //   store: 'Seatac Airport',

// //   randomCustomerCount: function() {
// //     return (Math.floor((Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer) * this.avgCookiesPer));
// //   },

// //   printToDom: function() {
// //     var storeName = document.getElementById ('store_name');
// //     var newH3 = document.createElement ('h3');
// //     newH3.textContent = this.store;
// //     storeName.appendChild(newH3);
// //     this.cookiesPerHour();
// //   },

//   cookiesPerHour: function() {
//     var storeList = document.createElement ('ul');
//     var totalCookies = 0;
//     for (var i = 0; i < storeHours.length; i++) {
//       var numCookiesPerHour = this.randomCustomerCount();
//       console.log(storeHours[i] + ' ' + numCookiesPerHour);
//       var newHourlyLi = document.createElement ('li');
//       newHourlyLi.textContent = storeHours[i] + ': ' + numCookiesPerHour + ' cookies';
//       storeList.appendChild(newHourlyLi);
//       totalCookies += numCookiesPerHour;
//     }
//     var newTotalLi = document.createElement ('li');
//     newTotalLi.textContent = 'total cookies: ' + totalCookies;
//     storeList.appendChild(newTotalLi);

//     var storeName = document.getElementById ('store_name');
//     storeName.appendChild(storeList);
//   }
// };

// storeAirport.printToDom(); //printing second store to DOM

// // third store seattle center
// var storeSeattleCenter = {
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookiesPer: 3.7,
//   store: 'Seattle Center',

//   randomCustomerCount: function() {
//     return (Math.floor((Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer) * this.avgCookiesPer));
//   },

//   printToDom: function() {
//     var storeName = document.getElementById ('store_name');
//     var newH3 = document.createElement ('h3');
//     newH3.textContent = this.store;
//     storeName.appendChild(newH3);
//     this.cookiesPerHour();
//   },

//   cookiesPerHour: function() {
//     var storeList = document.createElement ('ul');
//     var totalCookies = 0;
//     for (var i = 0; i < storeHours.length; i++) {
//       var numCookiesPerHour = this.randomCustomerCount();
//       console.log(storeHours[i] + ' ' + numCookiesPerHour);
//       var newHourlyLi = document.createElement ('li');
//       newHourlyLi.textContent = storeHours[i] + ': ' + numCookiesPerHour + ' cookies';
//       storeList.appendChild(newHourlyLi);
//       totalCookies += numCookiesPerHour;
//     }
//     var newTotalLi = document.createElement ('li');
//     newTotalLi.textContent = 'total cookies: ' + totalCookies;
//     storeList.appendChild(newTotalLi);

//     var storeName = document.getElementById ('store_name');
//     storeName.appendChild(storeList);
//   }
// };

// storeSeattleCenter.printToDom();//printing third store to DOM

// // fourth store Capitol Hill
// var storeCapitol = {
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCookiesPer: 2.3,
//   store: 'Capitol Hill',

//   randomCustomerCount: function() {
//     return (Math.floor((Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer) * this.avgCookiesPer));
//   },

//   printToDom: function() {
//     var storeName = document.getElementById ('store_name');
//     var newH3 = document.createElement ('h3');
//     newH3.textContent = this.store;
//     storeName.appendChild(newH3);
//     this.cookiesPerHour();
//   },

//   cookiesPerHour: function() {
//     var storeList = document.createElement ('ul');
//     var totalCookies = 0;
//     for (var i = 0; i < storeHours.length; i++) {
//       var numCookiesPerHour = this.randomCustomerCount();
//       console.log(storeHours[i] + ' ' + numCookiesPerHour);
//       var newHourlyLi = document.createElement ('li');
//       newHourlyLi.textContent = storeHours[i] + ': ' + numCookiesPerHour + ' cookies';
//       storeList.appendChild(newHourlyLi);
//       totalCookies += numCookiesPerHour;
//     }
//     var newTotalLi = document.createElement ('li');
//     newTotalLi.textContent = 'total cookies: ' + totalCookies;
//     storeList.appendChild(newTotalLi);

//     var storeName = document.getElementById ('store_name');
//     storeName.appendChild(storeList);
//   }
// };

// storeCapitol.printToDom(); //printing third store to DOM

// //fourth store Alki
// var storeAlki = {
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgCookiesPer: 4.6,
//   store: 'Alki',

//   randomCustomerCount: function() {
//     return (Math.floor((Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer) * this.avgCookiesPer));
//   },

//   printToDom: function() {
//     var storeName = document.getElementById ('store_name');
//     var newH3 = document.createElement ('h3');
//     newH3.textContent = this.store;
//     storeName.appendChild(newH3);
//     this.cookiesPerHour();
//   },

//   cookiesPerHour: function() {
//     var storeList = document.createElement ('ul');
//     var totalCookies = 0;
//     for (var i = 0; i < storeHours.length; i++) {
//       var numCookiesPerHour = this.randomCustomerCount();
//       console.log(storeHours[i] + ' ' + numCookiesPerHour);
//       var newHourlyLi = document.createElement ('li');
//       newHourlyLi.textContent = storeHours[i] + ': ' + numCookiesPerHour + ' cookies';
//       storeList.appendChild(newHourlyLi);
//       totalCookies += numCookiesPerHour;
//     }
//     var newTotalLi = document.createElement ('li');
//     newTotalLi.textContent = 'total cookies: ' + totalCookies;
//     storeList.appendChild(newTotalLi);

//     var storeName = document.getElementById ('store_name');
//     storeName.appendChild(storeList);
//   }
// };

// storeAlki.printToDom(); //Printing fourth store to DOM