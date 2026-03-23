# 🚗  RentalCar — Car Rental Service

## RentalCar is a modern web application for a car rental company. The project is implemented as a Single Page Application (SPA) based on Next.js, utilizing Server-Side Rendering (SSR), Dynamic Routing, and Global State Management. This architecture allows users to seamlessly browse the vehicle catalog, apply filters based on key parameters, and book selected models with ease.

<p align="center">
  <img src="https://github.com/user-attachments/assets/64448477-ddf9-4dc4-9af9-414d64de1273" " alt="NoteHub App Screenshot" width="450" />
  <br>
  <sub>RentalCar App Screenshot</sub>
</p>
### 🔗 Посилання на проект
## [Live Demo](https://rental-car-eight-flax.vercel.app/) 
## [Backend API Docs](https://car-rental-api.goit.global/api-docs/)
    
## ⚙️ Functional Logic & Features
- 📦 **Server-Side Pagination**: Efficient catalog loading in chunks via the "Load More" button, reducing initial page load time.
- 🔍 **Advanced Backend-Side Filtering**:
  
  - Precise search by Brand.
  - Price-based filtering.
  - Mileage range (From/To) selection.
- 🤔**Logic**: All search parameters are processed on the server to ensure high performance and data accuracy.
- 🧹 **State Synchronization**: Automatic reset of previous search results when applying new filters to prevent data mixing and ensure relevance.
- 🧡 **Favorites System with Persistence**: Users can add vehicles to a personal wishlist.
- 📈 **Implementation**: Synchronized with localStorage via Zustand middleware, ensuring data persists after page refreshes.
- 🔗 **Dynamic Routing**: Utilizes Next.js App Router for individual car pages (/catalog/:id), providing a dedicated space for detailed specifications.
- 📝 **Booking Flow & Validation**: Integrated rental form with client-side validation and instant Toast notifications upon successful submission.
- 📈 **SEO & Performance**: Implementation of dynamic meta-tags for each vehicle to enhance search engine visibility and social sharing.
- 🔢 **UI Data Formatting**: Automated mileage formatting to display clean, readable numbers (e.g., 5 000 km instead of 5000).
    
## 🛠 Tech Stack
  Framework: Next.js 14+ (App Router)  — для швидкого завантаження та SEO.
  Language: TypeScript — для типізації та надійності коду.
  State Management: Zustand — легке та швидке управління глобальним станом.
  Data Fetching: Axios + TanStack Query — для кешування та зручної роботи з API.
  Styling: CSS Modules.
  Deployment: Vercel

## 🛣 Routing Structure
    - / — Home Page: Welcome banner and entry point.
    - /catalog — Catalog Page: Search engine with filters and the car list.
    - /catalog/:id — Details Page: Detailed info and rental form for a specific vehicle.
    
## 🔢 Getting Started (Frontend)
Clone the repository
      
    git clone git@github.com:id753/note_hub_app.git
Install dependencies

     npm install
Environment Variables
Create a .env file in the root directory (use .env.example as a template):

    VITE_API_URL=http://localhost:3000
Run the app

    npm run dev
Open http://localhost:3000 in your browser.

### Контакти

Eugene O. — Junior Frontend Developer

[LinkedIn](https://www.linkedin.com/in/o-eugene/) | [GitHub](https://github.com/id753)
