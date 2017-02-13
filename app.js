'use strict';
var storeHours = ['8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm'];

var storePike = {
  minCustomer: 23,
  maxCustomer: 65,
  avgCookiesPer: 6.3,
  store: '1st and Pike',

  randomCustomerCount: function() {
    return (Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer)) * this.avgCookiesPer;

  },

	cookiesPerHour: function() {
		for (i = 0; i < storeHours.length; i++) {
			
		}
	}

  printToDom: function() {
    var storeList = document.getElementById ('store_list');
    var newH3 = document.createElement ('h3');
    newH3.textContent = this.store;
    storeList.appendChild(newH3);

    var newLiHours = document.createElement ('li');
		newLi.textContent = this.
		storeList.appendChild(newLiHours);
  },


};

storePike.printToDom();

var storeAirport = {
  minCustomer: 3,
  maxCustomer: 24,
  avgCookiesPer: 1.2,


};

var storeSeattleCenter = {
  minCustomer: 11,
  maxCustomer: 38,
  avgCookiesPer: 3.7,

};

var storeCapitol = {
  minCustomer: 20,
  maxCustomer: 38,
  avgCookiesPer: 2.3,


};

var storeAlki = {
  minCustomer: 2,
  maxCustomer: 16,
  avgCookiesPer: 4.6,

};