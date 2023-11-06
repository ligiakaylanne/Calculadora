function appendNumber(number) {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const targetInput = num1.value ? num2 : num1;
    targetInput.value += number;
  }
  
  function calculateResult() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const operator = document.getElementById('operador').value;
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultField = document.getElementById('resultado');
    const operators = { '+': num1 + num2, '-': num1 - num2, '*': num1 * num2, '/': num2 !== 0 ? num1 / num2 : 'Divisão por zero!' };
    resultField.textContent = operators[operator] || 'Operador inválido';
  }
  