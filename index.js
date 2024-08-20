const express = require('express');
const PORT = 3001;

const app = express();

app.get('/', (req, res) => {
    res.send('This is home page!');
});

app.get('/about', (req, res) => {
    res.send('This is ABOUT page!');
});

app.get('/user/:name/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}. User name: ${req.params.name}`);
});

app.listen(3001, () => {
    console.log(`Server started: ${PORT}`);
});