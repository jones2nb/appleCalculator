let results = document.getElementById("result-text");
let resultContainer = document.getElementById("results");
let clearButton = document.getElementById("clear-button").addEventListener("click", clearDisplay);
let divisionSymbol = document.getElementById("division-symbol");
let multiplicationSymbol = document.getElementById("multiplication-symbol");
let minusSymbol = document.getElementById("minus-symbol");
let plusSymbol = document.getElementById("plus-symbol")
let equalsSymbol = document.getElementById("equals-symbol");
let negate = document.getElementById("plusAndMinus");
let mod = document.getElementById("mod");
let decimal = document.getElementById("decimal");
decimal.addEventListener("click", function(){arithmetic(".");});
mod.addEventListener("click", function(){arithmetic("%");});
negate.addEventListener("click", function(){arithmetic("?");});
equalsSymbol.addEventListener("click", function(){arithmetic("=");});
plusSymbol.addEventListener("click", function(){arithmetic("+");});
minusSymbol.addEventListener("click", function(){arithmetic("-");});
multiplicationSymbol.addEventListener("click", function(){arithmetic("*");});
divisionSymbol.addEventListener("click", function(){arithmetic("/");});
let zeroButtons = document.getElementsByName("zeroButton");
zeroButtons.forEach(element => {
    element.addEventListener("click", function(){setValue("0");});
});
document.getElementById("1").addEventListener("click", function(){setValue("1");});
document.getElementById("2").addEventListener("click", function(){setValue("2");});
document.getElementById("3").addEventListener("click", function(){setValue("3");});
document.getElementById("4").addEventListener("click", function(){setValue("4");});
document.getElementById("5").addEventListener("click", function(){setValue("5");});
document.getElementById("6").addEventListener("click", function(){setValue("6");});
document.getElementById("7").addEventListener("click", function(){setValue("7");});
document.getElementById("8").addEventListener("click", function(){setValue("8");});
document.getElementById("9").addEventListener("click", function(){setValue("9");});
let currSymbol = null;
let nextNumber = null;
let show = false;
let result = null;
let rightSide = "";
let leftSide = "";
let clearClicked = false;

function clearDisplay(){
    if (currSymbol == null || clearClicked == true) {
        rightSide = "";
        leftSide = "";
        results.replaceChildren(document.createTextNode("0"));
        plusSymbol.style.background = "orange";
        document.getElementById("additionSymbol").style.color = "white";
    } else {
        clearClicked = true;
        rightSide = "";
        results.replaceChildren(document.createTextNode("0"));
        switch (currSymbol) {
            case ("+"):
                plusSymbol.style.background = "white";
                document.getElementById("additionSymbol").style.color = "orange";
        }
    }
}

function arithmetic(symbol) {
    console.log(currSymbol);
    if (symbol == "?") {
        if (rightSide != "") {
            rightSide = String(Number(rightSide) * -1);
            results.innerText = rightSide;
        } else {
            leftSide = String(Number(leftSide) * -1);
            results.innerText = leftSide;
        }
        return;
    }

    if (symbol == "%") {
        if (rightSide != "") {
            rightSide = String(Number(rightSide) * .01);
            results.innerText = rightSide;
        } else {
            leftSide = String(Number(leftSide) * .01);
            results.innerText = leftSide;
        }
        return;
    }

    if (symbol == ".") {
        if (rightSide != "") {
            rightSide = rightSide + ".";
            results.innerText = rightSide;
        } else {
            leftSide = leftSide + ".";
            results.innerText = leftSide;
        }

        return
    }
    if (currSymbol != null) {
        switch(currSymbol) {
            case "+":
                results.innerText = String(Number(leftSide) + Number(rightSide));
                break;
            case "-":
                results.innerText = String(Number(leftSide) - Number(rightSide));
                break;
            case "*":
                results.innerText = String(Number(leftSide) * Number(rightSide));
                break;
            case "/":
                results.innerText = String(Number(leftSide) / Number(rightSide));
                break;
        }
        leftSide = results.innerText;
        rightSide = "";
        currSymbol = null;
    }
    if (symbol != "=") {
        currSymbol = symbol;
    } 
    switch(symbol) {
        case "+":
            plusSymbol.style.background = "white";
            document.getElementById("additionSymbol").style.color = "orange";
            break;
        case "-":
            minusSymbol.style.background = "white";
            document.getElementById("minusSymbol").style.color = "orange";
            break;
        case "*":
            multiplicationSymbol.style.background = "white";
            document.getElementById("multiplicationSymbol").style.color = "orange";
            break;
        case "/":
            divisionSymbol.style.background = "white";
            document.getElementById("divisionSymbol").style.color = "orange";
            break;
    }
    
}



function setValue(value) {
    plusSymbol.style.background = "orange";
    document.getElementById("additionSymbol").style.color = "white";
    minusSymbol.style.background = "orange";
    document.getElementById("minusSymbol").style.color = "white";
    multiplicationSymbol.style.background = "orange";
    document.getElementById("multiplicationSymbol").style.color = "white";
    divisionSymbol.style.background = "orange";
    document.getElementById("divisionSymbol").style.color = "white";
    if (results.innerText.charAt(0) == "0") {
        if (currSymbol == null) {
            addLeft(value);
        } else {
            addRight(value);
        }
    } else {
        if (currSymbol != null) {
            addRight(value);
        } else {
            addLeft(value);
        } 
    }   
}

function addRight(value) {
    if (rightSide.length < 9) {
        rightSide = rightSide.replace(",", "")
        rightSide = rightSide + value;
        let tempString = ""
        for (let i = rightSide.length; i >= 0; i--) {
            if (i == 4 || i == 7) {                   
                tempString = tempString + rightSide.charAt(i - 1) + ",";
            } else {
                tempString = tempString + rightSide.charAt(i - 1);
            }
        }
        results.innerText = rightSide;
    }
}

function addLeft(value) {
    if (leftSide.length < 9) {
        leftSide = leftSide.replace(",", "")
        leftSide = leftSide + value;
        console.log(leftSide);
        let tempString = ""
        for (let i = leftSide.length; i >= 0; i--) {
            console.log(i);
            if (i == 4 || i == 7) {                   
                tempString = tempString + leftSide.charAt(i) + ",";
            } else {
                tempString = tempString + leftSide.charAt(i);
            }
        }
        results.innerText = leftSide;
    }
}

