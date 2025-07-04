// problem-solving assignment no 37 
// ===================================================================
/*======== Question no 1 ==================
create ul list and inside it li
*/
// ********** Answer********
// let getDiv = document.getElementById('container');
// let ul = document.createElement('ul');
// let items = ['one','two','three'];
// for(let i = 0; i < items.length; i++){let li = document.createElement('li');
//   let liContent = document.createTextNode(items[i])
// li.appendChild(liContent);
// ul.appendChild(li)}
// getDiv.appendChild(ul);

/*======== Question no 2 ==================
ul list creation by dom
*/
// ********** Answer********
// let dv = document.getElementById('container');
// console.log(dv);
// let ul = document.createElement('ul');
// console.log(ul);
// let items = ['home','about','services','contacts','help'];

// for(let i = 0; i < items.length; i++){let li = document.createElement('li');
//   let liContent = document.createTextNode(items[i]);
//   li.appendChild(liContent);
//   ul.appendChild(li)
// }
// dv.appendChild(ul);
/*======== Question no 3 ==================
create a div by dom
*/
// ********** Answer********
// let dv = document.createElement('div');
// console.log(dv);
// document.body.appendChild(dv);
// dv.style.width = '100px';
// dv.style.height = '200px';
// dv.style.background = 'red';

// let para = document.createElement('p');
// let ptext = document.createTextNode('Hello javascript');
// para.appendChild(ptext);
// dv.appendChild(para)


/*======== Question no 4 ==================
How can i push multiple newcreatedElement in main div to show on DOM?
*/
// ********** Answer********
// first we create main div 
// let main = document.createElement('div');
// console.log(main);
// let heading = document.createElement('h1');
// let headingContent = document.createTextNode('Pakistan');
// heading.appendChild(headingContent);
// console.log(heading);

// let para = document.createElement('p');
// let paraText = document.createTextNode('Pakistan is poor country');
// para.appendChild(paraText);
// console.log(para);
// let spn = document.createElement('span');
// let spnText = document.createTextNode('Hello');
// spn.appendChild(spnText);
// console.log(spn)

// main.appendChild(heading);
// main.appendChild(para);
// main.appendChild(spn);

// console.log(main);
// document.body.appendChild(main)

/*======== Question no 5 ==================
apply css by js by className
*/
// ********** Answer********
// function classStyling(){let get = document.getElementsByClassName('list');
//     console.log(get);
//     for(let i = 0 ; i < get.length; i++){get[i].className = 'anotherClass'}
// }

/*======== Question no 6 ==================
classList practice
*/
// ********** Answer********
// function addStyling(){let get = document.getElementsByClassName('list');
//     console.log(get);
//     for(let i = 0 ; i < get.length; i++){get[i].classList.add('anotherClass') }
// }

// function removeStyling(){let get = document.getElementsByClassName('list');
//     console.log(get);
//     for(let i = 0 ; i < get.length; i++){get[i].classList.remove('anotherClass') }
// }


/*======== Question no 7 ==================
hasAtrribute,getAtrribute ,setAtrribute
*/
// ********** Answer********
// let get = document.getElementById('myAnchor');
// console.log(get);
// let a = get.hasAttribute('href');
// console.log(a);
// let b = get.getAttribute('href');
// console.log(b);
// get.setAttribute('width','200px');
// console.log(get);

/*======== Question no 8 ==================
: Build a Profile Box
Question:
Using createElement, createTextNode, and appendChild, create a structure 
like this:

<div>
  <h3>Azizullah</h3>
  <p>Frontend Web Developer</p>
</div>
*/
// ********** Answer********
// let dv = document.createElement('div');
// document.body.appendChild(dv);
// // now create h3 
// let heading = document.createElement('h3');
// let headingContent = document.createTextNode('Azizullah');
// heading.appendChild(headingContent);
// // create p 
// let para = document.createElement('p');
// let paraText  = document.createTextNode('Frontend web developer');
// para.appendChild(paraText);

// dv.appendChild(heading);
// dv.appendChild(para);
// console.log(dv);

// // give id to dv 
// dv.setAttribute('id','division');
// let get = document.getElementById('division');
// console.log(get);
// for(let i = 0; i < get.length ; i++){console.log(get[i])}


/*======== Question no 9 ==================

Create a <label> with the text "Your Name: " and an <input> field of 
type text.
Add both to a <div id="formSection">.
*/
// ********** Answer********
// let dv = document.createElement('div');
// dv.setAttribute('id','formSection');
// console.log(dv);

// let lbl = document.createElement('label');
// let lblText = document.createTextNode('Your Name:');
// lbl.appendChild(lblText);
// console.log(lbl);

// let it = document.createElement('input');
// it.setAttribute('type','text');
// console.log(it)
// dv.appendChild(lbl);
// dv.appendChild(it)
// console.log(dv);

// document.body.appendChild(dv)
/*======== Questionno 10 ==================
Create a Student Object
Create an object called student with the following properties:

name: "John Doe"
age: 20
grade: "A"
subjects: ["Math", "Science", "English"]

Then write code to:

Print the student's name
Print all subjects
Add a new subject "History"
Change the grade to "B"

Expected Output:
John Doe
["Math", "Science", "English"]
["Math", "Science", "English", "History"]
B
*/
// ********** Answer********
// let student = { name : 'john Doe',
//   age : 20, 
//   grade : 'A',
//   subject : ['math','science','english']
// }
// console.log(student.name);
// console.log(student.subject);
// student.subject.push('history')
// console.log(student.subject);
// student.grade = 'B';
// console.log(student)
/*======== Question no 11 ==================
  Create a Simple Object
Question:
Create an object called person with the following properties:
name: "Ali"
age: 25
city: "Lahore"
Then print each value using console.log.
*/
// ********** Answer********
// let person = {name : 'Ali',
//   age : 25,
//   city : 'Lahore',
// }
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.city);
// for(let key in person){console.log( key + ' ' + person[key])}


/*======== Question no 12 ==================
add new property in object 
*/
// ********** Answer********
// let personsDetails = {name : 'Aziz',
//   education : 'Graduation',
// }
// personsDetails.age = 30;
// console.log(personsDetails)
/*======== Question no 13 ==================
change the value of property in object
*/
// ********** Answer********
// let personsDetails = {name : 'Aziz',
//   education : 'Graduation',
//   age : 30,
// }
// personsDetails.education = 'Master';
// console.log(personsDetails)

/*======== Question no 14 ==================
 Access Object Properties in a Function
Question:
Create an object book with:
title: "JavaScript Basics"
author: "Shahzad Ahmad"
Write a function printBookInfo(book) that prints:
Book: JavaScript Basics
Author: Shahzad Ahmad
*/
// ********** Answer********
// let book = {title : 'Javascript Basics',
//   author : 'shahzad',
  
// }
// console.log(book)
// function printBookInfo(book){console.log(book.title);
//   console.log(book.author)
// }
// printBookInfo(book)
/*======== Question no 15 ==================
call the data of object by functon outside object
*/
// ********** Answer********
// let carDetails = {color:'black',
//   model : '2022',
//   price : 2300000,
// }

// function collectDetails (carDetails){console.log(carDetails.color);
//   console.log(carDetails.model);
//   console.log(carDetails.price)
// }
// collectDetails(carDetails)

/*======== Question no 16 ==================
create a function inside an object 
*/
// ********** Answer********
// let person = {firstName : 'Aziz',
//     lastName : 'Ullah',
//     age     : 30,
//     fullName : function(){return this.firstName+ ' '+this.lastName;}
// }
// console.log(person.fullName());
// let car = {color: 'red',
//   model : 2033,
//   price : '2lac',
//   detail : function(){return this.color;}
// }
// console.log(car.detail())


/*======== Question no 17 ==================
 Full Name Method
Question:
Create an object student with:
firstName: "Sana"
lastName: "Khan"
A method getFullName that returns the full name using this.
Print the result of student.getFullName().
*/
// ********** Answer********
// let student = {firstName : 'sana',
//   lastName : 'khan',
//   result : function(){return this.firstName + ' '+ this.lastName;}
// }
// console.log(student.result())

/*======== Question no 18 ==================

*/
// ********** Answer******
// let carDetails = { color: 'red',
//   model : 2000,
//   price : 200000,
  
//   }
// function myFunction(carDetails){console.log(carDetails.color);
//   console.log(carDetails.model)
// }
// myFunction (carDetails)


/*======== Question no 19 ==================
create object inside object
*/
// ********** Answer********
// let personsDetails = {name : 'Aziz',
//   education: 'Graduation',
//   profession: 'software engineer',
//   residentialDetail : {'district' : 'Mianwali',
//     'tehsil' : 'essakhel',
//     'province': 'punjab'
//   }
// }
// personsDetails.residentialDetail.tehsil = 'Khushab'
// console.log(personsDetails.residentialDetail.tehsil)
/*======== Question no 20 ==================

*/
// ********** Answer********
// let personsDetails = {name : 'Aziz',
//   education: 'Graduation',
//   profession: 'software engineer',
//   residentialDetail : {'district' : 'Mianwali',
//     'tehsil' : 'essakhel',
//     'province': 'punjab'
//   }
// }
// for(let key in personsDetails){console.log(key + ': ' + personsDetails[key])}

/*======== Question no 21 ==================
array of objects
*/
// ********** Answer********

// let users = [
//   {name: "Ali", age: 25},
//   {name: "Zara", age: 28}
// ];

// console.log(users[0].name); // Ali
// console.log(users[1].age);  // 28


/*======== Question no 22 ==================
Create a Student Object
Task: Create a student object with properties: name, age, grade, and 
isPassed. Print each property using dot notation.


*/
// ********** Answer********
// let student = {name : 'aziz',
//   age : 28,
//   grade : 'B',
//   isPassed : true,
// }
// console.log(student.name)
// console.log(student.age)
// console.log(student.grade)
// console.log(student.isPassed)
/*======== Question no 22 ==================
Access Object Properties
Task: Create an object car with brand, model, year, and color.
 Access and print each value using both dot notation and bracket notation.


*/
// ********** Answer********
// let car = { brand :  'Toyota',
//   model : 'Gli',
//   year : 2024,
//   color: 'golden',

// }
// console.log(car.brand);
// console.log(car.model);
// console.log(car.year);
// console.log(car.color)

/*======== Question no 23 ==================
Add/Update/Delete Properties
Task:
Create an object book with title and author.
Add a new property pages.
Update the title.
Delete the author property.
*/
// ********** Answer********
// let book = {title : 'Islam',
//   author : 'Iqbal',
// }
// book.pages = 200;
// delete book.author;
// console.log(book)

/*======== Question no 24 ==================
Use Object Inside an Array
Task: Create an array of 3 objects, each representing a mobile 
with brand and price. Loop through the array and print each mobile’s 
brand and price.

*/
// ********** Answer********
// let mobile = [
//   {brand :'samsung',price : 40000},
//   {brand : 'infinix', price : 30000},
//   {brand : 'iphone', price  : 200000}
// ]
// for(let i = 0; i < mobile.length; i++){console.log(mobile[i].brand + ' ' + mobile[i].price)}
// console.log(mobile[0])
/*======== Question no 25 ==================
Task: Create a person object with firstName, lastName, and a method 
fullName() that returns the full name. Print the full name using the method.

*/
// ********** Answer********
// let person = {firstName : 'Ali',
//   lastName : 'Mubin',
//   fullName : function(){return this.firstName + ' ' + this.lastName;
    
//   }
// }
// console.log(person.fullName())

/*======== Question no 26 ==================
Object Inside Another Object
Task: Create an object employee with properties: name, position, and address 
(which itself is an object with city, zip, and country). 
Access and print each nested property.
*/
// ********** Answer********
// let employee = {name : 'Hmid',
//   positition : 'Manager',
//   address : 'sddr',
//   extraDetails : {province : 'punjab',
//     zip : 2498,
//     country : 'Pakistan'
//   }
// }
// console.log(employee.extraDetails)

/*======== Question no 27 ==================
Loop Through Object
Task: Create an object product with several properties. Use a for...in loop 
to print each key and value.
*/
// ********** Answer********
// let mobile = { brand : 'Samsung',
//   price : 33343,
//   model : 2024
// }
// for(let lp in mobile){console.log(lp + ': '+mobile[lp])}

/*======== Question no 28 ==================
Write a function printUserInfo(user) that takes an object as a parameter
 and prints name, email, and age from the object.
*/
// ********** Answer********
// let details = {name : 'Hnif',
//   email : 'azlshlgls@gamil.com',
//   age : 29
// }
// function printInfo (details){console.log(details.name);
//   console.log(details.email);
//   console.log(details.age);
// }
// printInfo(details)
/*======== Question no 29 ==================
Practice with this Keyword
Task:
Create an object account with:
owner
balance
getBalance() method that returns "Owner: Ali, Balance: 5000" using 
this.owner and this.balance.
*/
// ********** Answer********
// let account = {owner : 'Ali',
//   balance : 4000,
//   result : function(){return 'Owner: '+ this.owner + ',' + 'Balance: ' + this.balance;}
// }
// console.log(account.result())
/*======== Question no 30 ==================
Convert Array to Object
Task:
Given:

let keys = ["name", "age", "city"];
let values = ["Ali", 25, "Lahore"];
Create an object from the two arrays like:

{ name: "Ali", age: 25, city: "Lahore" }
*/
// ********** Answer********
// let keys = ['name','age','city'];
// let value = ['Ali',25, 'Lahore'];
// let result = {};
// for(let i = 0 ; i< keys.length; i++){console.log(result[keys[i]] = value[i])}

// console.log(result)

/*======== Question no 31 ==================
You are given two arrays:

let keys = ["name", "age", "city"];
let values = ["Ali", 25, "Lahore"];
Task:
Create an object like this:
{ name: "Ali", age: 25, city: "Lahore" }
*/
// ********** Answer********
// let keys = ['name','age','city'];
// let values = ['Ali',24,'Lahore'];
// let result = {};
// for(let i = 0; i < keys.length; i++){result[keys[i]] = values[i]}
// console.log(result)
/*======== Question no 32 ==================

*/
// ********** Answer********
// let data = [{id : 1,
//   name : 'Ali'
// },{id : 2, 
//   name : 'sara'
// },
// {id : 3, 
//   name : 'Abid'
// }];
// let result = {};
// for(let i = 0; i < data.length ; i++){let current = data[i];
//   console.log(current);
//  result[current.id] = current
// }
// console.log(result)

/*======== Question no 1 ==================

*/
// ********** Answer********


/*======== Question no 1 ==================

*/
// ********** Answer********


/*======== Question no 1 ==================

*/
// ********** Answer********



/*======== Question no 1 ==================

*/
// ********** Answer********


/*======== Question no 1 ==================

*/
// ********** Answer********



/*======== Question no 1 ==================

*/
// ********** Answer********


/*======== Question no 1 ==================

*/
// ********** Answer********


/*======== Question no 1 ==================

*/
// ********** Answer********




/*======== Question no 1 ==================

*/
// ********** Answer********


/*======== Question no 1 ==================

*/
// ********** Answer********


/*======== Question no 1 ==================

*/
// ********** Answer********


/*======== Question no 1 ==================

*/
// ********** Answer********


/*======== Question no 1 ==================

*/
// ********** Answer********



/*======== Question no 1 ==================

*/
// ********** Answer********


/*======== Question no 1 ==================

*/
// ********** Answer********



/*======== Question no 1 ==================

*/
// ********** Answer********


/*======== Question no 1 ==================

*/
// ********** Answer********