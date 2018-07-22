const express = require('express');

const app = express();

const PORT = 3002;

// logger
// all hits
app.use('/', (req, res, next) => {
  console.log(`globalEndPt -> Request Type: ${req.method} Request URL: ${req.originalUrl}`);
  next();
});
// description hits
app.use('/deal/:deal_id/description', (req, res, next) => {
  console.log(`dealEndPt -> Request Type: ${req.method} Request URL: ${req.originalUrl}`);
  next();
});

// respond to global endpoint hits
app.get('/', (req, res) => {
  res.send('Hello World');
});

// respond to description endpoint hits
app.get('/deal/:deal_id/description', function (req, res, next) {
  console.log('dealID:', req.params.deal_id)
  next()
}, function (req, res, next) {
  res.send('Deal Info')
})

// handler for the /user/:id path, which prints the user ID
app.get('/deal/:deal_id/description', function (req, res, next) {
  res.end(req.params.deal_id)
})

app.listen(PORT, () => console.log(`Example app listening on port ${3002}!`));
