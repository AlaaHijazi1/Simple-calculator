let equation = document.getElementById("equation");
let clr = document.getElementById("clr");
let del = document.getElementById("del");
let dot = document.getElementById("dot");
let equal = document.getElementById("equal");
let negative = document.getElementById("negative");

let x;
let operation;
let y;
let result;

document.querySelectorAll(".number").forEach((button) => {
  button.onclick = () => calc(button.innerText);
});

document.querySelectorAll(".operation").forEach((button) => {
  button.onclick = () => operations(button.innerText);
});

clr.onclick = () => cleartext();
dot.onclick = () => setdot();
equal.onclick = () => equals();
del.onclick = () => delet();
negative.onclick = () => negatives();

function operations(op) {
  if (x !== undefined) {
    operation = op;
    clearerror();
  } else {
    error("Enter First Number !!");
  }
}

function calc(number) {
  clearerror();
  if (result !== undefined) {
    x = result.toString();
    if (y === undefined) {
      y = number;
    } else {
      y += number;
    }
    equation.innerHTML = y;
  } else {
    if (x === undefined) {
      x = number;
      equation.innerHTML = x;
    } else {
      if (operation === undefined) {
        x += number;
        equation.innerHTML = x;
      } else {
        if (y === undefined) {
          y = number;
          equation.innerHTML = y;
        } else {
          y += number;
          equation.innerHTML = y;
        }
      }
    }
  }
}
function setdot() {
  if (result !== undefined) {
    if (y === undefined) {
      y = ".";
    } else {
      if (y.indexOf(".") == -1) {
        y += ".";
      }
    }
    equation.innerHTML = y;
  } else {
    if (operation === undefined) {
      if (x === undefined) {
        x = ".";
      } else {
        if (x.indexOf(".") == -1) {
          x += ".";
        }
      }
      equation.innerHTML = x;
    } else if (operation !== undefined) {
      if (y === undefined) {
        y = ".";
      } else {
        if (y.indexOf(".") == -1) {
          y += ".";
        }
      }
      equation.innerHTML = y;
    }
  }
}

function equals() {
  if (x === undefined || y === undefined || operation === undefined) {
    error("Enter Equation !!");
  } else {
    x = parseFloat(x);
    y = parseFloat(y);

    switch (operation) {
      case "+":
        result = x + y;
        break;
      case "*":
        result = x * y;
        break;
      case "-":
        result = x - y;
        break;
      case "%":
        result = x % y;
        break;
      case "/":
        if (y === 0) {
          error("Invalid Input !!");
          equation.innerHTML = "";
          return;
        }
        result = x / y;
        break;
    }
    equation.innerHTML = result;
    y = undefined;
  }
}

function cleartext() {
  x = undefined;
  y = undefined;
  result = undefined;
  equation.innerHTML = "";
  clearerror();
}
function delet() {
  if (operation === undefined && y === undefined) {
    if (x !== undefined) {
      x = x.substring(0, x.length - 1);
      equation.innerHTML = x;
    }
    if (x === "") {
      x = undefined;
    }
  }
  if (x !== undefined && operation !== undefined) {
    if (y !== undefined) {
      y = y.substring(0, y.length - 1);
      equation.innerHTML = y;
    }
    if (y === "") {
      y = undefined;
    }
  }
} 
function error(message) {
  document.getElementById("note").innerHTML = message;
  document.getElementById("note").style.color = "red";
}
function clearerror() {
  document.getElementById("note").innerHTML = "";
}

function negatives() {
  if (operation === undefined && y == undefined) {
    if (x !== undefined) {
      x = "-".concat(x);
      equation.innerHTML = x;
    }
  }
  if (operation !== undefined && x !== undefined) { 
    if (y !== undefined) {
      y = "-".concat(y);
      equation.innerHTML = y;
    }
  }
}