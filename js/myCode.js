/*
TO FIX:

1) any num/character clicked after equal function without operator

*/


let tempInputArray = [] //array used to build input value
let tempInputNumber = undefined //temp input value that is calculated in to main value then wiped
let returnValue = undefined //main value throughout app
let operationVariable = undefined //input operation
let previousOperation = undefined //operation is used AFTER num input so I am storing it for use one step later
let currentValue = 0
let calculatedValue = undefined //stores calculated value if user continues using operators after '='

const numberFunction = (valueVar) => {
    //append to decimal point if value doesn't exist
    if (tempInputNumber == undefined && valueVar == '.') {
        tempInputArray.push('0');
    }
    //add characters to array, join array to string, convert to number
    //obviously the best way to accomplish this
    tempInputArray.push(valueVar);
    tempInputNumber = Number(tempInputArray.join(''));
    console.log(tempInputNumber);
    currentValue = tempInputNumber;
    document.getElementById("currentValue").innerHTML = currentValue;
}

const operationFunction = (valueVar) => {
    //stores the previous operation to address issue when swapping between operators
    if (tempInputNumber == undefined) {
        window.alert("Please input a numberic value before choosing an operation.");
    }
    else {
        if (operationVariable != undefined) {
            previousOperation = operationVariable;
        }
        operationVariable = valueVar;
        //this is to set an initial 'returnValue' to be used by operators
        //this stems from an issue where I would try to multiply/divide, but the initial value wasn't set
        if (returnValue == undefined) {
            returnValue = tempInputNumber;
        }
        else if (calculatedValue != undefined) {
            returnValue = calculatedValue;
            calculatedValue = undefined;
        }
        else {
            //main operation
            //verify same operation
            if (operationVariable == previousOperation) {
                switch (operationVariable) {
                    case '+':
                        returnValue += tempInputNumber;
                        break;
                    case '-':
                        returnValue -= tempInputNumber;
                        break;
                    case '*':
                        returnValue *= tempInputNumber
                        break;
                    case '/':
                        returnValue /= tempInputNumber
                        break;
                }
            }
            //runs the previous operation
            else {
                switch (previousOperation) {
                    case '+':
                        returnValue += tempInputNumber;
                        break;
                    case '-':
                        returnValue -= tempInputNumber;
                        break;
                    case '*':
                        returnValue *= tempInputNumber;
                        break;
                    case '/':
                        returnValue /= tempInputNumber;
                        break;
                }
            }
            document.getElementById("currentValue").innerHTML = returnValue;
        }
        tempInputNumber = undefined;
        tempInputArray = []
    }
}

const deleteFunction = () => {
    //this will delete the MOST RECENT character appended
    if (tempInputNumber != undefined) {
        tempInputArray.pop();
        tempInputNumber = Number(tempInputArray.join(''));
        console.log(tempInputNumber);
        currentValue = tempInputNumber;
        document.getElementById("currentValue").innerHTML = currentValue;
    }
}

const equalFunction = () => {
    if (returnValue != undefined) {
        switch (operationVariable) {
            case '+':
                returnValue += tempInputNumber;
                break;
            case '-':
                returnValue -= tempInputNumber;
                break;
            case '*':
                returnValue *= tempInputNumber;
                break;
            case '/':
                returnValue /= tempInputNumber;
                break;
        }
        document.getElementById("currentValue").innerHTML = returnValue;
        calculatedValue = returnValue;
    }
    else {
        window.alert("You should select an initial value, operator, and a second value before using the equal operator.");
    }
    //I decided to clear the values after hitting the '=' sign. 
    //I ran in to issues when trying to continue with an operator... might try to add this functionality at a later date.
    tempInputArray = []
    tempInputNumber = 0
    operationVariable = undefined
    previousOperation = undefined
    currentValue = 0
}



//resets all values
const clearFunction = () => {
    tempInputArray = []
    tempInputNumber = 0
    returnValue = undefined
    operationVariable = undefined
    previousOperation = undefined
    calculatedValue = undefined
    currentValue = 0
    document.getElementById("currentValue").innerHTML = currentValue;
}