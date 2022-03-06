'use strict'
              //0         1         2           3         4         5
let hour = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.']
//let citySales = document.getElementById('citySales');
function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.dailyTotal = 0;
  this.avgCookiesSoldHoulyArray = [];
}
 

// var seattleStore = new Store('Seattle', 23, 65, 6.3);
// let Dubai = new Store('Dubai', 11, 38, 3.7);
// let Paris = new Store('Paris', 20, 38, 2.3);
// let Lima = new Store('Lima', 2, 16, 4.6);
// let Tokyo = new Store('Tokyo', 3, 24, 1.2),

//console.log(Seattle);

Store.prototype.getRandomCustomer = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);// <--- generating random customer. "this" is to access the object.
};

Store.prototype.calculateCookiesPerHour = function () {
  for (let i = 0; i < hour.length; i++) { //<--- we need all three lines of code to run, which is why we want this first.
    let randomCustomersThisHour = this.getRandomCustomer();
    let cookiesSoldThisHour = Math.ceil(randomCustomersThisHour * this.avg);
    this.dailyTotal = (this.dailyTotal + cookiesSoldThisHour); // or you could += this would add the two together
    this.avgCookiesSoldHoulyArray.push(cookiesSoldThisHour);
  }
};

Store.prototype.render = function(){
  this.calculateCookiesPerHour();
  let table = document.getElementById("salesdata");// <-- creating a table
  let storeRow = document.createElement('tr');//<-- creating a row
  table.appendChild(storeRow);
  let storeName = document.createElement('td') 
  storeName.textContent = this.name;
  storeRow.appendChild(storeName);
 };
 
//  let storeArray = [
//   new Store('Seattle', 23, 65, 6.3),
//   new Store('Dubai', 11, 38, 3.7),
//   new Store('Paris', 20, 38, 2.3),
//   new Store('Lima', 2, 16, 4.6),
//   new Store('Tokyo', 3, 24, 1.2),
//  ];
//  for(let i = 0; i < storeArray.length; i++) {
//    let newStore = storeArray[i];





 
 


 

 
 // invoking the render method, in this case its for seattle.





// let seattle = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   dailyTotal: 0,
//   avgCookiesSoldHoulyArray: [],//<-- push a value into the array
//   getRandomCustomer: function () {
//     //this is specifically for the customers
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);// <--- generating random customer. "this" is to access the object.
//   },


//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hour.length; i++) { //<--- we need all three lines of code to run, which is why we want this first.
//       let randomCustomersThisHour = this.getRandomCustomer();
//       let cookiesSoldThisHour = Math.ceil(randomCustomersThisHour * this.avg);
//       this.dailyTotal = (this.dailyTotal + cookiesSoldThisHour); // or you could += this would add the two together
//       this.avgCookiesSoldHoulyArray.push(cookiesSoldThisHour);
//     }
//   },
//   render: function () {
//     this.calculateCookiesPerHour();
//     let cityList = document.getElementById('seattle')
//     //add the cookies sold each hour
//     //create list with cookies
//     console.log(this.avgCookiesSoldHoulyArray);
//     //create the element
//     for (let i = 0; i < hour.length; i++) { //<-- i is saying it cant be greater than 13. "i/index" is the postion in the array. i is being reassigned.
//       let listItem = document.createElement('li');
//       //add content
//       listItem.textContent = `${hour[i]} ${this.avgCookiesSoldHoulyArray[i]}`;
//       //append element
//       cityList.appendChild(listItem);
//     }
//     let total = document.createElement('li');
//     total.textContent = `Total ${this.dailyTotal}`;
//     cityList.appendChild(total)
//   },
// };


// //floor tells it to round down, and cieling tells it to round up. (people)
// //math.random is telling them generate a number.
// //calcCookiesPerHour: function()
// // code that prints my cookies to the dom
// //calc cookies for all 14 hours
// // for loop?
// //inside for loop? use random number of customer to calculate numer of cookies sold that hour
// //
// // a for loop to go through your cookies array
// // use random number of customer to calculate numer of cookies sold that hour
// //invoke our methods on each store

// let dubai = {
//   name: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   dailyTotal: 0,
//   avgCookiesSoldHoulyArray: [],
//   getRandomCustomer: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

//   },

//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hour.length; i++) { //<--- we need all three lines of code to run, which is why we want this first.
//       let randomCustomersThisHour = this.getRandomCustomer();
//       let cookiesSoldThisHour = Math.ceil(randomCustomersThisHour * this.avg);
//       this.dailyTotal = (this.dailyTotal + cookiesSoldThisHour); // or you could += this would add the two together
//       this.avgCookiesSoldHoulyArray.push(cookiesSoldThisHour);
//     }
//   },

//   render: function () {
//     this.calculateCookiesPerHour();
//     let cityList = document.getElementById('dubai')
//     //add the cookies sold each hour
//     //create list with cookies
//     console.log(this.avgCookiesSoldHoulyArray);
//     //create the element
//     for (let i = 0; i < hour.length; i++) { //<-- i is saying it cant be greater than 13. "i/index" is the postion in the array. i is being reassigned.
//       let listItem = document.createElement('li');
//       //add content
//       listItem.textContent = `${hour[i]} ${this.avgCookiesSoldHoulyArray[i]}`;
//       //append element
//       cityList.appendChild(listItem);
//     }
//     let total = document.createElement('li');
//     total.textContent = `Total ${this.dailyTotal}`;
//     cityList.appendChild(total)
//   },
// };
// dubai.render();
// console.log(dubai.getRandomCustomer());





// let paris = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   dailyTotal: 0,
//   avgCookiesSoldHoulyArray: [],
//   getRandomCustomer: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hour.length; i++) { //<--- we need all three lines of code to run, which is why we want this first.
//       let randomCustomersThisHour = this.getRandomCustomer();
//       let cookiesSoldThisHour = Math.ceil(randomCustomersThisHour * this.avg);
//       this.dailyTotal = (this.dailyTotal + cookiesSoldThisHour); // or you could += this would add the two together
//       this.avgCookiesSoldHoulyArray.push(cookiesSoldThisHour);
//     }
//   },

//   render: function () {
//     this.calculateCookiesPerHour();
//     let cityList = document.getElementById('paris')
//     //add the cookies sold each hour
//     //create list with cookies
//     console.log(this.avgCookiesSoldHoulyArray);
//     //create the element
//     for (let i = 0; i < hour.length; i++) { //<-- i is saying it cant be greater than 13. "i/index" is the postion in the array. i is being reassigned.
//       let listItem = document.createElement('li');
//       //add content
//       listItem.textContent = `${hour[i]} ${this.avgCookiesSoldHoulyArray[i]}`;
//       //append element
//       cityList.appendChild(listItem);
//     }
//     let total = document.createElement('li');
//     total.textContent = `Total ${this.dailyTotal}`;
//     cityList.appendChild(total)
//   },
// };
// paris.render();
// console.log(paris.getRandomCustomer());


// let lima = {
//   name: 'Lima',
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   dailyTotal: 0,
//   avgCookiesSoldHoulyArray: [],
//   getRandomCustomer: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hour.length; i++) { //<--- we need all three lines of code to run, which is why we want this first.
//       let randomCustomersThisHour = this.getRandomCustomer();
//       let cookiesSoldThisHour = Math.ceil(randomCustomersThisHour * this.avg);
//       this.dailyTotal = (this.dailyTotal + cookiesSoldThisHour); // or you could += this would add the two together
//       this.avgCookiesSoldHoulyArray.push(cookiesSoldThisHour);
//     }
//   },

//   render: function () {
//     this.calculateCookiesPerHour();
//     let cityList = document.getElementById('lima')
//     //add the cookies sold each hour
//     //create list with cookies
//     console.log(this.avgCookiesSoldHoulyArray);
//     //create the element
//     for (let i = 0; i < hour.length; i++) { //<-- i is saying it cant be greater than 13. "i/index" is the postion in the array. i is being reassigned.
//       let listItem = document.createElement('li');
//       //add content
//       listItem.textContent = `${hour[i]} ${this.avgCookiesSoldHoulyArray[i]}`;
//       //append element
//       cityList.appendChild(listItem);
//     }
//     let total = document.createElement('li');
//     total.textContent = `Total ${this.dailyTotal}`;
//     cityList.appendChild(total)
//   },
// };
// lima.render();
// console.log(lima.getRandomCustomer());

// let tokyo = {
//   name: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   dailyTotal: 0,
//   avgCookiesSoldHoulyArray: [],
//   getRandomCustomer: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hour.length; i++) { //<--- we need all three lines of code to run, which is why we want this first.
//       let randomCustomersThisHour = this.getRandomCustomer();
//       let cookiesSoldThisHour = Math.ceil(randomCustomersThisHour * this.avg);
//       this.dailyTotal = (this.dailyTotal + cookiesSoldThisHour); // or you could += this would add the two together
//       this.avgCookiesSoldHoulyArray.push(cookiesSoldThisHour);
//     }
//   },

//   render: function () {
//     this.calculateCookiesPerHour();
//     let cityList = document.getElementById('tokyo')
//     //add the cookies sold each hour
//     //create list with cookies
//     console.log(this.avgCookiesSoldHoulyArray);
//     //create the element
//     for (let i = 0; i < hour.length; i++) { //<-- i is saying it cant be greater than 13. "i/index" is the postion in the array. i is being reassigned.
//       let listItem = document.createElement('li');
//       //add content
//       listItem.textContent = `${hour[i]} ${this.avgCookiesSoldHoulyArray[i]}`;
//       //append element
//       cityList.appendChild(listItem);
//     }
//     let total = document.createElement('li');
//     total.textContent = `Total ${this.dailyTotal}`;
//     cityList.appendChild(total)
//   },
// };
// tokyo.render();
// console.log(tokyo.getRandomCustomer());
 
