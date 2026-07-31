# Basic Node.js HTTP Server

A basic HTTP server built using Node.js core modules without Express.

## Features

- HTTP server using Node.js `http` module
- File writing using `fs.writeFile()`
- File reading using `fs.readFile()`
- Multiple routes handling

## Routes

| Route | Description |
|------|-------------|
| `/` | Home page |
| `/about` | About page |
| `/contact` | Contact page |
| `/time` | Current server time |
| `/write` | Create and write data.txt |
| `/read` | Read file content |

## Run Project

Install dependencies:

```bash
npm install