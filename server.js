const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.end("<h1>Welcome to My Node.js HTTP Server</h1>");
  }

  else if (req.url === "/about") {
    res.end("<h1>About Page</h1><p>This server is built using Node.js HTTP Module.</p>");
  }

  else if (req.url === "/contact") {
    res.end("<h1>Contact Page</h1><p>Email: example@email.com</p>");
  }

  else if (req.url === "/time") {
    res.end(`<h1>Current Time</h1><p>${new Date()}</p>`);
  }

  else if (req.url === "/write") {
    fs.writeFile("data.txt", "Hello from Node.js!", (err) => {
      if (err) {
        res.end("Error writing file");
      } else {
        res.end("File written successfully!");
      }
    });
  }

  else if (req.url === "/read") {
    fs.readFile("data.txt", "utf8", (err, data) => {
      if (err) {
        res.end("Error reading file");
      } else {
        res.end(`<h1>File Content</h1><p>${data}</p>`);
      }
    });
  }

  else {
    res.writeHead(404);
    res.end("<h1>404 - Page Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});