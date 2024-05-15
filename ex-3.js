// ให้นำคำตอบจากโจทย์ Exercise 1 มาเขียนใหม่ในรูปแบบ Ternary Operator
// กรณีที่ไม่เข้าเงื่อนไขใด ๆ เลยให้โปรแกรมหลอดไฟแสดงข้อความว่า “Please choose the correct input (On/Off)” ออกมาทางหน้าจอด้วย console.log()
// กำหนดให้ lightBulbStatus มีค่าเป็น "Off"
//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";
let message;

lightBulbStatus === "Off" || lightBulbStatus === "On" ? message = "Light bulb is " + lightBulbStatus : message = "Please choose the correct input (On/Off)";
//Start coding here
console.log(message);