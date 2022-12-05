const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors());

var count = 0;

app.get('/', function (req, res) {
  count = 0;
  res.send('Hello World')
})

app.get('/users', function (req, res) {
  res.cookie('testcookie', count++, { sameSite: 'none', secure: true})
  res.json({ data: 'Hello Users' });
})

app.get('/users/list', function (req, res) {
  res.json({ data: 'Hello Users List' });
})

app.get('/users2', function (req, res) {
  res.cookie('testcookie2', count++)
  res.json({ data: 'Hello user2' });
})

app.get('/users2/list2', function (req, res) {
//   res.send('Hello Users List')
  res.json({ data: 'Hello user2 List' });
})

app.listen(3000)
