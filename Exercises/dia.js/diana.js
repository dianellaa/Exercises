//js
//1.//
/*let userAge = 19;
if (userAge >= 18) {
    console.log("You are old enough to vote.");
} else {
    console.log("You are not old enough to vote yet.");
}*/

//1.2//
/*let userName ='Diana';
if (userName === 'Diana'){
console.log('Hello,' + userName + "!") ;
}else{
    console.log('"You are not Diana."');
}*/

 /*2-1
function addNumbers(number1, number2) {
    return number1 + number2;
}
let result = addNumbers(5, 10);
console.log( result); */

/*2-2
function reversedWord(word){
    return word.split('').reverse().join('');
}
  var originalWord = 'Hello';
  var reversedWord = reversedWord(originalWord);
console.log(reversedWord);
*/

/*3-1
const favoriteFruits = ["kiwi", "dragonfruit", "peer", "rasberry"];
for (let i = 0; i < favoriteFruits.length; i++) {
    console.log(favoriteFruits[i]);
}
*/
/*3-6
const evenNumbersArray = [];
for (let i = 2; i <= 20; i += 2) {
    evenNumbersArray.push(i);
}
console.log(evenNumbersArray);
*/

/*
4-1
let book = {
    title: "Тією горою є ви",
    author: "Brianna Vest",
    year: 2022
};
console.log("Title:", book.title);
console.log("Author:", book.author);
console.log("Year:", book.year);
*/
/* 
5-1
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isEngineOn = false;

    this.start = function () {
        if (!this.isEngineOn) {
            this.isEngineOn = true;
            console.log(`${this.year} ${this.make} ${this.model} is new.`);
        } else {
            console.log(`${this.year} ${this.make} ${this.model} is not new.`);
        }
    };
}

let myCar = new Car("Audi", "RS", 2023);
myCar.start();
*/

/*6-2
function askForName() {
    // Ask the user for their name using prompt
    let userName = prompt("What's your name?");

    // Check if the user provided a name
    if (userName !== null && userName !== "") {
        // Greet the user using alert
        window.alert("Hello, " + userName + "! Welcome!");
    } else {
        // Handle the case where the user didn't provide a name
        window.alert("Hello! Welcome!");
    }
}
askForName(); */




/*7-2
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List Example</title>
    <!-- Optional: Add some basic styling for better appearance -->
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            margin: 10px 0;
        }
    </style>
</head>
<body>
<button onclick="addItem()">Add Item to List</button>
<ul id="todoList">
    <li>Task 1</li>
    <li>Task 2</li>
    <li>Task 3</li>
</ul>
<script>
    function addItem() {
        let newTask = prompt("Enter a new task:");
        if (newTask !== null && newTask !== "") {
            let newListItem = document.createElement("li");
            newListItem.textContent = newTask;
            let todoList = document.getElementById("todoList");
            todoList.appendChild(newListItem);
        }
    }
</script>

</body>
</html>

*/




