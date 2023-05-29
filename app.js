const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(__dirname , 'index.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about_us.html')
})

app.get('/main', (req, res) => {
    res.sendFile(__dirname + '/main.html')
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html')
})
app.listen(8080, function(err) {
    if (err)
        console.log(err);
    else
        console.log("Server started on port 8080");
});
