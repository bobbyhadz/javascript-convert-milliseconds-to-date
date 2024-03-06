// EXAMPLE 1 - Convert Milliseconds to a Date using JavaScript

const timestamp = new Date().getTime();
console.log(timestamp); // 👉️ 1673598370158

const date = new Date(timestamp);
console.log(date); // 👉️ Fri Jan 13 2023 10:26:10

console.log(date.toString()); // 👉️ "Fri Jan 13 2023 10:26:10"

// ---------------------------------------------------------

// 👇️ Format date and time using different locales
console.log(date.toLocaleString('en-US')); // 👉️ "1/20/2022, 9:50:15 AM"
console.log(date.toLocaleString('en-GB')); // 👉️ "20/01/2022 09:50:15"
console.log(date.toLocaleString('sv')); // 👉️ "2022-01-20 09:50:15"

// 👇️ Display only the date
console.log(date.toLocaleDateString('en-US')); // 👉️ "1/20/2022"

// 👇️ Display only the time
console.log(date.toLocaleTimeString('en-US')); // 👉️ "9:50:15 AM"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Formatting the date yourself

// function padTo2Digits(num) {
//   return num.toString().padStart(2, '0');
// }

// function formatDate(date) {
//   return (
//     [
//       padTo2Digits(date.getMonth() + 1),
//       padTo2Digits(date.getDate()),
//       date.getFullYear(),
//     ].join('/') +
//     ' ' +
//     [
//       padTo2Digits(date.getHours()),
//       padTo2Digits(date.getMinutes()),
//       padTo2Digits(date.getSeconds()),
//     ].join(':')
//   );
// }

// const timestamp = new Date().getTime();

// // 👇️ 07/25/2023 08:56:28 (mm/dd/yyyy hh:mm:ss)
// console.log(formatDate(new Date(timestamp)));
