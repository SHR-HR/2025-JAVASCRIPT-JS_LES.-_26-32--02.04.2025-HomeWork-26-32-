// // Промис с задержкой — симулирует загрузку данных
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let data = 'Данные успешно загружены';
//       resolve(data);
//     }, 2000);
//   });
  
//   promise
//     .then(data => {
//       console.log("Одиночный промис:", data);
//     })
//     .catch(error => {
//       console.error("Ошибка одиночного промиса:", error);
//     })
//     .finally(() => {
//       console.log("Одиночный промис завершён");
//     });
  
//   // Функция задержки
//   const delay = ms => new Promise(resolve => setTimeout(() => resolve(`Ждал ${ms} мс`), ms));
  
//   // Используем async/await
//   async function fetchAsyncTodos() {
//     await delay(2000);
//     console.log("Данные получены через async/await");
//   }
  
//   fetchAsyncTodos();
  
//   // ===== Дополнительно: Внедрение всех остальных промис-методов =====
  
//   const p1 = delay(1000); // Успешно через 1 сек
//   const p2 = delay(2000); // Успешно через 2 сек
//   const p3 = new Promise((_, reject) => setTimeout(() => reject("Ошибка в p3"), 1500));
  
//   // 1. Promise.all — все должны выполниться
//   Promise.all([p1, p2])
//     .then(results => console.log("✅ Promise.all:", results))
//     .catch(err => console.error("❌ Promise.all ошибка:", err));
  
//   // 2. Promise.allSettled — покажет все результаты
//   Promise.allSettled([p1, p2, p3])
//     .then(results => console.log("🟡 Promise.allSettled:", results));
  
//   // 3. Promise.race — кто первый, тот и победил
//   Promise.race([p1, p2, p3])
//     .then(result => console.log("🏁 Promise.race:", result))
//     .catch(error => console.error("🏁 Promise.race ошибка:", error));
  
//   // 4. Promise.any — первый успешный
//   Promise.any([p3, p2, p1]) // p3 упадёт, но any ждёт успешный p2 или p1
//     .then(result => console.log("✨ Promise.any:", result))
//     .catch(error => console.error("❌ Promise.any ошибка:", error));
  




    // async function fetchData() {
    //     try {
    //       const response = await fetch('https://dummyjson.com/posts');
      
    //       // Проверка на статус ответа
    //       if (!response.ok) {
    //         throw new Error(`Error: ${response.status}`);
    //       }
      
    //       // Парсим JSON
    //       const data = await response.json();
    //       console.log(data);
      
    //     } catch (e) {
    //       // Обработка ошибок
    //       console.error(e);
    //     }
    //   }
      
    //   fetchData();
      




// 📦 Сниппеты JavaScript — Асинхронность, Fetch, Промисы

// 🔹 1. Базовый fetch + async/await + обработка ошибок

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

  

// 🔹 2. Функция с промисом и задержкой (delay)

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function waitAndSay() {
  await delay(2000);
  console.log("⏳ Прошло 2 секунды!");
}

waitAndSay();



// 🔹 3. Promise.all

const p1 = Promise.resolve("Первый");
const p2 = Promise.resolve("Второй");

Promise.all([p1, p2])
  .then(results => console.log("✅ Все завершены:", results))
  .catch(err => console.error("❌ Ошибка:", err));



// 🔹 4. Promise.allSettled

Promise.allSettled([
    Promise.resolve("✅ Успех"),
    Promise.reject("❌ Неудача")
  ]).then(results => console.log("🟡 Результаты:", results));

  

// 🔹 5. Promise.race

const fast = new Promise(resolve => setTimeout(() => resolve("Быстрый!"), 500));
const slow = new Promise(resolve => setTimeout(() => resolve("Медленный!"), 1500));

Promise.race([fast, slow])
  .then(result => console.log("🏁 Победил:", result));



//  🔹 6. Promise.any (ES2021+)

Promise.any([
    Promise.reject("Ошибка"),
    Promise.resolve("Ура! Первый успех!")
  ])
  .then(result => console.log("✨ Первый успешный:", result))
  .catch(err => console.error("Все упали:", err));

  


// 🔹 7. Async-функция возвращает промис (внутри return)

async function greet() {
    return "Hello from async!";
  }
  
  greet().then(console.log);

  








