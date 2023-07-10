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
function createBasket(product, quantity, price) {
  return { product, quantity, price, totalPrice: quantity * price };
}
console.log(createBasket("pizza", 3, 120));
console.log(createBasket("apple", 13, 1200));

const friends = [
  { name: "Anna", books: ["Bible", "Harry potter"], age: 21 },
  { name: "Bob", books: ["War and Peace", "Rome and Juliet"], age: 26 },
  { name: "Alice", books: ["Bible", "War and Peace", "Harry potter"], age: 65 },
  {
    name: "John",
    books: ["Bible", "War and Peace", "Rome and Juliet", "Harry potter"],
    age: 23,
  },
];

function getUserNames(users, bookName) {
  const userNames = [];

  for (const user of users) {
    if (user.books.includes(bookName)) {
      userNames.push(user.name);
    }
  }

  return userNames.join(", ");
}

console.log(getUserNames(friends, "Harry Potter"));
