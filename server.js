// const express = require('express');
// const bodyParser = require('body-parser');
// const bcrypt = require ('bcrypt-nodejs');
// var cors = require('cors');
// const knex = require('knex');

// const register = require('./controllers/register');
// const signin = require('./controllers/signin');
// const profile = require('./controllers/profile');
// const image = require('./controllers/image');

// const db = knex({
//     client: 'pg',
//     connection: {
//       host : '127.0.0.1',
//       user : 'postgres',
//       password : 'Ayofe1990',
//       database : 'smart-brain'
//     }
//   });

// const app = express();

// app.use(bodyParser.json());
// app.use(cors());


// app.get('/', (req, res) =>{
//     db.select('*').from('users')
//     .then(datas =>{
//         res.json(datas);
//     })
    
// });

// app.post('/signin', signin.handleSignin(db, bcrypt));
// app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) });
// app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) });
// app.put('/image' , (req, res) => { image.handleImage(req, res, db) });
// app.post('/imageUrl' , (req, res) => { image.handleApiCall(req, res) });

// app.listen(3000, () =>{
//     console.log('app is running on port 3000') 
// })


// /*
// / --> res = this is working
// /signin --> POST = success/fail
// /register --> POST = user
// /profile/:userId --> GET = user
// /image --> PUT --> user

// */

const app = require('http')
    .createServer((req, res) => res.send('oh hi there'));


// const PORT = process.env.PORT
// app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
// });

// console.log(PORT)

const DATABASE_URL = process.env.DATABASE_URL

app.listen(3000, () => {
    console.log(`Server is listening on port ${DATABASE_URL}`);
});

console.log(3000)