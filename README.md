# Full Stack Developer Portfolio - Abhishek Kumar

A premium, production-ready Full Stack Developer Portfolio built with **React (Vite)** on the frontend, **Node.js (Express)** on the backend, and **MongoDB (Mongoose)** for dynamic projects and certifications display.

---

## 📂 Folder Structure

```
My Portfolio/
├── backend/
│   ├── config/          # Database configuration (db.js)
│   ├── controllers/     # Controller logic (projectController, certificationController, contactController)
│   ├── middleware/      # Error handler middleware (errorHandler.js)
│   ├── models/          # Mongoose Schemas (Project, Certification, Contact)
│   ├── routes/          # Express Router endpoints
│   ├── .env             # Local configuration secrets (PORT, MONGO_URI, etc.)
│   ├── .env.example     # Environment template
│   ├── package.json     # Node scripts & dependencies
│   ├── seed.js          # Database seeding script
│   └── server.js        # Server entry file
├── frontend/
│   ├── public/          # Static assets (resume.pdf, icons)
│   ├── src/
│   │   ├── components/  # Layout Sections (Navbar, Hero, About, Skills, Projects, Certifications, Resume, Contact, Footer)
│   │   ├── context/     # ThemeContext (Dark/Light mode)
│   │   ├── services/    # Axios API client calls (api.js)
│   │   ├── App.css      # Style cleanups
│   │   ├── App.jsx      # Main layout router setup
│   │   ├── index.css    # Typography, CSS variables, resets & design tokens
│   │   └── main.jsx     # Vite mount script
│   ├── package.json     # Vite client configuration
│   └── vite.config.js   # Vite config settings
└── README.md            # Setup and deployment documentation
```

---

## ⚡ Setup & Run Locally

### 1. Prerequisites
Ensure you have the following installed on your machine:
* [Node.js](https://nodejs.org/) (v16.x or newer)
* [MongoDB](https://www.mongodb.com/try/download/community) (running locally on port `27017` OR a MongoDB Atlas connection string)

---

### 2. Backend Setup
1. Open a terminal and navigate to the `backend/` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file from the template:
   ```bash
   cp .env.example .env
   ```
   Modify the `.env` file to match your connection details:
   ```env
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/portfolio
   NODE_ENV=development
   ```
4. **Seed the database** (pre-populates your portfolio with custom project & certification data):
   ```bash
   npm run seed
   ```
5. Start the backend development server:
   ```bash
   npm run dev
   ```
   *The backend will be running at: `http://localhost:5000`*

---

### 3. Frontend Setup
1. Open a new terminal and navigate to the `frontend/` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The frontend will be running at: `http://localhost:5173`*

---

## 🚀 Deployment Instructions

### 1. Backend on Render
1. Create a free account on [Render](https://render.com/).
2. Click **New +** and select **Web Service**.
3. Connect your GitHub repository containing the project.
4. Set the following configurations:
   * **Root Directory**: `backend`
   * **Runtime**: `Node`
   * **Build Command**: `npm install`
   * **Start Command**: `npm start`
5. Under **Environment Variables**, add:
   * `MONGO_URI`: Your production MongoDB Atlas URI.
   * `PORT`: `5000`
   * `NODE_ENV`: `production`
6. Click **Deploy Web Service**. Render will build and deploy your Express API. Copy the deployed service URL (e.g., `https://your-backend.onrender.com`).

---

### 2. Frontend on Vercel
1. Create an account on [Vercel](https://vercel.com/).
2. Click **Add New** > **Project** and select your GitHub repository.
3. Set the following configurations:
   * **Root Directory**: `frontend`
   * **Framework Preset**: `Vite`
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`
4. Under **Environment Variables**, add:
   * `VITE_API_URL`: `https://your-backend.onrender.com/api` (the URL of your backend deployed on Render).
5. Click **Deploy**. Vercel will bundle the production React code and serve it.

---

## 📝 Personalizing Your Portfolio
* **Resume**: Replace the file at `frontend/public/resume.pdf` with your actual PDF resume. The download link on the portfolio will fetch it automatically.
* **Seeding Custom Projects/Certs**: Open `backend/seed.js` and add your real academic projects and credentials, then rerun `npm run seed` to update your database.
* **Email & Socials**: Update your email address and profile URLs in `frontend/src/components/Footer/Footer.jsx` and `frontend/src/components/Contact/Contact.jsx`.
