const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/users', function (req, res) {
  res.cookie('testcookie', 'auth', { sameSite: 'none', secure: true})
  // res.cookie('testcookie', 'auth', {domain: '.localtest.me', sameSite: 'strict'})
  // res.cookie('testcookie', 'auth');
//   res.send('Hello Users')
  res.json({ data: 'Hello Users' });
})

app.get('/users/list', function (req, res) {
//   res.send('Hello Users List')
  res.json({ data: 'Hello Users List' });
})

app.listen(3000)
