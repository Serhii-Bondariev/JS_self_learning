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


function checkStorage(available, ordered) {
    let message;
    // Change code below this line
  
    if (ordered > available) {
      message = "Not enough goods in stock!";
    } else {
      message = "The order is accepted, our manager will contact you";
    }
  
    // Change code above this line
    return message;
  }