// 3 на 3 - 9


// async function fetchUsers() {
//   try {
//     const res = await fetch('https://dummyjson.com/users');
//     const data = await res.json();
//     renderUsers(data.users.slice(0, 9)); // только 9 пользователей на страницу
//   } catch (error) {
//     console.error('Ошибка загрузки данных:', error);
//   }
// }

// function renderUsers(users) {
//   const container = document.getElementById('users-container');
//   container.innerHTML = ''; // на всякий случай

//   users.forEach(user => {
//     const card = document.createElement('div');
//     card.className = 'card';

//     card.innerHTML = `
//       <h2>${user.firstName} ${user.lastName}</h2>
//       <h3>${user.company?.title || 'Нет данных'}</h3>

//       <div class="icon-text">
//         <img src="icons/icon-phone.svg" alt="phone" />
//         ${user.phone}
//       </div>
//       <div class="icon-text">
//         <img src="icons/icon-email-outline.svg" alt="email" />
//         ${user.email}
//       </div>

//       <div class="company-details">Company Details</div>
//       <div class="icon-text">
//         <img src="icons/icon-home.svg" alt="company" />
//         ${user.company?.name || 'Нет данных'}
//       </div>
//       <div class="icon-text">
//         <img src="icons/icon-people.svg" alt="employees" />
//         Employees: ${Math.floor(Math.random() * 100 + 1)}
//       </div>
//       <div class="icon-text">
//         <img src="icons/icon-pin-outline.svg" alt="location" />
//         Location: ${user.address?.city || 'Нет данных'}
//       </div>
//     `;

//     container.appendChild(card);
//   });
// }

// fetchUsers();










async function fetchUsers() {
  try {
    const res = await fetch('https://dummyjson.com/users');
    const data = await res.json();
    renderUsers(data.users);
  } catch (error) {
    console.error('Ошибка загрузки данных:', error);
  }
}

function renderUsers(users) {
  const container = document.getElementById('users-container');
  users.forEach(user => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h2>${user.firstName} ${user.lastName}</h2>
      <h3>${user.company.title || 'Нет данных'}</h3>

      <div class="icon-text">
        <img src="icons/icon-phone.svg" alt="phone" />
        ${user.phone}
      </div>
      <div class="icon-text">
        <img src="icons/icon-email-outline.svg" alt="email" />
        ${user.email}
      </div>

      <div class="company-details">Company Details</div>
      <div class="icon-text">
        <img src="icons/icon-home.svg" alt="website" />
        ${user.company.name}
      </div>
      <div class="icon-text">
        <img src="icons/icon-people.svg" alt="employees" />
        Employees: ${Math.floor(Math.random() * 100 + 1)}
      </div>
      <div class="icon-text">
        <img src="icons/icon-pin-outline.svg" alt="location" />
        Location: ${user.address.city}
      </div>
    `;
    container.appendChild(card);
  });
}

fetchUsers();


