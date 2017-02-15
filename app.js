'use strict';

//to do:
var storeHours = ['8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

function Store(minCustomer, maxCustomer, avgCookiesPer, store) {
  this.minCustomer = minCustomer,
  this.maxCustomer = maxCustomer,
  this.avgCookiesPer = avgCookiesPer,
  this.storeName = store;
  this.storeCookiesPerHour = [];
  this.totalDailyCookies = 0;
};

Store.prototype.randomCustomerCount = function() {
  return (Math.floor((Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer) * this.avgCookiesPer));
};

Store.prototype.cookiesPerHour = function() {
  for (var i = 0; i < storeHours.length; i++) {
    var numCookiesPerHour = this.randomCustomerCount();
    this.totalDailyCookies += numCookiesPerHour;
    this.storeCookiesPerHour.push(numCookiesPerHour);
  }
};

Store.prototype.renderRow = function(parentTable) {
  var storeRow = document.createElement ('tr');
  parentTable.appendChild(storeRow);
  var storeNameTD = document.createElement ('td');
  storeNameTD.textContent = this.storeName;
  storeRow.appendChild(storeNameTD);
  this.cookiesPerHour();

  for(var i = 0; i < this.storeCookiesPerHour.length; i++) {
    var cookieTD = document.createElement ('td');
    cookieTD.textContent = this.storeCookiesPerHour[i];
    storeRow.appendChild(cookieTD);
  }
  var totalTD = document.createElement ('td');
  totalTD.textContent = this.totalDailyCookies;
  storeRow.appendChild(totalTD);
};


function renderTable() {//replaced printToDom
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
  for(var i = 0; i < storeHours.length; i++) {
    var newTh = document.createElement ('th');
    newTh.textContent = storeHours[i];
    newTR.appendChild(newTh);
  }
  var totalTH = document.createElement ('th');
  totalTH.textContent = 'Daily Location Total';
  newTR.appendChild(totalTH);

  pikeStore.renderRow(tableData);
  airportStore.renderRow(tableData);
  seattleCenterStore.renderRow(tableData);
  capitolStore.renderRow(tableData);
  alkiStore.renderRow(tableData);
};

// Pushing values to new stores
var pikeStore = new Store(23, 65, 6.3, '1st and Pike');
var airportStore = new Store(3, 24, 1.2, 'Seatac Airport');
var seattleCenterStore = new Store(11, 38, 3.7, 'Seattle Center');
var capitolStore = new Store(20, 38, 2.3, 'Capitol Hill');
var alkiStore = new Store(2, 16, 4.6, 'Alki');

renderTable();
