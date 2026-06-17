# Conceps Backend - Express API

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

## 🔑 How Authentication Works

1. **User registers** → Gets token
2. **User logs in** → Gets token (proves identity)
3. **Include token in requests** → Server verifies you
4. **Protected endpoints** → Require valid token

Example with token:
```
Headers:
Authorization: Bearer eyJhbGc...
```

## 📝 Code Quality Features

✅ **All code is commented** - Every function explains what it does  
✅ **Validation** - Checks data is correct format before saving  
✅ **Error handling** - Catches errors and sends helpful messages  
✅ **Password hashing** - Passwords are never stored as plain text  
✅ **Database models** - Clear structure for data  
✅ **Middleware** - Reusable code for common tasks  

## 🧪 Testing

### Using Postman (recommended for beginners)
1. Download [Postman](https://www.postman.com/downloads/)
2. Open GETTING_STARTED.md
3. Copy example requests into Postman
4. Click Send!

### Using cURL (command line)
See examples in GETTING_STARTED.md

## 📚 Key Files to Understand

**Start here (in order):**
1. `src/server.js` - Where everything starts
2. `src/routes/userRoutes.js` - What endpoints exist
3. `src/controllers/userController.js` - What endpoints do
4. `src/models/User.js` - How data is stored
5. `src/middleware/auth.js` - How authentication works

**All files have detailed comments explaining the code!**

## 🚨 Common Issues

| Problem | Solution |
|---------|----------|
| "MongoDB connection error" | Make sure MongoDB is running or check MONGODB_URI in .env |
| "Port already in use" | Change PORT in .env file |
| "Token verification failed" | Token expired - login again |
| "Validation error" | Check the error message - data format is wrong |

## 🔧 Adding New Features

### Add New Route

1. Create function in `controllers/`
2. Add route in `routes/`
3. Add validation in `validators/` if needed
4. Add model in `models/` if storing new data

All files have examples and comments to guide you!

## 📖 Learning Resources

- **Understand the code**: Every file has comments explaining what it does
- **See examples**: Check GETTING_STARTED.md for API examples
- **Test everything**: Use Postman to test endpoints
- **Read errors**: Error messages tell you what's wrong
- **Check MDN**: Search MDN Web Docs for Node.js/Express info

## 🎓 For 1-2 Year Experience Developers

This project teaches:
- ✅ Express.js basics
- ✅ MongoDB integration
- ✅ JWT authentication
- ✅ Middleware concepts
- ✅ REST API design
- ✅ Error handling
- ✅ Input validation
- ✅ Project organization

Every concept is explained in comments!

## 📝 Npm Scripts

```bash
npm run dev      # Start with auto-reload (development)
npm start        # Start normally (production)
npm test         # Run tests (not configured yet)
```

## 📄 License

ISC

---

**Questions?** Check GETTING_STARTED.md or read the code comments!

