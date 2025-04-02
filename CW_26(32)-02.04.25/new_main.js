// ========================
// 📄 JS-файл со сниппетами
// ========================

// 1. Базовый fetch с async/await и обработкой ошибок
async function fetchData() {
    try {
      const response = await fetch('https://example.com/api');
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  
  fetchData();
  
  // 2. Задержка через промис
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  
  async function waitAndSay() {
    await delay(2000);
    console.log("⏳ Прошло 2 секунды!");
  }
  
  waitAndSay();
  
  // 3. Promise.all
  const p1 = Promise.resolve("Первый");
  const p2 = Promise.resolve("Второй");
  
  Promise.all([p1, p2])
    .then(results => console.log("✅ Все завершены:", results))
    .catch(err => console.error("❌ Ошибка:", err));
  
  // 4. Promise.allSettled
  Promise.allSettled([
    Promise.resolve("✅ Успех"),
    Promise.reject("❌ Неудача")
  ]).then(results => console.log("🟡 Результаты:", results));
  
  // 5. Promise.race
  const fast = new Promise(resolve => setTimeout(() => resolve("Быстрый!"), 500));
  const slow = new Promise(resolve => setTimeout(() => resolve("Медленный!"), 1500));
  
  Promise.race([fast, slow])
    .then(result => console.log("🏁 Победил:", result));
  
  // 6. Promise.any (только в ES2021+)
  Promise.any([
    Promise.reject("Ошибка"),
    Promise.resolve("Ура! Первый успех!")
  ])
  .then(result => console.log("✨ Первый успешный:", result))
  .catch(err => console.error("Все упали:", err));
  
  // 7. Async-функция возвращает промис
  async function greet() {
    return "Hello from async!";
  }
  
  greet().then(console.log);

  


  