//Start coding here
const greeting = "Hello ! 😁";

// greeting(); ไม่สามารถ Declare Variable ที่ชื่อ greeting ได้แล้ว เนื่องจากมีการ Declare ด้วย keyword const จึงไม่สามารถ reassign เป็นรูปแบบ function ได้

function sayHi() {
  let message = greeting;
  return message;
}

console.log(sayHi());
console.log("This line will be executed without any error.");
