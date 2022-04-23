// this is a express server !! 

const connectToMongo = require('./db');
const express = require('express')

connectToMongo();

const app = express();
const port = 5000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})


app.use(express.json());

// Available Routes 
app.use('/api/auth' , require('./routes/auth'));
app.use('/api/notes' , require('./routes/notes'));


app.listen(port,() => {
    console.log(`Example app lsitening at https://localhost:${port}`);
})

// // GET method route
// app.get('/', (req, res) => {
//     res.send('GET request to the homepage')
// })
  
// // POST method route
// app.post('/', (req, res) => {
//     res.send('POST request to the homepage')
// })

// app.get('/', (req, res) => {
//     res.send('root')
//   })

// app.get('/about', (req, res) => {
//     res.send('about')
//   })

// app.get('/random.text', (req, res) => {
//     res.send('random.text')
//   })

