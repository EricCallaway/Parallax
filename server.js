const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// Middleware for parsing JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log('Here'); // Does logic on the server
  res.render('index', {title: 'Stock Exchange', name: 'Stock Exchange'});
})

const userRouter = require('./routes/users')
const stockRouter = require('./routes/stocks')

app.use('/users', userRouter)
app.use('/stocks', stockRouter)

app.listen(8001);
