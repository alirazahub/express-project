const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;


app.use('/static', express.static('static')) 

app.use(express.urlencoded())


app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'template')) 


app.post('/', (req, res)=>{
    name = req.body.name
    subject = req.body.subject
    email = req.body.email
    tele = req.body.tele
    msg = req.body.msg

    let output = `Name is ${name}, Subject of the Quiery is ${subject} , Having Email Address ${email}, and having Telephone ${tele}. His/Her message is  ${msg}`
    fs.writeFileSync('output.txt', output)
    const form = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('index.pug', form);

})

app.get('/', (req, res)=>{
    const title = {'title': 'Ali\'s Project'}
    res.status(200).render('index.pug', title);
})
app.listen(port, ()=>{
    console.log(`The application is started on port ${port}`);
});