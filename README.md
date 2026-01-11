# React + Vite
# 🎬 Movie Search App

A modern **React-based Movie Search Application** that allows users to search movies and dynamically filter results using dropdowns.  
The app includes **input validation**, **dropdown-based filtering**, **image & description fallback handling**, and is **deployed live on Vercel**.

---

## 🚀 Live Demo

🔗 **Live App:**  
https://movie-search-app-rho-sepia.vercel.app/

---

## 🛠️ Tech Stack

- ⚛️ **React.js**
- ⚡ **Vite**
- 🎨 **CSS / Tailwind CSS**
- 🌐 **Movie API** (TMDB)
- ☁️ **Vercel** (Deployment)

---

## ✨ Features

- 🔍 Search movies by name
- 🎚️ **Two Dropdown Filters**
  - Filter movies dynamically based on selected options
  - Movies re-render automatically when dropdown values change
- 🚫 **Input validation** (blank search not allowed)
- 🖼️ **Image fallback** if poster image is missing or broken
- 📝 **Description fallback** if movie description is not available
- ⚡ Fast loading with Vite
- 📱 Responsive UI
- 🌐 Live deployed application

---

## 🎚️ Dropdown Filters (Detailed)

The application includes **two dropdown selectors** that allow users to refine movie results.

### 🔹 Dropdown 1: Category / Type Filter
- Example options:
  - Movie
  - Series
  - Episode
- Changing this dropdown immediately updates the movie list.

### 🔹 Dropdown 2: Year / Sort Filter
- Example options:
  - Year
  - Latest
  - Oldest
- Selected option dynamically re-renders movies without page refresh.

📌 **Key Behavior**
- Dropdown change triggers state update
- API is re-called OR filtered data is re-rendered
- UI updates instantly based on selected values

---

## ✅ Input Validation

- If user clicks **Search** with empty input:
  - 🚨 Alert shown: **"Please enter movie name"**
- Prevents unnecessary API calls with blank search

---

## 🖼️ Image Fallback Handling

- If movie poster URL is:
  - missing
  - invalid
  - broken  

➡️ A default placeholder image is displayed automatically.

Example:
https://placehold.co/300x450?text=No+Image

## 📁 Project Structure
src/

├─ components/

│ ├─ Search.jsx

│ ├─ Filters.jsx

│ ├─ Card.jsx

│ └─ Movies.jsx

├─ data/

│ └─ cardData.jsx

├─ App.jsx

├─ main.jsx

└─ index.css