
 // const myAge = 30;
// alert(myAge);

// let userColorIEyes = 'blue';
// let user = 'John';
// let userName = user;

// if (condition) {
//     userColorIEyes === 'blue';
//     return message "I know you John";
// } else {
//     return message "I don't know you! Get lost!";
// };

// console.log(userColorIEyes);

// let userColorIEyes = "blue";
// let user = "John";
// let userName = user;
// let anotherColorEyes = "green";
// let anotherUserName = "Pete";
// let coPilot =anotherUserName;

// userColorIEyes === "blue"
//   ? console.log("I know you " + userName) : console.log("hello " + coPilot);

//   prompt("hello " + anotherUserName);
// const headingElement = document.getElementById("footer-dscr");{
// let headingElement = document.getElementById("footer-dscr");
// console.log(headingElement.innerHTML);
// let newHeadingText = prompt("Please provide a new heading:");
// headingElement.innerHTML = newHeadingText;
// }

// const buttons = document.getElementsById("button5");
// let buttons = document.getElementsById("button5");
// console.log(buttons.innerHTML);


// function filterArray(numbers, value) {
//     // Change code below this line
//     const filteredNumbers = [];
  
//     for (let i = 0; i < numbers.length; i += 1) {
//       const number = numbers[i];
  
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     }
  
//     return filteredNumbers;
//     // Change code above this line
//   }

// Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Will run first
// console.log("Before promise.then()");

// // Registering promise callbacks
// promise.then(
//   // onResolve will run third or not at all
//   value => {
//     console.log("onResolve call inside promise.then()");
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   // onReject will run third or not at all
//   error => {
//     console.log("onReject call inside promise.then()");
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// // Will run second
// console.log("After promise.then()");



// Change value of isSuccess variable to call resolve or reject
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});