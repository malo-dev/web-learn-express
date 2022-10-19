const express = require('express');


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

app.listen(4000)