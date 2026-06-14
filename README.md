# Full Stack Developer Portfolio - Abhishek Kumar

A premium, production-ready full stack portfolio built with:
- **Frontend:** React (Vite)
- **Backend:** Node.js (Express)
- **Database:** MongoDB (Mongoose)

> This repo contains both `frontend/` and `backend/`.

---

## 📌 Folder Structure

```text
My Portfolio/
├── backend/            # Express API (projects, certifications, contact)
├── frontend/           # React app (UI + API calls)
└── README.md          # Setup + deployment docs
```

---

## ⚙️ Prerequisites

- Node.js (v16+ recommended)
- MongoDB (local or MongoDB Atlas)

---

## 🧩 Backend Setup (Express)

1. Go to backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

Create `.env` from the template:

```bash
copy .env.example .env
```

Update `.env` with your values (example):

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/portfolio
NODE_ENV=development
```

4. (Optional) Seed the database:

```bash
npm run seed
```

5. Start the backend server:

```bash
npm run dev
```

Backend runs at: `http://localhost:5000` (default).

---

## 🎨 Frontend Setup (React / Vite)

1. Go to frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

Frontend runs at: `http://localhost:5173` (default).

---

## 🚀 Deployment

### Backend Deployment (Render)

1. Create a **Render** account.
2. Create **New +** → **Web Service**.
3. Set:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
4. Add environment variables:
   - `MONGO_URI`
   - `PORT`
   - `NODE_ENV=production`

### Frontend Deployment (Vercel)

1. Create a **Vercel** account.
2. Add new project from this GitHub repo.
3. Set:
   - **Root Directory:** `frontend`
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Ensure your frontend is configured to call the deployed backend:
   - `VITE_API_URL` should point to your backend (e.g. `https://your-backend.onrender.com/api`)

---

## 🔒 Security Note

Do **not** commit real secrets.
- Keep `backend/.env` out of version control.
- Commit only `backend/.env.example`.

---

## 📝 Customization

- **Resume PDF:** replace `frontend/public/resume.pdf`
- **Projects/Certifications data:** update `backend/seed.js` and rerun the seed script.
- **Contact/Social links:** update the relevant components in `frontend/src/components/`.

