const express = require('express');
const PORT = 3001;

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

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

app.post('/check-user', (req, res) => {
    let username = req.body.username;
    if(username == '')
        return res.redirect('/')
    else 
        return res.redirect('/user/' + username)
});

app.listen(3001, () => {
    console.log(`Server started: ${PORT}`);
});