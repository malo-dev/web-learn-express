const express = require('express')
const app = express()
const pug = require('pug')
app.set('views engine', 'pug')
app.get('/', function (req, res) {
	res.render(
		'sample',
		{title : "pug ", message : "hello world"}
	)
})
app.listen(5000)