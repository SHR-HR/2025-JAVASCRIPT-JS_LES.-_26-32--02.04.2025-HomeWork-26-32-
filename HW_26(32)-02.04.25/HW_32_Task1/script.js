function printDate() {
    const now = new Date();
    const formatted = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`;
    console.log('Дата:', formatted);
    document.getElementById('date-output').textContent = formatted;
  }
  
  function printSum(a, b) {
    setTimeout(() => {
      const result = a + b;
      console.log('Сумма:', result);
      document.getElementById('sum-output').textContent = result;
    }, 0);
  }
  
  // Выполнение
  printDate();     // сначала синхронно
  printSum(5, 7);  // потом асинхронно

