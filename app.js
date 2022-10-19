const express = require('express');
const http = require('http');

let app = express()
app.get('/api/about', (req, res) => {
	res.sendFile(__dirname + "/views/about.html")
});
app.get('/api/blog', (req, res) => {
	res.sendFile(__dirname + "/views/blog.html")
});

app.get('/api/home', (req, res) => {
	res.sendFile(__dirname + "/views/home.html")
});
const server = http.createServer(app)
server.listen(4000,()=>{console.log(`this site turn on port ${4000}`);})