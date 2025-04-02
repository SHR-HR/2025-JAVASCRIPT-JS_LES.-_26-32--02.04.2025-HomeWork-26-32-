const loginBtn = document.getElementById('login-btn');
const photoContainer = document.getElementById('photo-container');

let isAuthorized = localStorage.getItem('auth') === 'true';

loginBtn.addEventListener('click', () => {
  const login = prompt('Введите логин:');
  if (login && login.trim().toLowerCase() === 'admin') {
    localStorage.setItem('auth', 'true');
    isAuthorized = true;
    alert('Вы авторизованы!');
    loadPhotos();
  } else {
    alert('Неверный логин. Фото будут в плохом качестве.');
    localStorage.setItem('auth', 'false');
    isAuthorized = false;
    loadPhotos();
  }
});

async function loadPhotos() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=9');
      const data = await res.json();
  
      photoContainer.innerHTML = '';
  
      data.forEach(photo => {
        const card = document.createElement('div');
        card.className = 'photo-card';
  
        // Заменим источник на picsum.photos с разным размером для качества
        const imgSrc = isAuthorized
          ? `https://picsum.photos/id/${photo.id}/600/400`
          : `https://picsum.photos/id/${photo.id}/150/100`;
  
        card.innerHTML = `
          <img src="${imgSrc}" alt="${photo.title}">
          <p>${photo.title}</p>
        `;
        photoContainer.appendChild(card);
      });
  
    } catch (err) {
      console.error('Ошибка загрузки фото:', err);
    }
  }
  
// Загружаем фото при открытии страницы
loadPhotos();