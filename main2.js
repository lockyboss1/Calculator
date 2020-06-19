"use strict";
let display = document.getElementById("display1");

function operatorButton() {
    var button = document.getElementById("squareroot");
    button.addEventListener("click", function () {
        display.innerHTML += "√";
    })
    var button = document.getElementById("power");
    button.addEventListener("click", function () {
        display.innerHTML += "^";
    })
    var button = document.getElementById("divide");
    button.addEventListener("click", function () {
        display.innerHTML += "/";
    })
    var button = document.getElementById("multiply");
    button.addEventListener("click", function () {
        display.innerHTML += "*";
    })
    var button = document.getElementById("subtract");
    button.addEventListener("click", function () {
        display.innerHTML += "-";
    })
    var button = document.getElementById("add");
    button.addEventListener("click", function () {
        display.innerHTML += "+";
    })
    var button = document.getElementById("dot");
    button.addEventListener("click", function () {
        display.innerHTML += ".";
    })
    var button = document.getElementById("clear");
    button.addEventListener("click", function () {
        display.innerHTML = "";
    })
    var button = document.getElementById("delete");
    button.addEventListener("click", function () {
        display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length - 1);
    })
}
operatorButton();

function numButton() {
    let asd = document.querySelectorAll('.btn-input');
    for (let i = 0; i < asd.length; i++) {
        asd[i].addEventListener("click", function () {
            display.innerHTML += i
        })
    }
}
numButton();

function keyboardInput() {
    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 48) {
            display.innerHTML += "0";
        } else if (event.keyCode == 49) {
            display.innerHTML += "1";
        } else if (event.keyCode == 50) {
            display.innerHTML += "2";
        } else if (event.keyCode == 51) {
            display.innerHTML += "3";
        } else if (event.keyCode == 52) {
            display.innerHTML += "4";
        } else if (event.keyCode == 53) {
            display.innerHTML += "5";
        } else if (event.keyCode == 54) {
            display.innerHTML += "6";
        } else if (event.keyCode == 55) {
            display.innerHTML += "7";
        } else if (event.keyCode == 56) {
            display.innerHTML += "8";
        } else if (event.keyCode == 57) {
            display.innerHTML += "9";
        } else if (event.keyCode == 8) {
            display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length - 1);
        }
    })
}
keyboardInput();

function addition(operand1, operand2) {
    let solution = operand1 + operand2;
    return solution;
}
addition();

function subtraction(operand1, operand2) {
    let solution = operand1 - operand2;
    return solution;
}
subtraction();

function multiplication(operand1, operand2) {
    let solution = operand1 * operand2;
    return solution;
}
multiplication();

function division(operand1, operand2) {
    let solution = operand1 / operand2;
    return solution.toFixed(3);
}
division();

function squareroot(operand1) {
    let solution = Math.sqrt(operand1);
    return solution;
}
squareroot();

function power(operand1, operand2) {
    var solution = Math.pow(operand1, operand2);
    return solution;
}
power();

function operate(operand1, operator, operand2) {
    switch (operator) {
        case '^':
            return power(operand1, operand2);
        case '/':
            return division(operand1, operand2);
        case '*':
            return multiplication(operand1, operand2);
        case '+':
            return addition(operand1, operand2);
        case '-':
            return subtraction(operand1, operand2);
        default:
            break;
    }
}
operate();

function operate1(operator, operand1) {
    switch (operator) {
        case '√':
            return squareroot(operand1);
        default:
            break;
    }
}
operate1();

function calculator() {
    var button = document.getElementById("equals");
    button.addEventListener("click", function () {
        let calculation = display.innerHTML.split('');
        let operation, answer, operand1, operand2;
        for (let i = 0; i < calculation.length; i++) {
            if (calculation[i] === "/" || calculation[i] === '+' || calculation[i] === "-" || calculation[i] === "*" || calculation[i] === "^") {
                let operationPos = calculation.indexOf(calculation[i]);
                operation = calculation[i];
                operand1 = parseFloat(calculation.slice(0, operationPos).join(''));
                operand2 = parseFloat(calculation.slice(operationPos + 1).join(''));
                answer = operate(operand1, operation, operand2);
                display.innerHTML = (answer);
            } else if (calculation[i] === "√") {
                let operationPos = calculation.indexOf(calculation[i]);
                operation = calculation[i];
                operand1 = parseFloat(calculation.slice(operationPos + 1).join(''));
                answer = operate1(operation, operand1);
                display.innerHTML = (answer);
            }
        }
    })
}
calculator();