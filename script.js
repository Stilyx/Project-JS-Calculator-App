const theme = document.getElementById('themes');
const numbers = document.querySelectorAll('.button-number');
const result = document.querySelector('#calc-result');
const resets = document.querySelectorAll('.reset-buttons');
const action = document.querySelectorAll('.actionbutton');
const equal = document.querySelector('.result');

deleteNumbers();
inputKey();
addValues();
getResult();
getOperation();
changeTheme();

result.value = '';

function changeTheme() {
  theme.addEventListener('change', e => {
    const themeValue = Number(theme.value);

    switch (themeValue) {
      case 1:
        document.body.setAttribute('class', 'first-theme');
        break;
      case 2:
        document.body.setAttribute('class', 'second-theme');
        break;
      case 3:
        document.body.setAttribute('class', 'third-theme');
        break;

      default:
        document.body.setAttribute('class', 'first-theme');
    }
  });
}

function inputKey() {
  result.addEventListener('keypress', e => {
    const regex = /[0-9+./*-]/;
    const regexTest = regex.test(e.key);
    console.log(e.key);
    if (!regexTest) {
      e.preventDefault();
    }

    if (result.value.includes('.') && e.key === '.') {
      e.preventDefault();
    }

    if (e.key === 'x') {
      result.value += '*';
    }

    if (e.key === 'Enter') {
      getResult();
    }
  });
}

function getOperation() {
  action.forEach(actions => {
    actions.addEventListener('click', e => {
      const clickedOperation = e.target.textContent;

      switch (clickedOperation) {
        case '+':
          result.value += e.target.textContent;
          break;
        case '-':
          result.value += e.target.textContent;
          break;
        case 'x':
          result.value += '*';
          break;
        case '/':
          result.value += e.target.textContent;
          break;
      }
    });
  });
}

function addValues() {
  numbers.forEach(number => {
    number.addEventListener('click', e => {
      if (result.value.includes('.') && e.target.textContent === '.') {
        e.preventDefault();
      } else if (e.target.value >= 0) {
        result.value += e.target.textContent;
      }
    });
  });
}

function getResult() {
  equal.addEventListener('click', e => {
    result.value = eval(result.value);
  });
  return (result.value = eval(result.value));
}

function deleteNumbers() {
  resets.forEach(reset => {
    reset.addEventListener('click', e => {
      if (e.target.textContent === 'DEL') {
        result.value = result.value.slice(0, -1);
      } else {
        result.value = null;
      }
    });
  });
}
