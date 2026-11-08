# ApiMove – Movies & TV Shows Explorer

A responsive Angular application that fetches and displays trending movies and TV shows using **The Movie Database (TMDB) API**. The application provides a simple interface for exploring daily trending content through visually organized movie cards.

## ✨ Features

- **Trending Content:** Fetches daily trending movies and TV shows from TMDB.
- **Dynamic Content:** Retrieves and displays data directly from the API.
- **Movie Cards:** Displays posters, titles, and brief descriptions.
- **Movies & TV Shows:** Supports both movie titles and TV show names.
- **Responsive Layout:** Uses Bootstrap's grid system for different screen sizes.
- **Dark Theme:** Custom dark styling with contrasting colors.
- **Reusable API Service:** Separates HTTP requests from component logic.
- **Standalone Components:** Uses Angular's standalone component architecture.

## 🛠️ Technologies Used

- **Angular 20** – Frontend framework.
- **TypeScript** – Application logic and type safety.
- **Bootstrap 5** – Responsive layouts and UI components.
- **Custom CSS** – Application-specific styling.
- **Font Awesome 7** – Icon library.
- **Angular HttpClient** – HTTP communication with TMDB.
- **RxJS** – Asynchronous data handling using Observables.
- **TMDB API** – Movie and TV show data provider.

## 🏗️ Application Structure

```text
Api-Move/
│
├── public/ 
│
├── src/
│   ├── app/
│   │   ├── home/
│   │   │   ├── home.ts
│   │   │   ├── home.html
│   │   │   └── home.css
│   │   │
│   │   ├── app.ts
│   │   ├── app.html
│   │   ├── app.css
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   ├── imovies.ts
│   │   └── movies.ts
│   │
│   ├── index.html
│   └── styles.css
│
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## 🔄 How It Works

1. The Home component initializes and requests trending content when the application loads.
2. The `Imovies` service sends an HTTP GET request to the TMDB API.
3. RxJS handles the asynchronous API response.
4. The returned movie and TV show data is stored in the component.
5. Angular dynamically renders the results using the `@for` control flow.
6. Movie posters are loaded using their TMDB image paths.

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- Angular CLI (optional, can use `npx`)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/joo877/Api-Move.git
```

2. Navigate to the project directory:

```bash
cd Api-Move
```

3. Install dependencies:

```bash
npm install
```

### Run Development Server

```bash
npm start
```

Open your browser and navigate to:

```text
http://localhost:4200/
```

The application will automatically reload when source files change.

### Production Build

```bash
npm run build
```

The generated production files will be available in the `dist/` directory.

### Run Tests

```bash
npm test
```

## 🔑 API Configuration

This application uses the TMDB API to retrieve trending movies and TV shows.

API endpoint:

```text
https://api.themoviedb.org/3/trending/all/day
```

An API key is required to access TMDB services.

**Security Note:** Configure your API key outside the source code before publishing or deploying the application. Avoid exposing API credentials in public repositories.

## 📚 Learning Outcomes

This project demonstrates practical experience with:

- Angular Standalone Components.
- Dependency Injection.
- Angular Services.
- HTTP requests using HttpClient.
- RxJS Observables and subscriptions.
- TypeScript interfaces.
- Angular template control flow.
- Consuming third-party REST APIs.
- Responsive UI development.

## 👨‍💻 Author

**Youssef Said**

- GitHub: [@joo877](https://github.com/joo877)
