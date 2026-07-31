# 🚀 Basic Node.js HTTP Server

A basic HTTP server built using **Node.js Core Modules** without using any external framework like Express.js.

This project focuses on understanding the fundamentals of Node.js, including creating an HTTP server, handling routes, performing file operations, and managing a Node.js project using npm.

---

## 📌 Project Description

This project is a simple backend server created with Node.js.

The server listens for incoming client requests and responds according to different routes. It demonstrates how Node.js can handle requests and perform asynchronous operations using built-in modules.

The project includes:

- HTTP server creation
- Custom routing
- File read/write operations
- Dynamic response generation
- Error handling

---

# ✨ Features

- ✅ Built using Node.js `http` module
- ✅ No Express.js used
- ✅ Multiple route handling
- ✅ File creation and writing using `fs.writeFile()`
- ✅ File reading using `fs.readFile()`
- ✅ Displays current server time dynamically
- ✅ Handles invalid routes with 404 response
- ✅ npm project configuration with `package.json`

---

# 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime environment |
| JavaScript | Programming language |
| HTTP Module | Creating server and handling requests |
| File System Module (fs) | Reading and writing files |
| npm | Package management |

---

# 📂 Project Structure

```
Basic-Node.js-HTTP-server/

│
├── server.js        # Main server file
├── package.json     # Project configuration and npm scripts
├── data.txt         # File used for read/write operations
└── README.md        # Project documentation
```

---

# 🌐 Available Routes

| Route | Description |
|------|-------------|
| `/` | Displays welcome page |
| `/about` | Displays information about the server |
| `/contact` | Displays contact page |
| `/time` | Shows current date and time |
| `/write` | Writes data into data.txt file |
| `/read` | Reads content from data.txt file |
| Any other route | Returns 404 Page Not Found |

---

# ⚙️ How It Works

### 1. HTTP Server

The server is created using Node.js built-in HTTP module.

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
   // Handle requests
});
```

---

### 2. Routing

The server checks the requested URL and sends the appropriate response.

Example:

```
/about
/contact
/time
```

Each route returns different content to the client.

---

### 3. File Handling

The project uses the File System module:

```javascript
const fs = require("fs");
```

### Write File

```javascript
fs.writeFile()
```

Used to create and write data into `data.txt`.

### Read File

```javascript
fs.readFile()
```

Used to read and display file content.

---

# 🚀 Installation & Setup

## Clone Repository

```bash
git clone https://github.com/Sadaf032/Basic-Node.js-HTTP-server-.git
```

---

## Navigate to Project Folder

```bash
cd Basic-Node.js-HTTP-server-
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Server

```bash
npm start
```

---

The server will run on:

```
http://localhost:3000
```

---

# 🧪 Testing Routes

Open your browser and test:

```
http://localhost:3000/
```

```
http://localhost:3000/about
```

```
http://localhost:3000/contact
```

```
http://localhost:3000/time
```

```
http://localhost:3000/write
```

```
http://localhost:3000/read
```

---

# 📚 Learning Outcomes

Through this project, I learned:

- How Node.js creates and handles HTTP servers
- Understanding request and response objects
- How routing works without Express.js
- Working with Node.js core modules
- Performing asynchronous file operations
- Using npm commands and package.json scripts
- Understanding the basics of backend development

---

# 🎯 Project Goals

The main goal of this project was to build a basic backend server using pure Node.js and understand the core concepts before moving towards frameworks like Express.js.

---

# 🔮 Future Improvements

Possible improvements:

- Add Express.js version
- Add REST API endpoints
- Add database integration
- Add middleware handling
- Add frontend interface

---

# 👩‍💻 Author

**Sadaf Kareem**

Software Engineering Student

---

⭐ This project is part of my **Node.js Fundamentals Learning Journey**.
