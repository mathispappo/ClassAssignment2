const express  = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
})

app.listen(port, () => {
    console.log(`Example app lostening on port ${port}`);
})
