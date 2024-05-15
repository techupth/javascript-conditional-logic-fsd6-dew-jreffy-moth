//Exercise 2
let lightBulbStatus = "On";
lightBulbStatus = "Broken";

if (lightBulbStatus === "Broken") {
    console.log("Light bulb is Broken.");
}
else if (lightBulbStatus === "On") {
    console.log("Light bulb is On.");
}
else if (lightBulbStatus === "Off"){
    console.log("Light bulb is Off.");
}
else {
    console.log("Please choose the correct input (On/Off/Broken)");
}
