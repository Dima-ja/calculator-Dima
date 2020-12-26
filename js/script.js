let AllButtons = document.querySelectorAll("button");
let PreviousDisplay = document.querySelector(".previousdisplay");
let CurrentDisplay = document.querySelector(".currentdisplay");
let middelDisplay = document.querySelector(".operator");


class calculator {
  constructor(PreviousDisplay, middelDisplay, CurrentDisplay) {
    this.PreviousDisplay = PreviousDisplay;
    this.CurrentDisplay = CurrentDisplay;
    this.middelDisplay = middelDisplay;
    this.PreviousDisplayValue = "";
    this.CurrentDisplayValue = "";
  }

  clear() {
    this.PreviousDisplayValue = "";
    this.CurrentDisplayValue = "";
    this.CurrentDisplay.innerHTML = "";
    this.PreviousDisplay.innerHTML = "";
    this.middelDisplay.innerHTML = "";
    this.Operation = undefined;
  }

  Delete() {
    let curretnstring = this.CurrentDisplay.innerHTML;
    curretnstring = curretnstring.slice(0, curretnstring.length - 1);
    this.CurrentDisplay.innerHTML = curretnstring;

  }


  addnummer(num) {
    if (num === "." && this.CurrentDisplayValue.includes(".")) return
    else
      this.CurrentDisplayValue = this.CurrentDisplayValue.toString() + num.toString();
  }


  updateDisplay() {
    this.CurrentDisplay.innerHTML = this.CurrentDisplayValue;
    this.PreviousDisplay.innerHTML = this.PreviousDisplayValue;

  }


  Operation(Operation) {
    if (this.CurrentDisplayValue === "") return
    this.Operation = Operation
    this.PreviousDisplayValue = this.CurrentDisplayValue
    this.CurrentDisplayValue = ""

  }


  equale(){
    if(this.CurrentDisplayValue != "" && this.PreviousDisplayValue != "")
    {
      let result= 0;
      if(this.middelDisplay.innerHTML == "+" ) result = Number(this.PreviousDisplayValue) + Number(this.CurrentDisplayValue);
      else if(this.middelDisplay.innerHTML == "-" ) result = Number(this.PreviousDisplayValue) - Number(this.CurrentDisplayValue);
      else if(this.middelDisplay.innerHTML == "/" ) result = Number(this.PreviousDisplayValue) / Number(this.CurrentDisplayValue);
      else if(this.middelDisplay.innerHTML == "*" ) result = Number(this.PreviousDisplayValue) * Number(this.CurrentDisplayValue);
     
      this.PreviousDisplayValue = "";
      this.middelDisplay.innerHTML= "";
      this.CurrentDisplayValue = result;
      this.updateDisplay();
    }
   else {
     alert("hello");
   }
  }


  calculate(operator) {

    if (this.PreviousDisplay.innerHTML === "") {
      this.PreviousDisplayValue = this.CurrentDisplayValue;
      this.CurrentDisplayValue = "";
      this.middelDisplay.innerHTML = operator;
      this.updateDisplay();
    }
    else {
      let previousoperator = this.middelDisplay.innerHTML;
      if (this.CurrentDisplayValue === "")alert ("you should enter another value!");
      else {
        let result = 0;
        if(previousoperator == "+" ) result = Number(this.PreviousDisplayValue) + Number(this.CurrentDisplayValue);
        else if(previousoperator == "-" ) result = Number(this.PreviousDisplayValue) - Number(this.CurrentDisplayValue);
        else if(previousoperator == "/" ) result = Number(this.PreviousDisplayValue) / Number(this.CurrentDisplayValue);
        else if(previousoperator == "*" ) result = Number(this.PreviousDisplayValue) * Number(this.CurrentDisplayValue);
        

       this.PreviousDisplayValue = result;
       this.middelDisplay.innerHTML = operator;
       this.CurrentDisplayValue = "";
       this.updateDisplay();
      }

    }
  }
}

let calculator1 = new calculator(PreviousDisplay, middelDisplay, CurrentDisplay);


AllButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.innerText === "AC") calculator1.clear();
    else if (button.innerText === "Dele") calculator1.Delete();
    else if (button.innerText === "=") calculator1.equale();
    else if (button.innerText === "+" || button.innerText === "-" || button.innerText === "*" || button.innerText === "/")
      calculator1.calculate(button.innerText);
    else {
      calculator1.addnummer(button.innerText);
      calculator1.updateDisplay();
    }

  })

})