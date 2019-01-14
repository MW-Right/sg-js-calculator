// VARIABLES
var calculationType;
do {
    // CALCULATOR SELECTION
    function init() {
        var calcType = prompt("Which calculator would you like to use?\nBasic Calculator - +,-,/,*\nAdvanced Calculator - BMI, Fuel Usage, Celcius to Farenheit");
        if (calcType === "basic") {
            calculationType = prompt("What would you like to do?\nAddition, Subtraction, Division, Multiplication");
            var num1 = prompt("What's the first number?");
            var num2 = prompt("What's the second number?");

            // SIMPLE CALCULATOR FUNCTIONS
            var simpleCalc = {
                addition: function(num1, num2) {
                    return parseFloat(num1) + parseFloat(num2);
                },
                subtraction: function(num1, num2) {
                    return parseFloat(num1) - parseFloat(num2);
                },
                division: function(num1, num2) {
                    return parseFloat(num1) / parseFloat(num2);
                },
                multiplication: function(num1, num2) {
                    return parseFloat(num1) * parseFloat(num2);
                }
            };
            switch (calculationType) {
                case "addition":
                document.getElementById("prev").innerHTML = "<p>Previous answer: " + (simpleCalc.addition(num1,num2)) + "</p>";
                break;
                case "subtraction":
                document.getElementById("prev").innerHTML = "<p>Previous answer: " + (simpleCalc.subtraction(num1,num2)) + "</p>";
                break;
                case "division":
                document.getElementById("prev").innerHTML = "<p>Previous answer: " + (simpleCalc.division(num1, num2)) + "</p>";
                break;
                case "multiplication":
                document.getElementById("prev").innerHTML = "<p>Previous answer: " + (simpleCalc.multiplication(num1, num2)) + "</p>";
                break;
            }
        } else if (calcType === "advanced") {
            calculationType = prompt("What would you like to do?\nBMI - bmi, Fuel consumption - fc, Celsius to Farenheit or vice versa - ctof");
            var advancedCalc = {
                bmi: function(height, weight) {
                    return (weight / ((height / 100) * (height / 100)));
                },
                fuel: function(fuelUsed, distance) {
                    return (distance / fuelUsed) * 2.35215;
                },
                fuelPrice: function(distance, fuelUnitCost,fuelType) {
                    if (fuelType === "diesel") {
                        fuelUnitCost = 1.43
                    } else if (fuelType === "petrol") {
                        fuelUnitCost = 1.28
                    };
                    return fuelUnitCost / ((distance * 0.621371) / fuelUsed);
                },
                cToF: function(temp, direction) {
                    if (direction === "c") {
                        return (temp * (9 / 5)) + 32;
                    } else if (direction === "f") {
                        return ((temp - 32) * (5 / 9));
                    };
                },
            }
            switch (calculationType) {
                case "bmi":
                var height = prompt("What is your height in cm?");
                var weight = prompt("What is your weight in kg?");
                document.getElementById("prev").innerHTML = "<p>You're fat: " + (advancedCalc.bmi(height, weight)) + " body-mass index</p>";
                break;
                case "fc":
                var fuelUsed = prompt("How much fuel have you used?\n(in Litres)");
                var distance = prompt("How many kilometres have you travelled?");
                var fuelType = prompt("Which fuel did you use?\n d for diesel\np for petrol");
                document.getElementById("prev").innerHTML = "<p>Your miles/gallon: " + (advancedCalc.fuel(fuelUsed, distance, fuelType)) + "</p>";
                document.getElementById("prev").innerHTML = "<p>Price per mile: " + (advancedCalc.fuelPrice(fuelUsed, distance, fuelType)) + "</p>";
                break;
                case "ctof":
                var direction = prompt("Which unit would you like to calculate FROM?\nC for Celsius\nF for Farenheit");
                var temp = prompt("What's the temperature?");
                document.getElementById("prev").innerHTML = "<p>Previous answer: " + (advancedCalc.cToF(temp, direction)) + "</p>";
                break;
            }
        };
    }
    var another1 = prompt("Would you like to do another calculation?");
    if (another1 === "no") {
        break;
    }
}
while (true)





