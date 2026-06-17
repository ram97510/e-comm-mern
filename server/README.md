# E-Commerce server - Express API

A beginner-friendly Express.js API with MongoDB, JWT authentication, and clear code comments.

**Perfect for learning: All code is commented to explain what's happening!**

## ⚡ Quick Start (2 minutes)

```bash
# 1. Install dependencies
npm install

# 2. Make sure MongoDB is running
# (or update MONGODB_URI in .env to your MongoDB connection)

# 3. Start the server
npm run dev
```

Server runs at: `http://localhost:3000`

## 📁 Project Structure

Every folder has a specific job:

```
src/
├── config/          → Configuration (database, constants)
├── controllers/     → Business logic (what happens in routes)
├── middleware/      → Functions that run before routes
├── models/          → Database structure (what data looks like)
├── routes/          → API endpoints (the URLs you call)
├── utils/           → Helper functions (reusable code)
└── validators/      → Input validation (check if data is correct)
```

**Read [GETTING_STARTED.md](GETTING_STARTED.md) for a detailed beginner guide!**

## 🔗 API Endpoints

### Register & Login (No token needed)
- `POST /api/users/register` → Create new account
- `POST /api/users/login` → Get access token

### User Profile (Token required)
- `GET /api/users/profile` → Get your profile
- `PUT /api/users/profile` → Update your profile

### Health Check (Always works)
- `GET /api/health` → Check if server is running

**See [GETTING_STARTED.md](GETTING_STARTED.md) for testing examples!**

## 🛠️ Installation & Setup

### 1. Environment Setup

Create `.env` file in root folder:
```env
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/conceps_backend
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d
BCRYPT_SALT_ROUNDS=10
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup MongoDB

**Option A: Local MongoDB**
- Install MongoDB locally
- Start MongoDB service
- Connection will work automatically

**Option B: MongoDB Atlas (Cloud)**
- Go to mongodb.com/cloud
- Create free account
- Create cluster
- Copy connection string
- Paste into MONGODB_URI in .env

### 4. Start Server

Development (auto-restarts on code changes):
```bash
npm run dev
```

Production:
```bash
npm start
```
server deployed url :
https://e-comm-mern-d0es.onrender.com

## 📝 Npm Scripts

```bash
npm run dev      # Start with auto-reload (development)
npm start        # Start normally (production)
npm test         # Run tests (not configured yet)
```



