const express = require('express');
const app = express();

//routes
    //Greeting
    app.get('/greeting', (req, res) => {
        res.send('<h1>Hello stranger</h1>');
    });

    // //Greeting w/ param
    app.get('/greeting/:name', (req, res) => {
        res.send(`<h1>What's up ${req.params.name}</h1>`);
    });

app.listen(3000, () => {
    console.log('listening');
});