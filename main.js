document.querySelectorAll('.custom-radio-btn input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
      if (this.checked) {
        updateTheme(this.id);
      }
    });
  });
  
  function updateTheme(selectedRadioId) {
    const bodyClassList = document.body.classList;
    switch (selectedRadioId) {
      case 'first':
        bodyClassList.remove('theme-2', 'theme-3');
        bodyClassList.add('theme-1');
        break;
      case 'second':
        bodyClassList.remove('theme-1', 'theme-3');
        bodyClassList.add('theme-2');
        break;
      case 'third':
        bodyClassList.remove('theme-1', 'theme-2');
        bodyClassList.add('theme-3');
        break;
      default:
        console.log("Unknown theme selection");
    }
  }
  

let buttons = document.querySelectorAll('.button');
let displayValue = document.querySelector('.value');
let equalBtn = document.querySelector('.equals');
let resetBtn = document.querySelector('.reset');
let delBtn = document.querySelector('.del')

displayValue.innerText = '0';
let isNewInput = true;

function updateCalculatorDisplay(){
    let result;
    buttons.forEach(button => {
        button.addEventListener('click', function() {
          const currentValue = displayValue.innerText;
          const valueToAppend = button.value;
          if (currentValue === '0' || isNewInput) {
            displayValue.innerText = valueToAppend;
            result = displayValue;
            isNewInput = false; 
          } else {
            displayValue.innerText += valueToAppend;
          }
          calculate(result);
        });
      });
}

function calculate(result){
    equalBtn.addEventListener('click', () =>{
        displayValue.innerText = eval(result.innerText);
    })
}

function resetDisplay(){
    resetBtn.addEventListener('click', () =>{
        displayValue.innerText = "0";
    })
}

function delNum() {
    let currentValue = displayValue.innerText;
    console.log(currentValue)
    if (currentValue.length > 1) {
        displayValue.innerText = currentValue.slice(0, -1);
    } else {
        displayValue.innerText = '0';
    }
}

delBtn.addEventListener('click', delNum)
updateCalculatorDisplay();
resetDisplay();