const express = require('express');
const app = express();

//routes

    //GREETINGS
        //Greeting
            // app.get('/greeting', (req, res) => {
            //     res.send('<h1>Hello stranger</h1>');
            // });

        // //Greeting w/ param
            // app.get('/greeting/:name', (req, res) => {
            //     res.send(`<h1>What's up ${req.params.name}</h1>`);
            // });

    //TIP CALCULATOR
        app.get('/tip/:total/:tipPercentage', (req, res) => {
            res.send(`<h1> Your tip is $${req.params.total * (req.params.tipPercentage / 100)}</h1>`);
        });

app.listen(3000, () => {
    console.log('listening');
});