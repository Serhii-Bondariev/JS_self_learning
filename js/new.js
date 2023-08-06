// const arr = [2, 4, 6];
// const result = arr.filter((el) => el * 2);
// console.log(result);

// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;

//     let discount;

//     if (totalSpent >= 50000) {
//       discount = GOLD_DISCOUNT;
//     } else if (totalSpent >= 20000) {
//       discount = SILVER_DISCOUNT;
//     } else if (totalSpent >= 5000) {
//       discount = BRONZE_DISCOUNT;
//     } else {
//       discount = BASE_DISCOUNT;
//     }

//     return discount;
//   }
//   console.log(getDiscount(137000));  // Виведе 0.1
// console.log(getDiscount(46900));  // Виведе 0.05
// console.log(getDiscount(8250));  // Виведе 0.02
// console.log(getDiscount(1300));  // Виведе 0
// console.log(getDiscount(5000));  // Виведе 0.02
// console.log(getDiscount(20000));  // Виведе 0.05
// console.log(getDiscount(50000));  // Виведе 0.1

// const user = {
//     firstNane: `Serhii`,
//     sex: `man`,
//     age: 40,
//     sitizenship:`Ukraine`,
//     ukarainian: true,
//     "user-adress":{
//        city: `Piskivka`,
//     street: `Centralna`,
// house: `# 205`},

//     skills:[`HTML`,`CSS`,`JS`]
// };

// let value;

// value =user.ukarainian;

// console.log(value);
// console.log(user.user-adress);

// const users = [
//   { id: 1, name: `John`, age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//   { id: 2, name: `Alice`, age: 32, skills: ["Pyton", "DataAnalysis"] },
//   {
//     id: 3,
//     name: `Bob`,
//     age: 24,
//     skills: ["JavaScript", "React", "Node", "JS"],
//   },
//   { id: 4, name: `Emily`, age: 40, skills: ["Java", "Spring", "HTML", "CSS"] },
//   { id: 5, name: `David`, age: 22, skills: ["C++", "C#"] },
// ];

// const names = users.map((item, index, arr) => {
//   console.log(item);
//   console.log(index);
//   console.log(arr);
// });

// const mappedSkills=users.map(({skills})=>skills)
// const flatSkills=users.flatMap(({skills})=>skills)
// console.log(users);
// console.log(flatSkills);

// const arr = [1,2,3,[21,22,23,[11,12,13,[222,223,224]]]];
// const justFlat=arr.flat();
// const deepFlat = arr.flat(3);
// console.log(justFlat);
// console.log(deepFlat);

// const filteredUsers = users.filter(({age})=>age>25);
// console.log(filteredUsers);

// const javaScriptLearner = users.some(({ skills }) =>
//   skills.includes("JavaScript")
// );
// console.log(javaScriptLearner)

// const usersCopyAsc = [...users];
// usersCopyAsc.sort((first, second) => first.age - second.age);

// const usersCopyDesc = [...users];
// usersCopyDesc.sort((first, second) => second.age - first.age);

// console.log(usersCopyAsc);
// console.log(usersCopyDesc);

// const userCopy = [...users].sort((first, second) =>
//   first.name.localeCompare(second.name)
// );

// const averageUserAge = (users.reduce((acc,item) => acc+item.age,0)/users.length).toFixed();

// console.log(averageUserAge)

// const students = [
//   { name: `John`, grades: [80, 85, 90] },
//   { name: `Alice`, grades: [90, 95, 92] },
//   { name: `Bob`, grades: [70, 80, 75] },
//   { name: `Emily`, grades: [95, 92, 88] },
//   { name: `Dvid`, grades: [85, 88, 90] },
// ];
// function getAverage(arr) {
//   return arr.map(({ name, grades }) => {
//     const averageGrade =
//       grades.reduce((acc, grade) => acc + grade, 0) / grades.length;

//     return {
//       name: name,
//       averageGrade: averageGrade.toFixed(2),
//     };
//   });
// }

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   if (ordered > available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }

//   // Change code above this line
//   return message;
// }

// function User(userInfo) {
//   console.log(userInfo);

//   this.userName = userInfo.userName;
//   this.sge = userInfo.age;
//   this.numbersOfPosts = userInfo.numbersOfPosts;
// }

// this.getInfo = function () {
//   return `Користувачеві ${this.userName} ${this.age} років`;
// };

// console.log(((userInfo = Poly), "36", `78`));

// function checkAge(age) {
//   if (age >= 18) {
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   let message;

//   if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   return message;
//   // Change code above this line

// ===================================================

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   let message;

//   if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   return message;
//   // Change code above this line
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }

//   return "Access denied, wrong password!";
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));
// ========================================================?//÷

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }

//   return "The order is accepted, our manager will contact you";
// }
// // Change code above this line

// console.log(typeof checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// const frutis = ["apple", "plum", "pear", "orange"];

// const firstElement = frutis[0];
// const secondElement = frutis[1];
// const lastElement = frutis[3];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits);

// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);

// function logResult(a, b, callback) [
//   console.log(callback);
//   const result = callback(a, b);
//   console.log(`Result is ${result}`);
// ]

// const add = (a, b) ==> a + b;
// const mul = (a, b) ==> a * b;

// logResult(4, 5, add);
// logResult(4, 5, mul);

// const arr = [1, 2, 3];

// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;

// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);
// =================Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.
// function getExtremeElements(array) {
//   // Change code below this line
//   const firstElement = array[0];
//   const lastElement = array[array.length - 1];
//   return [firstElement, lastElement];
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   if (delimiter === "") {
//     words = message.split("");
//   } else {
//     words = message.split(delimiter);
//   }

//   splitMessage =
//   // Change code above this line
//   return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));
// console.log(splitMessage())

// function calculateEngravingPrice(message, pricePerWord) {
//   // Розділити рядок на слова за допомогою пробілів і отримати кількість слів
//   const words = message.split(" ");
//   const numWords = words.length;

//   // Обчислити загальну вартість гравірування за допомогою кількості слів та ціни за слово
//   const totalPrice = numWords * pricePerWord;

//   return totalPrice;
// }

// // Приклади викликів функції
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10)); // Виведе: 50
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); // Виведе: 100
// console.log(calculateEngravingPrice("Web-development is creative work", 40)); // Виведе: 160
// console.log(calculateEngravingPrice("Web-development is creative work", 20)); // Виведе: 80

// ==========================MODUELE 2 (12/32)
// function makeStringFromArray(array, delimiter) {
//   const resultString = array.join(delimiter);
//   return resultString;
// }

// // Приклади викликів функції
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")); // Виведе: "Mango hurries to the train"
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], "")); // Виведе: "Mango"
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_")); // Виведе: "top_picks_for_you"

// =========================================13/32
// function slugify(title) {
//   // Перетворення всіх символів у рядку на нижній регістр
//   const titleLower = title.toLowerCase();

//   // Заміна пробілів на тире
//   const slug = titleLower.replace(/\s+/g, "-");

//   return slug;
// }

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

//  ========================================= 14 / 32

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Оголошуємо змінну "length" і призначаємо їй значення довжини масиву "fruits"
// const length = fruits.length;

// // Change code below this line

// const firstTwoEls = fruits.slice(0, 2);

// // Використовуємо оголошену змінну "length" для визначення діапазону для "slice"
// const nonExtremeEls = fruits.slice(1, length - 1);

// const lastThreeEls = fruits.slice(-3);

// console.log(fruits);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(fruits);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);
// console.log();
// console.log();

// ===============================Завдання 15/32

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients); // Change this line

// console.log(oldClients);
// console.log(newClients);
// console.log(allClients);

// ===============================Завдання 16/32

function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
  // Change code above this line
}
