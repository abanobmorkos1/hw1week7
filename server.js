const express = require("express")
const app = express()

// greetings

app.get('/greeting/:name' , (req , res) => {
    res.send('Wow! Hello there ' + req.params.name)
})

// tip
app.get('/tip/:total/:tipPercentage' ,(req , res) => {
    const total = parseFloat(req.params.total)
    const tipPercentage = parseFloat(req.params.tipPercentage)
    const results = (total * tipPercentage) / 100
    res.send(`${results}`)
})

//Magic 8-ball
app.get('/magic/:id' , (req ,res) => {
    const array = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const random = Math.floor(Math.random() * array.length) 
    const randomItem = array[random]
    res.send(randomItem)
})

// LISTEN
app.listen(3000 , () => {
console.log("listening on port 3000")
})