let lastOperand = 0;
let operation = null;
let historyOperation = null;
let historyCalc = null;

const inputWindow = document.getElementById('inputWindow');
const history = document.getElementById('history');

document.getElementById('btn_clr').addEventListener('click', function () {
  lastOperand = 0;
  operation = null;
  inputWindow.value = '0';
});
document.getElementById('btn_1').addEventListener('click', function () {
  if (inputWindow.value === '0') {
    inputWindow.value = '';
    inputWindow.value += '1';
  } else {
    inputWindow.value += '1';
  }
});
document.getElementById('btn_2').addEventListener('click', function () {
  if (inputWindow.value === '0') {
    inputWindow.value = '';
    inputWindow.value += '2';
  } else {
    inputWindow.value += '2';
  }
});
document.getElementById('btn_3').addEventListener('click', function () {
  if (inputWindow.value === '0') {
    inputWindow.value = '';
    inputWindow.value += '3';
  } else {
    inputWindow.value += '3';
  }
});
document.getElementById('btn_4').addEventListener('click', function () {
  if (inputWindow.value === '0') {
    inputWindow.value = '';
    inputWindow.value += '4';
  } else {
    inputWindow.value += '4';
  }
});
document.getElementById('btn_5').addEventListener('click', function () {
  if (inputWindow.value === '0') {
    inputWindow.value = '';
    inputWindow.value += '5';
  } else {
    inputWindow.value += '5';
  }
});
document.getElementById('btn_6').addEventListener('click', function () {
  if (inputWindow.value === '0') {
    inputWindow.value = '';
    inputWindow.value += '6';
  } else {
    inputWindow.value += '6';
  }
});
document.getElementById('btn_7').addEventListener('click', function () {
  if (inputWindow.value === '0') {
    inputWindow.value = '';
    inputWindow.value += '7';
  } else {
    inputWindow.value += '7';
  }
});
document.getElementById('btn_8').addEventListener('click', function () {
  if (inputWindow.value === '0') {
    inputWindow.value = '';
    inputWindow.value += '8';
  } else {
    inputWindow.value += '8';
  }
});
document.getElementById('btn_9').addEventListener('click', function () {
  if (inputWindow.value === '0') {
    inputWindow.value = '';
    inputWindow.value += '9';
  } else {
    inputWindow.value += '9';
  }
});
document.getElementById('btn_0').addEventListener('click', function () {
  if (inputWindow.value === '0') {
    inputWindow.value = '0';
  } else {
    inputWindow.value += '0';
  }
});
document.getElementById('btn_point').addEventListener('click', function () {
  if (inputWindow.value.includes('.')) {
  } else {
    inputWindow.value += '.';
  }
});
document.getElementById('btn_unar').addEventListener('click', function () {
  if (inputWindow.value.includes('-')) {
    inputWindow.value = inputWindow.value.replace('-', '');
  } else {
    inputWindow.value = '-' + inputWindow.value;
  }
});

document.getElementById('btn_sum').addEventListener('click', function () {
  lastOperand = parseFloat(inputWindow.value);
  operation = 'sum';
  inputWindow.value = '';
  historyOperation = `\n${lastOperand} +`;
});
document.getElementById('btn_diff').addEventListener('click', function () {
  lastOperand = parseFloat(inputWindow.value);
  operation = 'diff';
  inputWindow.value = '';
  historyOperation = `\n${lastOperand} -`;
});
document.getElementById('btn_mult').addEventListener('click', function () {
  lastOperand = parseFloat(inputWindow.value);
  operation = 'mult';
  inputWindow.value = '';
  historyOperation = `\n${lastOperand} *`;
});
document.getElementById('btn_split').addEventListener('click', function () {
  lastOperand = parseFloat(inputWindow.value);
  operation = 'split';
  inputWindow.value = '';
  historyOperation = `\n${lastOperand} /`;
});
document.getElementById('btn_sqvr').addEventListener('click', function () {
  const result = Math.sqrt(parseFloat(inputWindow.value));
  lastOperand = 0;
  operation = null;
  inputWindow.value = result;
  historyOperation = `\n${lastOperand} √`;
  history.value = `${history.value}${historyOperation} ${historyCalc} = ${result}`;
});
document.getElementById('btn_calc').addEventListener('click', function () {
  if (operation === 'sum') {
    const result = lastOperand + parseFloat(inputWindow.value);
    historyCalc = parseFloat(inputWindow.value);
    lastOperand = 0;
    operation = null;
    inputWindow.value = result;
    history.value = `${history.value}${historyOperation} ${historyCalc} = ${result}`;
  } else if (operation === 'diff') {
    const result = lastOperand - parseFloat(inputWindow.value);
    historyCalc = parseFloat(inputWindow.value);
    lastOperand = 0;
    operation = null;
    inputWindow.value = result;
    history.value = `${history.value}${historyOperation} ${historyCalc} = ${result}`;
  } else if (operation === 'mult') {
    const result = lastOperand * parseFloat(inputWindow.value);
    historyCalc = parseFloat(inputWindow.value);
    lastOperand = 0;
    operation = null;
    inputWindow.value = result;
    history.value = `${history.value}${historyOperation} ${historyCalc} = ${result}`;
  } else if (operation === 'split') {
    const result = lastOperand / parseFloat(inputWindow.value);
    historyCalc = parseFloat(inputWindow.value);
    lastOperand = 0;
    operation = null;
    inputWindow.value = result;
    history.value = `${history.value}${historyOperation} ${historyCalc} = ${result}`;
  }
});
