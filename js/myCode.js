
let tempInputArray = [] //array used to construct input value
let tempInputNumber = undefined //temp input value that is calculated in to main value then wiped
let returnValue = undefined //main value throughout app
let operationVariable = undefined //input operation
let previousOperation = undefined //
let currentValue = 0
let equatedValue = undefined

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
        else if (equatedValue != undefined) {
            returnValue = equatedValue;
            equatedValue = undefined;
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
        equatedValue = returnValue;
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
    equatedValue = undefined
    currentValue = 0
    document.getElementById("currentValue").innerHTML = currentValue;
}