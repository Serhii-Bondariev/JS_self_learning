// const arr = [2, 4, 6];
// const result = arr.filter((el) => el * 2);
// console.log(result);

// const { name } = require("commander");

// const { name } = require("commander");

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
// ++++++++++++++++++++++++++++++++++Зразок від GPT
// function mergeArrays(arr1, arr2) {
//   // Об'єднуємо масиви за допомогою методу concat()
//   const mergedArray = arr1.concat(arr2);

//   // Видаляємо дублікати за допомогою методу filter()
//   const uniqueArray = mergedArray.filter((value, index, self) => {
//     return self.indexOf(value) === index;
//   });

//   return uniqueArray;
// }

// const arr1 = [1, 2, 3];
// const arr2 = [3, 4, 5];

// const mergedArray = mergeArrays(arr1, arr2);
// console.log(mergedArray); // Виведе: [1, 2, 3, 4, 5]

//////////////////////////////////////////////////////

// function makeArray(firstArray, secondArray, maxLength) {
//   // Об'єднуємо два вихідних масиви
//   const mergedArray = firstArray.concat(secondArray);

//   // Перевіряємо, чи кількість елементів в новому масиві не перевищує maxLength
//   if (mergedArray.length <= maxLength) {
//     // Якщо кількість елементів менше або дорівнює maxLength,
//     // повертаємо новий масив повністю
//     return mergedArray;
//   } else {
//     // Якщо кількість елементів більша за maxLength,
//     // повертаємо копію масиву з обмеженням до maxLength елементів
//     return mergedArray.slice(0, maxLength);
//   }
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//     const mergedArray = firstArray.concat(secondArray);

//     if (mergedArray.length <= maxLength); {
//         return mergedArray;
//     } else {
//         return mergedArray.slice(0, maxLength);
//   }
//   // Change code above this line
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

//  ===============================Завдання 16/32

// const start = 3;
// const end = 7;

// for (let i = ; i <= ; i += ) { // Change this line
//   console.log(i);
// }

// Змініть код нижче цього рядка

// Змініть код вище цього рядка
// +  // Обчислюємо загальну суму, помножуючи число на 2
// +  const total = number * 2;
// +
// +  // Повертаємо значення загальної суми
// +  return total;
//  }

// function calculateTotal(number) {
//   // Change code below this line
//   // Change code above this line
// }function calculateTotal(number) {
//   function calculateTotal(number) {
//     let total = 0;

//     for (let i = 1; i <= number; i++) {
//       total += i;
//     }

//     return total;
//   }

//   return total;
// }

// ==============================Модуль2 Завдання 19/32

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// console.log(fruits);

// ==============================Модуль2 Завдання 20/32

//     function calculateTotalPrice(order) {
//       let total = 0; // Ініціалізуємо змінну total для зберігання загальної суми

//       for (const price of order) {
//         total += price; // Додаємо кожен елемент масиву до загальної суми
//       }

//       return total; // Повертаємо загальну суму
//     }
//   ))
// );

// console.log(calculateTotal([12, 85, 37, 4])); // 138
// console.log(calculateTotal([164, 48, 291])); // 503
// console.log(calculateTotal([412, 371, 94, 63, 176])); // 1116

// ==============================Модуль2 Завдання 21/32

// function findLongestWord(string) {
//   // Change code below this line
//   const longestWord = string.split(" ").sort((a, b) => b.length - a.length)[0];
//   // Change code above this line
//   return longestWord;
//   // Change code above this line
// };
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));
// console.log();
// console.log();
// console.log();

// ==============================Модуль2 Завдання 22/32

//     function createArrayOfNumbers(min, max) {
//       const numbers = [];
//       // Change code below this line
//       for (let i = min; i <= max; i += 1) {
//         numbers.push(i);
//       }
//       // Change code above this line
//       return numbers;
//     };

//     console.log();
//     console.log();
//     console.log();
// console.log();

// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.

// Оголошена функція createArrayOfNumbers(min, max)
// Виклик функції createArrayOfNumbers(1, 3) повертає [1, 2, 3]
// Виклик функції createArrayOfNumbers(14, 17) повертає [14, 15, 16, 17]
// Виклик функції createArrayOfNumbers(29, 34) повертає [29, 30, 31, 32, 33, 34]
// Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
// В циклі for використовувався метод push

// ==============================Модуль2 Завдання 23/32

// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).

// Оголошена функція filterArray(numbers, value)
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
// В циклі for використовувався метод push

//     function filterArray(numbers, value) {
//       // Change code below this line
//       const filteredArray = [];
//       for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] > value) {
//           filteredArray.push(numbers[i]);
//         }
//       }
//       return filteredArray;
//       // Change code above this line
//     }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log( filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// ==============================Модуль2 Завдання 24/32

//   function checkFruit(fruit) {
// const fruits = ["apple", "plum", "pear", "orange"];

// return fruits.includes(fruit);
//   }

//   console.log(checkFruit("plum"));
//   console.log( checkFruit("mandarin"));
//   console.log(checkFruit("pear"));
//   console.log(checkFruit("Pear"));
//   console.log(checkFruit("apple"));
//   console.log(checkFruit());

//     Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.

// Доповни код функції таким чином, що якщо:

// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.
// Оголошена функція checkFruit(fruit)
// Виклик checkFruit("plum") повертає true
// Виклик checkFruit("mandarin") повертає false
// Виклик checkFruit("pear") повертає true
// Виклик checkFruit("Pear") повертає false
// Виклик checkFruit("apple") повертає true
// Виклик функції checkFruit() з випадковим словом повертає правильне значення boolean
// У функції використовувався метод includes

// ==============================Модуль2 Завдання 25/32

//     Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

// Оголошена функція getCommonElements(array1, array2)
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
// Виклик функції getCommonElements() з випадковими двома масивами повертає правильний масив
// В циклі for використовувалися методи includes і push

//    function getCommonElements(array1, array2) {
//   const commonElements = [];

//   for (const element of array1) {
//     if (array2.includes(element)) {
//       commonElements.push(element);
//     }
//   }

//   return commonElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// console.log();
// console.log();

// ==============================Модуль2 Завдання 26/32

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   // Change code above this line
//   return total;
// }
//     // __________________________________________________________________________
//   //  рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of
//     // ___________________________________________________________________________
//     function calculateTotalPrice(order) {
//   let total = 0;

//   for (const price of order) {
//     total += price;
//   }

//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));
// console.log(calculateTotalPrice());

// ==============================Модуль2 Завдання 27/32

//     Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.

// Оголошена функція filterArray(numbers, value)
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
// Функція filterArray() використовує цикл for..of

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//  for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line

// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// console.log(filterArray());
// console.log(i);

// ==============================Модуль2 Завдання 28/32;

// Change code below this line
//     const a = 3 % 3;
//     const b = 4 % 3;
//     const c = 11 % 8;
//     const d = 12 % 7;
//     const e = 8 % 6;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// ==============================Модуль2 Завдання 29/32;

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const evenNumbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
// }

//  console.log(getEvenNumbers(2, 5));
//  console.log(getEvenNumbers(3, 11));
//  console.log(getEvenNumbers(6, 12));
//  console.log(getEvenNumbers(8, 8));
//  console.log(getEvenNumbers(7, 7));
//  console.log(getEvenNumbers());

// ==============================Модуль2 Завдання 30/32;

//  Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.

//  Оголошена змінна start зі значенням 6
//  Оголошена змінна end зі значенням 27
//  Оголошена змінна number без ініціалізації
//  Підсумкове значення змінної number дорівнює 10
//  В циклі for використовується break для виходу до завершення усіх ітерацій циклу

//    const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// ==============================Модуль2 Завдання 31/32;

// Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:

// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number
// Оголошена функція findNumber(start, end, divisor)
// Виклик findNumber(2, 6, 5) повертає 5
// Виклик findNumber(8, 17, 3) повертає 9
// Виклик findNumber(6, 9, 4) повертає 8
// Виклик findNumber(16, 35, 7) повертає 21
// Виклик findNumber() з випадковим набором чисел повертає правильний результат
// В циклі for не повинен використовуватися break для виходу до завершення всіх ітерацій циклу

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       break;
//     }
//   }

//   return number;
//   // Change code above this line
// }
// ===========РІШЕННЯ:=============

// function findNumber(start, end, divisor) {
//   for (let i = start; i <= end; i++) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }

// // Приклади викликів функції:
// console.log(findNumber(2, 6, 5));    // 5
// console.log(findNumber(8, 17, 3));   // 9
// console.log(findNumber(6, 9, 4));    // 8
// console.log(findNumber(16, 35, 7));  // 21
// // Тут ти можеш додати випадкові значення start, end і divisor для перевірки.

// ==============================Модуль2 Завдання 32/32;

// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

// Оголошена функція includes(array, value)
// Виклик includes([1, 2, 3, 4, 5], 3) повертає true
// Виклик includes([1, 2, 3, 4, 5], 17) повертає false
// Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") повертає true
// Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") повертає false
// Виклик includes(["apple", "plum", "pear", "orange"], "plum") повертає true
// Виклик includes(["apple", "plum", "pear", "orange"], "kiwi") повертає false
// Виклик includes() для випадкового масиву з випадковим value повертає правильний boolean
// У функції includes використовується for, return, але не метод масиву includes

// function includes(array, value) {
//   // Change code below this line

//   // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5], 3)); // true
// console.log(includes([1, 2, 3, 4, 5], 17)); // false
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")); // true
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")); // false
// console.log(includes(["apple", "plum", "pear", "orange"], "plum")); // true
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi")); // false
// console.log();

// ==========================РІШЕННЯ==========

// function includes(array, value) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === value) {
//       return true;
//     }
//   }

//   return false;
// }

// // Приклади викликів функції:
// console.log(includes([1, 2, 3, 4, 5], 3)); // true
// console.log(includes([1, 2, 3, 4, 5], 17)); // false
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")); // true
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")); // false
// console.log(includes(["apple", "plum", "pear", "orange"], "plum")); // true
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi")); // false
// // Тут ти можеш додати виклик includes() з випадковим масивом і значенням для перевірки.

// var secondsInAMinute = 60;
// var minutesInAnHour = 60;
// var secondsInAnHour = secondsInAMinute * minutesInAnHour;
// secondsInAnHour;

// var hoursInADay = 24;
// var secondsInADay = secondsInAnHour * hoursInADay;
// secondsInADay;

// var secondsInAYear = 365;
// var secondsInAYear = secondsInADay * secondsInAYear;
// secondsInAYear;
// var age = 40;
// age * secondsInAYear;

// var higthFives = 0;
// ++higthFives

// ==============================Модуль3 Завдання 1/41;

// Присвой змінній apartment об'єкт, який описує квартиру з наступними характеристиками:

// imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
// descr - опис, значення "Spacious apartment in the city center";
// rating - рейтинг, значення 4;
// price - ціна, значення 2153;
// tags - метаінформація, масив ["premium", "promoted", "top"].
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Об'єкт містить властивість imgUrl
// Значення властивості imgUrl - це рядок "https://via.placeholder.com/640x480"
// Об'єкт містить властивість descr
// Значення властивості descr - це рядок "Spacious apartment in the city center"
// Об'єкт містить властивість rating
// Значення властивості rating - це число 4
// Об'єкт містить властивість price
// Значення властивості price - це число 2153
// Об'єкт містить властивість tags
// Значення властивості tags - це масив ["premium", "promoted", "top"]

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// console.log(apartment);

// ==============================Модуль3 Завдання 2/41;

// Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника. Додай йому наступні властивості:

// name - ім'я власника, значення "Henry";
// phone - телефон, значення "982-126-1588";
// email - пошта, значення "henry.carter@aptmail.com".
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// В об'єкта змінної apartment присутні властивості imgUrl, descr, rating, price і tags зі значеннями
// В об'єкті apartment присутня властивість owner
// Значення властивості owner - це об'єкт
// В об'єкті owner присутня властивість name
// Значення властивості name - це "Henry"
// В об'єкті owner присутня властивість phone
// Значення властивості phone - це "982-126-1588"
// В об'єкті owner присутня властивість email
// Значення властивості email - це "henry.carter@aptmail.com"

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name:"Henry",
//     phone:"982-126-1588",
//     email:"henry.carter@aptmail.com"
//   }
// }

// console.log(owner);

// ==============================Модуль3 Завдання 3/41;

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// В об'єкта змінної apartment присутні властивості imgUrl, descr, rating, price і tags зі значеннями
// Оголошена змінна aptRating
// Значення змінної aptRating - це число 4
// Оголошена змінна aptDescr
// Значення змінної aptDescr - це рядок "Spacious apartment in the city center"
// Оголошена змінна aptPrice
// Значення змінної aptPrice - це число 2153
// Оголошена змінна aptTags
// Значення змінної aptTags - це масив рядків ["premium", "promoted", "top"]

// ================EXEMPLE================

// Перший спосіб отримати доступ до властивості об'єкта - це синтаксис об'єкт.ключ_властивості. Здебільшого використовується синтаксис «через крапку» і підходить тоді, коли ми заздалегідь знаємо ім'я (ключ) властивості, до якої хочемо отримати доступ.

// На місце звернення буде повернуте значення властивості з таким ім'ям.
// Якщо в об'єкті відсутня властивість з таким ім'ям, на місце звернення повернеться undefined.
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // "The Last Kingdom"

// const bookGenres = book.genres;
// console.log(bookGenres); // ["historical prose", "adventure"]

// const bookPrice = book.price;
// console.log(bookPrice); // undefined
// =============END-EXEMPLE=============

// const apartment = { imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// console.log(aptRating);
// const aptDescr = apartment.descr;
// console.log(aptDescr);
// const aptPrice = apartment.price;
// console.log(aptPrice);
// const aptTags = apartment.tags;
// console.log(aptTags);
// // Change code above this line

// ==============================Модуль3 Завдання 4/41;

// ================EXEMPLE================

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };
// Для доступу до вкладених властивостей використовується ланцюжок звернень «через крапку». Наприклад, якщо необхідно отримати значення країни користувача, записуємо user.location.country, де user.location - це звернення (шлях) до об'єкта у властивості location, а user.locaton.country - звернення до властивості country в цьому об'єкті. Тобто, «крапка» вказує наступну вкладеність.

// const location = user.location;
// console.log(location); // Об'єкт location

// const country = user.location.country;
// console.log(country); // "Jamaica"
// Якщо значення властивості - це масив, то у нашому прикладі user.hobbies - звернення до цього масиву. Далі можна отримати доступ до його елементів через квадратні дужки та індекс або використовувати властивості і методи.

// const hobbies = user.hobbies;
// console.log(hobbies); // ["swiming", "music", "sci-fi"]

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // "swiming"

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

// =============END-EXEMPLE=============

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// ownerName - ім'я власника;
// ownerPhone - телефон власника;
// ownerEmail - пошта власника;
// numberOfTags - кількість елементів масиву у властивості tags;
// firstTag - перший елемент масиву у властивості tags;
// lastTag - останній елемент масиву у властивості tags.
// Оголошена змінна apartment за допомогою const
// Значення змінної apartment - це об'єкт
// Оголошена змінна ownerName за допомогою const
// Значення змінної ownerName - це рядок "Henry"
// Оголошена змінна ownerPhone за допомогою const
// Значення змінної ownerPhone - це "982-126-1588"
// Оголошена змінна ownerEmail за допомогою const
// Значення змінної ownerEmail - це "henry.carter@aptmail.com"
// Оголошена змінна numberOfTags за допомогою const
// Значення змінної numberOfTags - це 3
// Оголошена змінна firstTag за допомогою const
// Значення змінної firstTag - це "premium"
// Оголошена змінна lastTag за допомогою const
// Значення змінної lastTag - це "top"

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// console.log(ownerName);
// const ownerPhone = apartment.owner.phone;
// console.log(ownerPhone);
// const ownerEmail = apartment.owner.email;
// console.log(ownerEmail);
// const numberOfTags = apartment.tags.length;
// console.log(numberOfTags);
// const firstTag = apartment.tags[0];
// console.log(firstTag);
// const lastTag = apartment.tags[apartment.tags.length - 1];

// console.log(lastTag);
// // Change code above this line

// const LS_KEY = `apartment`;
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// }

// localStorage.setItem(LS_KEY, JSON.stringify(apartment));
// localStorage.setItem("apartment", JSON.stringify(apartment));

// console.log(localStorage.getItem(`apartment`));

// ==============================Модуль3 Завдання 5/41;

// ================THEORY================

// Другий спосіб отримати доступ до властивості об'єкта - це синтаксис об'єкт["ключ_властивості"]. Схоже на звернення до елемента масиву з відмінністю в тому, що в дужках зазначається не індекс елемента, а ім'я властивості як рядок.

// Синтаксис «квадратних дужок» використовується значно рідше. Як правило у випадках, коли ім'я властивості заздалегідь невідоме або воно зберігається у змінній (як значення параметра функції, наприклад).

// На місце звернення буде повернуто значення властивості з таким ім'ям.
// Якщо в об'єкті відсутня властивість з таким ім'ям, на місце звернення повернеться undefined.
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// const bookTitle = book["title"];
// console.log(bookTitle); // "The Last Kingdom"

// const bookGenres = book["genres"];
// console.log(bookGenres); // ["historical prose", "adventure"]

// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // "Bernard Cornwell"

// =============END-THEORY=============

// ================EXERCISE================

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment, використовуючи синтаксис «квадратних дужок».

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна aptRating
// Значення змінної aptRating - це 4
// Оголошена змінна aptDescr
// Значення змінної aptDescr - це "Spacious apartment in the city center"
// Оголошена змінна aptPrice
// Значення змінної aptPrice - це 2153
// Оголошена змінна aptTags
// Значення змінної aptTags - це ["premium", "promoted", "top"]

// =============END-EXERCISE=============

// ==============SOLUTION================

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line

// console.log(apartment);
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// ==============================Модуль3 Завдання 6/41;

// ================THEORY================

// Після того як об'єкт створений, значення його властивостей можна змінити. Для цього необхідно звернутися до них за ім'ям, наприклад, «через крапку», і присвоїти нове значення.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.public = false;
// book.genres.push("drama");

// console.log(book.rating); // 9
// console.log(book.public); // false
// console.log(book.genres); // ["historical prose", "adventure", "drama"]

// ================EXERCISE================;
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// ==============================Модуль3 Завдання 7/41;

// ================THEORY================

// Додай об'єкту apartment кілька нових властивостей:

// area - площа в квадратних метрах, число 60;
// rooms - кількість кімнат, число 3;
// location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
// country - країна, рядок "Jamaica";
// city - місто, рядок "Kingston".
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Значення вкладеної властивості area - це число 60
// Значення вкладеної властивості rooms - це число 3
// Значення вкладеної властивості location - це об'єкт
// Значення вкладеної властивості location.country - це рядок "Jamaica"
// Значення вкладеної властивості location.city - це рядок "Kingston"

// =============END-THEORY=============

// ================EXERCISE================

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// }

// console.log(apartment.area);
// console.log(apartment.rooms);
// console.log(location);
// console.log(location.country);
// console.log(location.city);

// ==============================Модуль3 Завдання 8/41;

// ================THEORY================
// Іноді, під час створення об'єкта, значення властивості необхідно взяти зі змінної або параметра функції з таким самим ім'ям, як і сама властивість.

// Синтаксис у наступному прикладі занадто громіздкий, тому що доводиться дублювати ім'я властивості та ім'я змінної, в якій зберігається необхідне значення.

// const name = "Генрі Сибола";
// const age = 25;

// const user = {
//   name: name,
//   age: age,
// };

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25
// Синтаксис коротких властивостей (shorthand properties) вирішує цю проблему, дозволяючи використовувати ім'я змінної як ім'я властивості, а її значення як значення властивості.

// const name = "Генрі Сибола";
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25
// Тобто, під час оголошення об'єкта достатньо вказати тільки ім'я властивості, а значення буде взято зі змінної з аналогічним ім'ям.

// ====================END-THEORY==================

// ================EXERCISE================

// Доповни код оголошення об'єкта таким чином, щоб у нього були властивості name, price, image і tags зі значеннями зі змінних з аналогічними іменами. Обов'язково використовуй синтаксис коротких властивостей.

// Оголошена змінна product
// Значення змінної product - це об'єкт
// Значення вкладеної властивості name - це рядок "Repair Droid"
// Значення вкладеної властивості price - це число 2500
// Значення вкладеної властивості image - це рядок "https://via.placeholder.com/640x480"
// Значення вкладеної властивості tags - це масив ["on sale", "trending", "best buy"]

// =============END-EXERCISE=============

// ==============SOLUTION================

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   // shorthand propertties
//   name,price,image,tags
//   // Change code above this line
// };

// console.log(product);
// console.log(product.name);
// console.log(product.price);
// console.log(product.image);
// console.log(product.producttags);
// console.log();

// ==============================Модуль3 Завдання 9/41;

// ================THEORY================

// Бувають ситуації, коли під час оголошення об'єкта необхідно додати властивість з ім'ям, яке ми заздалегідь не знаємо, тому що воно зберігається як значення змінної або як результат виконання функції.

// Раніше для цього необхідно було спочатку створити об'єкт, а потім додавати властивості через квадратні дужки, що не зовсім зручно.

// const propName = "name";
// const user = {
//   age: 25,
// };

// user[propName] = "Генрі Сибола";
// console.log(user.name); // "Генрі Сибола"
// Синтаксис обчислюваних властивостей (computed properties) допомагає уникнути зайвого коду і, в деяких випадках, спростити його. Значенням обчислюваної властивості може бути будь-який валідний вираз.

// const propName = "name";
// const user = {
//   age: 25,
//   // Ім'я цієї властивості буде взято зі значення змінної propName
//   [propName]: "Генрі Сибола",
// };

// console.log(user.name); // "Генрі Сибола"

// ====================END-THEORY==================

// ================EXERCISE================

// Доповни код оголошення об'єкта credentials таким чином, щоб в результаті у нього були дві властивості: email і password, імена яких зберігаються у змінних emailInputName і passwordInputName.

// Значенням властивості email повинен бути рядок "henry.carter@aptmail.com", а значенням властивості password - рядок "jqueryismyjam".

// Оголошена змінна credentials
// Значення змінної credentials - це об'єкт
// Об'єкт credentials містить властивість email
// Значення вкладеної властивості email - це рядок "henry.carter@aptmail.com"
// Об'єкт credentials містить властивість password
// Значення вкладеної властивості password - це рядок "jqueryismyjam"

// =============END-EXERCISE=============

// ==============SOLUTION================

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
//   // Change code above this line
// };

// console.log(credentials);
// console.log(credentials.email);
// console.log(credentials.password);
// console.log();


// ==============================Модуль3 Завдання 10/41;

// ================THEORY================

// На відміну від масиву або рядка, об'єкт - це не ітерабельна сутність, тобто його не можна перебрати циклами for або for...of. Для перебирання об'єктів використовується спеціальний цикл for...in, який перебирає ключі об'єкта object.

// for (key in object) {
//   // інструкції
// }
// Змінна key доступна тільки в тілі циклу. На кожній ітерації в неї буде записано значення ключа (ім'я) властивості. Для того щоб отримати значення властивості з таким ключем (ім'ям), використовується синтаксис квадратних дужок.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

// =============END-THEORY============

// ==============SOLUTION=============

// Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна keys
// Значення змінної keys - це масив ["descr", "rating", "price"]
// Оголошена змінна values
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153]

// ============END-EXERCISE=============

// ==============SOLUTION===============

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key),
//   values.push(apartment[key]);
// }

// console.log(keys[2]);

// ==============================Модуль3 Завдання 11/41;

// ================THEORY================

// Розберемо концепцію власних і невласних властивостей об'єкта і навчимося правильно використовувати цикл for...in.

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // {name: 'Mango'}
// console.log(dog.name); // 'Mango'
// console.log(dog.legs); // 4
// Метод Object.create(animal) створює і повертає новий об'єкт, зв'язуючи його з об'єктом animal. Тому можна отримати значення властивості legs, звернувшись до неї як dog.legs, хоча вона відсутня в об'єкті dog - це невласна властивість з об'єкта animal.

// Оператор in, який використовується в циклі for...in, не розрізняє власні та невласні властивості об'єкта. Ця особливість заважає, оскільки ми завжди хочемо перебрати тільки власні властивості. Для того щоб дізнатися, чи є в об'єкті власна властивість, чи немає, використовується метод hasOwnProperty(key), який повертає true або false.

// // ❌ Повертає true для всіх властивостей
// console.log("name" in dog); // true
// console.log("legs" in dog); // true

// // ✅ Повертає true тільки для власних властивостей
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false
// Тому під час перебору циклом for...in необхідно на кожній ітерації додати перевірку на власну властивість. Навіть якщо зараз ми впевнені у тому, що об'єкт не містить невласні властивості, це захистить від можливих помилок в майбутньому.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Якщо це власна властивість - виконуємо тіло if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

  // Якщо це невласна властивість - нічого не робимо
// }

// ====================END-THEORY==================

// ================EXERCISE================

// Виконай рефакторинг рішення попереднього завдання, додавши в цикл for...in перевірку на власну властивість.

// Оголошена змінна advert.
// Значення змінної advert - це об'єкт.
// Оголошена змінна apartment.
// Значення змінної apartment - це об'єкт.
// Оголошена змінна keys.
// Значення змінної keys - це масив ["descr", "rating", "price"].
// Оголошена змінна values.
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153].

// =============END-EXERCISE=============

// ==============SOLUTION================

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//  if (apartment.hasOwnProperty(key))
//   keys.push(key);
//   values.push(apartment[key]);

//   // Change code above this line
// }

// console.log(advert)
// console.log(apartment);
// console.log(keys);
// console.log(values);


// ==============================Модуль3 Завдання 12/41;

// ================THEORY================



// ====================END-THEORY==================

// ================EXERCISE================

// Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта в параметрі object. Використовуй змінну propCount для зберігання кількості властивостей об'єкта.

// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта

// =============END-EXERCISE=============

// ==============SOLUTION================

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount++;
//     }
//   }
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


// ==============================Модуль3 Завдання 13/41;

// ================THEORY================

// Вбудований клас Object має кілька корисних методів для роботи з об'єктами. Перший з них - це Object.keys(obj), який приймає об'єкт і повертає масив ключів його власних властивостей. Якщо в об'єкті немає властивостей, метод поверне порожній масив.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']
// Скомбінувавши результат Object.keys() і цикл for...of, можна зручно перебрати власні властивості об'єкта, не вдаючись до використання архаїчного циклу for...in з перевірками приналежності властивостей.

// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значення властивості
//   console.log(book[key]);
// }
// Ми перебираємо масив ключів об'єкта і на кожній ітерації отримуємо значення властивості з таким ключем.

// ====================END-THEORY==================

// ================EXERCISE================

// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.

// Оголошена змінна apartment.
// Значення змінної apartment - це об'єкт.
// Оголошена змінна keys.
// Значення змінної keys - це масив ["descr", "rating", "price"].
// Значення змінної keys отримане за допомогою методу Object.keys().
// Оголошена змінна values.
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153].
// Значення змінної values отримане за допомогою циклу for...of.

// =============END-EXERCISE=============

// ==============SOLUTION================

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this 
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);

// }

// console.log(apartment);
// console.log(keys);
// console.log(values);
// console.log();


// ==============================Модуль3 Завдання 14/41;

// ================THEORY================

// ЗАДАЧА. ПІДРАХУНОК ВЛАСТИВОСТЕЙ 2.0

// ====================END-THEORY==================

// ================EXERCISE================

// Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і, можливо, але не обов'язково, цикл for...of.

// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта
// Функція використовує метод Object.keys() і, можливо, цикл for...of


// function countProps(object) {
//   // Change code below this line
//   const keys = Object.keys(countProps)
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Change code above this line
//   const keys = Object.keys(object);
//   return keys.length;
  
// }

// =============END-EXERCISE=============

// ==============SOLUTION================

// function countProps(object) {
//   // Change code below this line
//   const propCount = Object.keys(object).length;
//   return propCount;
//   // Change code above this line
// }


// ==============================Модуль3 Завдання 15/41;

// ================THEORY================

// Якщо метод Object.keys(obj) повертає масив ключів власних властивостей об'єкта, то метод Object.values(obj) повертає масив значень його власних властивостей. Якщо в об'єкті відсутні властивості, метод Object.values(obj) поверне порожній масив.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ["title", "author", "genres", "rating"]

// const values = Object.values(book);
// console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]
// Масив значень властивостей також можна перебрати циклом for...of, наприклад для отримання загальної суми числових значень.

// ===============END-THEORY=============

// ================EXERCISE==============

// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, а у змінну values - масив всіх значень його властивостей. Використовуй методи Object.keys() і Object.values().

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна keys
// Значення змінної keys - це масив ["descr", "rating", "price"]
// Оголошена змінна values
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153]
// Для отримання масиву ключів об'єкта apartment використовується Object.keys()
// Для отримання масиву значень об'єкта apartment використовується Object.values()

// =============END-EXERCISE=============

// ==============SOLUTION================

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);


// ==============================Модуль3 Завдання 16/41;

// ================THEORY================

// !!! ЗАДАЧА: ВИТРАТИ НА ЗАРПЛАТУ !!!

// ===============END-THEORY=============

// ================EXERCISE==============

// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, де ім'я властивості - це ім'я співробітника, а значення властивості - це зарплата. Функція повинна розрахувати загальну суму зарплат співробітників і повернути її. Використовуй змінну totalSalary для зберігання загальної суми зарплати.

// Оголошена функція countTotalSalary(salaries)
// Виклик countTotalSalary({}) повертає 0
// Виклик countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) повертає 330
// Виклик countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) повертає 400
// Функція враховує тільки власні властивості об'єкта.

// =============END-EXERCISE=============

// ==============SOLUTION================


// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   for (const key in salaries) {
//     if (salaries.hasOwnProperty(key)) {
//       totalSalary += salaries[key];
//     }
//   }

//   return totalSalary;
// }


// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));


// ==============================Модуль3 Завдання 16/41;

// ================THEORY================

// У стандартний набір повсякденних завдань розробника входить маніпуляція масивом однотипних об'єктів. Це означає, що всі об'єкти в масиві гарантовано матимуть однаковий набір властивостей, але з різними значеннями.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
// ];
// Для перебирання такого масиву використовується стандартний цикл for...of. Значення властивостей кожного об'єкта можна отримати, використовуючи синтаксис «через крапку», оскільки в кожному об'єкті набір властивостей та їх імена будуть однакові, відрізняються тільки значення.

// for (const book of books) {
//   // Об'єкт книги
//   console.log(book);
//   // Назва
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }

// ===============END-THEORY=============

// ================EXERCISE==============

// Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// Оголошена змінна colors
// Значення змінної colors - це масив
// Оголошена змінна hexColors
// Значення змінної hexColors - це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Оголошена змінна rgbColors
// Значення змінної rgbColors - це масив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

// =============END-EXERCISE=============

// ==============SOLUTION================

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(colors);
// console.log(hexColors);
// console.log(rgbColors);
// console.log();


// ==============================Модуль3 Завдання 15/41;

// ================THEORY================

// ЗАДАЧА. ПОШУК ОБ'ЄКТА ЗА ЗНАЧЕННЯМ ВЛАСТИВОСТІ

// ===============END-THEORY=============

// ================EXERCISE==============

// Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту. Функція шукає об'єкт продукту з таким ім'ям (властивість name) в масиві products і повертає його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// Оголошена функція getProductPrice(productName).
// Виклик getProductPrice("Radar") повертає 1300.
// Виклик getProductPrice("Grip") повертає 1200.
// Виклик getProductPrice("Scanner") повертає 2700.
// Виклик getProductPrice("Droid") повертає 400.
// Виклик getProductPrice("Engine") повертає null.

// =============END-EXERCISE=============

// ==============SOLUTION================

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line



  // Change code above this line
}