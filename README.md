```
```

---

## 🧠 How AI Classification Works

1. User submits a ticket with title & description.
2. Backend sends the description to OpenAI API.
3. AI analyzes the text and returns:
   - Category (Technical / Billing / General etc.)
   - Priority (Low / Medium / High)
   - Suggested Team
4. Backend stores the enriched ticket in MongoDB Atlas.
5. Dashboard updates automatically with latest metrics.

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/shivam5983/ai-support-ticket-routing-system.git
cd ai-support-ticket-routing-system
```

---

### 2️⃣ Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file inside `Backend/`:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
```

Start backend server:

```bash
node server.js
```

Server runs at:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```bash
cd Frontend/ai
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🏗 Architecture Overview

```
React (Vite)
     ↓
Axios API Calls
     ↓
Node.js + Express Backend
     ↓
OpenAI API (AI Classification)
     ↓
MongoDB Atlas (Cloud Database)
```

---

## 🔐 Security Best Practices

- Environment variables stored in `.env`
- `.env` excluded via `.gitignore`
- No sensitive credentials committed
- API key handled securely on backend only

---

## 📊 Dashboard Metrics

The dashboard dynamically displays:

- Total Tickets
- Open Tickets
- High Priority Tickets
- Real-time updates after ticket creation

---

## 🚀 Future Improvements

- Ticket status update (Open / In Progress / Closed)
- Authentication & Authorization
- Admin Panel
- Search & Filter tickets
- Deployment (Render / Vercel / Railway)
- CI/CD Integration

---

## 🧪 Sample Use Case

Example Flow:

1. User submits:
   > "User unable to login after password reset."

2. AI Response:
   - Category → Technical
   - Priority → Medium
   - Assigned Team → Tech Team

3. Ticket saved and displayed instantly on dashboard.

---

## 👨‍💻 Author

**Shivam Verma**  
B.Tech CSE  
Full Stack Developer (MERN)

---

## ⭐ Support

If you found this project useful:

- ⭐ Star the repository
- 🍴 Fork it
- 📢 Share with others

---

## 📜 License

This project is created for learning and demonstration purposes.

---

# 🎯 Project Status

✅ Fully Functional  
✅ AI Integrated  
✅ MongoDB Atlas Connected  
✅ Production-ready structure  
