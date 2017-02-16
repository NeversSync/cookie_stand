'use strict';

//to do:
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

function Store(minCustomer, maxCustomer, avgCookiesPer, store) {//constructing store blueprint
  this.storeName = store;
  this.minCustomer = minCustomer,
  this.maxCustomer = maxCustomer,
  this.avgCookiesPer = avgCookiesPer,
  this.storeCookiesPerHour = [];
  this.totalDailyCookies = 0;
};

Store.prototype.randomCustomerCount = function() {//generating random # of cookies per customer/hr.
  return (Math.floor((Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer) * this.avgCookiesPer));
};

Store.prototype.cookiesPerHour = function() {//generating total number of cookies per hour
  for (var i = 0; i < storeHours.length; i++) {
    var numCookiesPerHour = this.randomCustomerCount();
    this.totalDailyCookies += numCookiesPerHour;
    this.storeCookiesPerHour.push(numCookiesPerHour);
  }
};

Store.prototype.renderRow = function(parentTable) {//creating and rendering row and data for store
  var storeRow = document.createElement('tr');
  parentTable.appendChild(storeRow);
  var storeNameTH = document.createElement('th');
  storeNameTH.textContent = this.storeName;
  storeRow.appendChild(storeNameTH);
  this.cookiesPerHour();

  for(var i = 0; i < this.storeCookiesPerHour.length; i++) {
    var cookieTD = document.createElement('td');
    cookieTD.textContent = this.storeCookiesPerHour[i];
    storeRow.appendChild(cookieTD);
  }
  var totalTD = document.createElement('td');
  totalTD.textContent = this.totalDailyCookies;
  storeRow.appendChild(totalTD);
};


function renderTable() {//function to create table structure
  //making thead
  var tableData = document.getElementById('store_data');
  var newTHead = document.createElement('thead');
  tableData.appendChild(newTHead);
  //making tr
  var newTR = document.createElement('tr');
  newTHead.appendChild(newTR);
  //making th
  var newTH = document.createElement('th');
  newTR.appendChild(newTH);
  //adding hours to th's

  for(var i = 0; i < storeHours.length; i++) {//retrieving/rendering hours from storeHours array.
    var newTh = document.createElement('th');
    newTh.textContent = storeHours[i];
    newTR.appendChild(newTh);
  }

  //creating th element for daily totals.
  var totalTH = document.createElement('th');
  totalTH.textContent = 'Daily Location Total';
  newTR.appendChild(totalTH);

  //rendering and populating each store row
  pikeStore.renderRow(tableData);
  airportStore.renderRow(tableData);
  seattleCenterStore.renderRow(tableData);
  capitolStore.renderRow(tableData);
  alkiStore.renderRow(tableData);
};

// generating form and assigning inputs to constructor properties
var userForm = document.getElementById('store_form');

userForm.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();
  var storeName = event.target.store_title.value;
  var minCustomer = parseInt(event.target.min_customers.value);
  var maxCustomer = parseInt(event.target.max_customers.value);
  var avgCookiesPer = parseInt(event.target.avg_cookies_per.value);

  var newStore = new Store(minCustomer, maxCustomer, avgCookiesPer, storeName);
  var tableData = document.getElementById('store_data');
  newStore.renderRow(tableData);
};

// Pushing values to new stores
var pikeStore = new Store(23, 65, 6.3, '1st and Pike');
var airportStore = new Store(3, 24, 1.2, 'Seatac Airport');
var seattleCenterStore = new Store(11, 38, 3.7, 'Seattle Center');
var capitolStore = new Store(20, 38, 2.3, 'Capitol Hill');
var alkiStore = new Store(2, 16, 4.6, 'Alki');

renderTable();


//finish this; write nested for loop that adds up total cookies per hour and renders that data to new td.
// var sixAmTotal = pikeStore.storeCookiesPerHour[0] + airportStore.storeCookiesPerHour[0] + seattleCenterStore.storeCookiesPerHour[0] + capitolStore.storeCookiesPerHour[0] + alkiStore.storeCookiesPerHour[0];

// function hourlyTotal() {
//   var hourTotalData = document.getElementById ('store_data');
//   var hourTotalTR = document.createElement ('tr');
//   hourTotalTR.textContent('test');
//   hourTotalData.appendChild(hourTotalTR);
//   for (var i = 0; i <
//   var hourTotalTD = document.createElement ('td');
//   hourTotalTD.textContent('')
// }