const output = document.getElementById('outputdisplay')
function handleinputnumber(number) {
    console.log(number)
    if (!output.value) {
        output.value = "";
    }
    else if (number === '') {
        output.value = (output.value).slice(0, output.value.length - 1)
    }
    output.value += number;
}
function calculate(value) {
    const calculatedValue = eval(value || null);
    if (isNaN(calculatedValue)) {
        output.value = "Can't divide 0 with 0";
        setTimeout(() => {
            output.value = "";
        }, 1300);
    } else {
        output.value = calculatedValue;
    }
}
document.addEventListener('keydown', keyboardoutputHandler);
function keyboardoutputHandler(event) {
    event.preventDefault();
    if (event.key === "0") {
        output.value += "0";
    } else if (event.key === "1") {
        output.value += "1";
    } else if (event.key === "2") {
        output.value += "2";
    } else if (event.key === "3") {
        output.value += "3";
    } else if (event.key === "4") {
        output.value += "4";
    } else if (event.key === "5") {
        output.value += "5";
    } else if (event.key === "6") {
        output.value += "6";
    } else if (event.key === "7") {
        output.value += "7";
    } else if (event.key === "7") {
        output.value += "7";
    } else if (event.key === "8") {
        output.value += "8";
    } else if (event.key === "9") {
        output.value += "9";
    }
    //operators
    if (event.key === "+") {
        output.value += "+";
    } else if (event.key === "-") {
        output.value += "-";
    } else if (event.key === "*") {
        output.value += "*";
    } else if (event.key === "/") {
        output.value += "/";
    }
    if (event.key === ".") {
        output.value += ".";
    }
    if (event.key === "Enter") {
        calculate(result.value);
    }
    if (event.key === "Backspace") {
        const resultoutput = output.value;
        output.value = resultoutput.substring(0, output.value.length - 1);
    }
}