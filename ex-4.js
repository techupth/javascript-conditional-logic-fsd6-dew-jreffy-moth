// ให้นำคำตอบจากโจทย์ Exercise 2 มาเขียนใหม่ในรูปแบบ Switch Statement
// กำหนดให้ lightBulbStatus มีค่าเป็น "On"
//Exercise 4
// Switch Statement
let lightBulbStatus = "On";
let result;

switch(lightBulbStatus){
    case "On":
        result = "Light Bulb is " + lightBulbStatus;
        break;
    case "Off":
        result = "Light Bulb is " + lightBulbStatus;
        break;
    default:
        result = "Please choose the correct input (On/Off)";
        break;
};
//Start coding here
console.log(result);