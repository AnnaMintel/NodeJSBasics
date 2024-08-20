const express = require('express');
const PORT = 3001;

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/user/:username', (req, res) => {
    let data = { username: req.params.username, hobbies: ['football', 'skate'] };
    res.render('user', data); // 
});

app.listen(3001, () => {
    console.log(`Server started: ${PORT}`);
});