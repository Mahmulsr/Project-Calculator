// Merubah nilai ke screen
const calculatorScreen = document.querySelector(".calculator-screen")
const updateScreen = (number)=>{
    calculatorScreen.value = number
}

// Menginput nilai .number
const numbers = document.querySelectorAll(".number")
numbers.forEach((number)=>{
    number.addEventListener("click", (event)=>{
        inputNumber(event.target.value);
        updateScreen(currenNumber);
    });
});

// 3 variable
let prevNumber = ''
let calculationOperator = ''
let currenNumber = '0'

// Memberikan number ke currenNumber
const inputNumber = (number)=>{
    if (currenNumber === '0'){
        currenNumber = number
    } else {
        currenNumber += number
    }
}

// Menginput nilai .operator
const operators = document.querySelectorAll(".operator")
operators.forEach((operator)=>{
    operator.addEventListener("click", (event)=>{
        inputOperator(event.target.value);
    });
});

// Hasill input operator
const inputOperator = (operator)=>{
    if (calculationOperator === ''){
        prevNumber = currenNumber
    }
    calculationOperator = operator
    currenNumber = '0'
}

// Tombol =
const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () =>{
    calculate()
    updateScreen(currenNumber)
})

// calculasi
const calculate = ()=>{
    let result = ''
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currenNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currenNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currenNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currenNumber)
            break
        default:
           return
    }
    currenNumber = result
    calculationOperator= ''
}

// Tombol AC
const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', ()=>{
    clearAll()
    updateScreen(currenNumber)
});

const clearAll= ()=>{
    prevNumber=''
    calculationOperator=''
    currenNumber='0'
}

// Decimal
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event)=>{
    inputDecimal(event.target.value)
    updateScreen(currenNumber)
});

inputDecimal = (dot) => {
    if(currenNumber.includes('.')){
        return
    }
    currenNumber += dot
}