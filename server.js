const express = require('express');
const hbs = require('hbs');
const host = '0.0.0.0';
const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});
    res.render('home.hbs',{
        pageTitle: 'Home Page',
        welcomeMessage: 'Great to see the welcome message in root page'
    })
});

app.get('/about',(req, res) => {
    // res.send('About Page');
    res.render('about.hbs',{
        pageTitle: 'About Page'
    });
});

app.listen(port, host, function() {
    console.log("Server started......." + "at Port: " + port + " on host: " + host);
});
// app.listen(port);
