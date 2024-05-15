// ให้เขียนโปรแกรมในการตรวจสอบสถานะของหลอดไฟด้วย If–Else Statement
// ถ้าสถานะของหลอดไฟ (lightBulbStatus) เป็น “On" ให้โปรแกรมหลอดไฟแสดงข้อความว่า "Light bulb is On." ออกมาทางหน้าจอด้วย console.log()
// ถ้าสถานะของหลอดไฟ (lightBulbStatus) เป็น “Off" ให้โปรแกรมหลอดไฟแสดงข้อความว่า "Light bulb is Off." ออกมาทางหน้าจอด้วย console.log()
// กำหนดให้ lightBulbStatus มีค่าเป็น "On"

//Exercise 1
let lightBulbStatus = "On";

const reportLightBulbStatus = (Status) => {
    if(Status === "On"){
        console.log("Light bulb is " + Status);
    } else {
        console.log("Light bulb is Off");
    }
};

reportLightBulbStatus(lightBulbStatus);

// Start coding here.
