// const x = 10;
// const y = 5;

// // Додавання
// console.log(x + y); // 15

// // Віднімання
// console.log(x - y); // 5

// // Множення
// console.log(x * y); // 50

// // Ділення
// console.log(x / y); // 2

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line

// const totalPrice = 3500 * 4;
// console.log(3500 * 4);

// const productName = "Droid";

// const pricePerItem = 3500;

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`
// console.log (message);

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = (pricePerDroid * orderedQuantity + deliveryFee);
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
// console.log(message);

// let cost;
// const subscription = "premium";

// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {
//   console.log("Invalid subscription type");
// }

// console.log(cost); // 500

// let cost;
// const subscription = "premium";

// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Invalid subscription type");
// }

// console.log(cost); // 500

// const global = "global";

// if (true) {
//   const blockA = "block A";

//   // Бачимо глобальну + локальну A
//   console.log(global); // 'global'
//   console.log(blockA); // block A

//   // Змінні blockB і blockC не знайдені в доступних областях видимості.
//   // Буде помилка звернення до змінної.
//   console.log(blockB); // ReferenceError: blockB is not defined
//   console.log(blockC); // ReferenceError: blockC is not defined

//   if (true) {
//     const blockB = "block B";

//     // Бачимо глобальну + зовнішню A + локальну B
//     console.log(global); // global
//     console.log(blockA); // block A
//     console.log(blockB); // block B

//     // Змінна blockC не знайдена в доступних областях видимості.
//     // Буде помилка звернення до змінної.
//     console.log(blockC); // ReferenceError: blockC is not defined
//   }
// }

// if (true) {
//   const blockC = "block C";

//   // Бачимо глобальну + локальну C
//   console.log(global); // global
//   console.log(blockC); // block C

//   // Змінні blockA і blockB не знайдені в доступних областях видимості.
//   // Буде помилка звернення до змінної.
//   console.log(blockA); // ReferenceError: blockA is not defined
//   console.log(blockB); // ReferenceError: blockB is not defined
// }

// // Бачимо лише глобальну
// console.log(global); // global

// // Змінні blockA, blockB і blockC не знайдені в доступних областях видимості.
// // Буде помилка звернення до змінної.
// console.log(blockA); // ReferenceError: blockA is not defined
// console.log(blockB); // ReferenceError: blockB is not defined
// console.log(blockC); // ReferenceError: blockC is not defined

// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// console.log("Лог до виклику функції multiply");
// multiply(2, 3, 5); // Результат множення дорівнює 30
// console.log("Лог після виклику функції multiply");

// Послідовність логів в консолі
// "Лог до виклику функції multiply"
// "Результат множення дорівнює 30"
// "Лог після виклику функції multiply"
// const a = [1, 2, 3];
// const b = a;

// console.log(`a`, a);
// console.log(`b`, a);
// console.log(`c`, c);
// a[0] = 500;
// a[3] = 300;
// b[2] = 100;

// console.log(`a`, a);
// console.log(`b`, a);
// console.log(a === b);
// console.log([1, 2, 3] === [1, 2, 3]);
// console.table(c);
// const c = a;
// c[1] = 9999;
// ========================================
// Цикл FOR
// const friends = ["Mango", "Kivi", "Poly", "Ajax"];
// console.table(friends);
// // const lastIndex = friends.length - 1;

// for (let i = 0; i < friends.length; i += 1) {
//   friends[i] += `-${i}`;
// }
// console.table(friends);
// // ============================================
// // Цикл FOR OFF  більш  декларативний,застосоується якщо не потрібен індекс або не потрібно міняти елемент масиву
// for (const friend of friends) {
//   console.log(friend);
// }
// const cart = [45, 44, 62, 36, 112, 98, 654];
// let total = 0;
// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);

//   total = total + cart[i];
// }
// console.log(`Total `, total);

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//   // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//   // про успіх і робимо break, щоб далі не шукати
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

//   // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"

// 1. Оголошення функції multiply
// function multiply() {
//   // Тіло функції
//   console.log("Це лог на момент виклику функції multiply");
// }

// // 2. Виклики функції multiply

// // Оголошення параметрів x, y, z
// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }
// multiply(2, 3, 5); // Результат множення дорівнює 30
// multiply(4, 8, 12); // Результат множення дорівнює 384
// multiply(17, 6, 25); // Результат множення дорівнює 2550

// function multiply(x, y, z) {
//   console.log("Код до return виконується звичайним чином");

//   // Повертаємо результат виразу множення
//   return x * y * z;

//   console.log("Цей лог ніколи не виконається, він стоїть після return");
// }

// // Результат роботи функції можна зберегти у змінну
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function getCombination(arr, count) {
//   const result = [];
//   for (let i = 0; i < arr.lenght
// }

// function getReactArea(dimentions) {
//   const dimentionsArr = dimentions.split(" ");
//   const firstElemrnt = dimentionsArr[0];
//   const secondElement = dimentionsArr[1];

//   return firstElemrnt * secondElement;
// }
// console.log(getReactArea(`8 11`));
// console.log(getReactArea(`15 11`));
<<<<<<< Updated upstream
=======

// function sayHi() {
//   console.log("Hello, this is my first function!");
// }
// sayHi();

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function makeMessage(name, price) {
//   // Change code below this line
//   makeMessage(name, price);

//   const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   makeMessage("Scanner", 3500);
//   makeMessage("Reactor", 8000);
//   makeMessage("Engine", 4070);
//   return message;
// }

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const orderedQuantity = 1;
//   const pricePerDroid = 50;
//   const deliveryFee = 50;
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery ${deliveryFee} credits is included in total price.`;

//   // Change code above this line
//   return message;
// }

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
// // orderedQuantity = 1
// //   pricePerDroid = 50
// //   deliveryFee = 50
// //   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery ${deliveryFee} credits is included in total price.`;

// makeOrderMessage(2, 100, 50)
//   makeOrderMessage(4, 300, 100)
//   makeOrderMessage(10, 70, 200)
//   // Change code above this line
//   return message;
// }

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee){

//     totalPrice = orderedQuantity * pricePerDroid + deliveryFee;

//     message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
//     return message;
// }

// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;

//   // Change code above this line
//   return passed;
// }

// function checkStorage(available, ordered) {
//   let message;
//   if (ordered > available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "Order is processed, our manager will contact you.";
//   }
//   return message;
// }

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     const creditsLeft = customerCredits - totalPrice;
//     message = `You ordered ${orderedQuantity} droids, you have ${creditsLeft} credits left`;
//   }

//   // Change code above this line
//   return message;
// }

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   if (password === null) {
//     // Change this line
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   return message;
// }

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     // Change this line
//     message = "There are no products in the order!";
//   } else if (ordered > available) {
//     // Change this line
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }

//   // Change code above this line
//   return message;
// }

// const temps = [14, -4, 25, 8, 11];

// // В консолі буде масив
// console.log(temps);
// // ❌ Так не спрацює, тому що передаємо цілий масив
// console.log(Math.max(temps)); // NaN

// // В консолі буде набір окремих чисел
// console.log(...temps);
// // ✅ Розподілимо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25

const temps = [14, -4, 25, 8, 11];
// console.log(temps);
// console.log(Math.max(...temps));
const copyOfTemps = [...temps];
console.log(copyOfTemps);
>>>>>>> Stashed changes
