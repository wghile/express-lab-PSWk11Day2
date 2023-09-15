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
        // app.get('/tip/:total/:tipPercentage', (req, res) => {
        //     res.send(`<h1> Your tip is $${req.params.total * (req.params.tipPercentage / 100)}</h1>`);
        // });

    //MAGIC 8 BALL

        const randomResponse = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

        let arrayLength = randomResponse.length - 1

        app.get('/magic/:question', (req, res) => {
            res.send(
                `<h1>Question: ${req.params.question}</h1>
                <h1>Magic 8 Ball: ${randomResponse[Math.floor(Math.random() * (arrayLength + 1))]}</h1>`
            )
        })

app.listen(3000, () => {
    console.log('listening');
});