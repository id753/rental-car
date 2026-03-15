## 🚗  RentalCar — Car Rental Service

### RentalCar — це сучасний веб-додаток для оренди автомобілів в Україні. Проект реалізований як Single Page Application (SPA) на базі Next.js з використанням серверного рендерингу, динамічної маршрутизації та глобального управління станом.

🔗 Посилання на проект
    Live Demo: [rental-car-eight-flax.vercel.app](https://github.com/id753/rental-car)
    Backend API Docs: [GoIT Car Rental API](https://car-rental-api.goit.global/api-docs/#/)
    

🛠 Технологічний стек

    Framework: Next.js (App Router) — для швидкого завантаження та SEO.
    Language: TypeScript — для типізації та надійності коду.
    State Management: Zustand — легке та швидке управління глобальним станом.
    Data Fetching: Axios + TanStack Query — для кешування та зручної роботи з API.
    Styling: CSS Modules.

  📋 Функціонал
    Каталог з пагінацією: Завантаження автомобілів порціями через кнопку "Load More".
    Складна фільтрація (Backend-side):

        Пошук за брендом.
        Фільтрація за ціною.
        Фільтрація за діапазоном пробігу (від/до).

Система "Обране": Можливість додавати авто в список улюблених. Списки зберігаються в localStorage і не зникають після оновлення сторінки.

Детальна сторінка: Динамічні маршрути (/catalog/:id) з повним описом характеристик авто.

Форма бронювання: Реалізована валідація та виведення повідомлення про успішну оренду.

SEO Оптимізація: Динамічні мета-теги для кожної сторінки автомобіля.



🚀 Як запустити локально
    Клонуйте репозиторій:
      
    git clone https://github.com/your-username/rental-car.git
  Перейдіть у папку проекту:
  
    cd rental-car
  Встановіть залежності:
    
    npm install

  Запустіть сервер для розробки:

    npm run dev

    Відкрийте http://localhost:3000 у вашому браузері.

Контакти

Eugene O. — Junior Frontend Developer

[LinkedIn](https://www.linkedin.com/in/o-eugene/) | [GitHub](https://github.com/id753)
