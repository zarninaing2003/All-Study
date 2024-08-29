// const date  = new Date;
// console.dir(date);

// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getTime());

// const date =  new Date("2025-6-24");
// console.log(date);
// console.log(date.toDateString());
// console.log(date.toTimeString());

// console.log(date.getDay());
// console.log(date.getDate());
// console.log(date.getMonth() + 1);
// console.log(date.getFullYear());



const currentDate =  new Date();
// current Hour + 300

// currentDate.setHours(currentDate.getHours() + 300);

// currentDate.setMonth(currentDate.getMonth() + 4)
const swdCourseDuration  =  50;
const learningStudy =  2;
const requireToFinish  = swdCourseDuration / learningStudy;
currentDate.setDate(currentDate.getDate() + requireToFinish);
console.log(currentDate);
