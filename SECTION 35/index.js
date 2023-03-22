const express = require('express');
const app = express();
const path  = require('path');

app.use(express.urlencoded({extended :true}))
app.use(express.json())
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

const comments = [
    {
        username: 'Khushal',
        commment: 'Funny'
    },
    {
        username: 'Vishal',
        commment: 'Tempered'
    },
    {
        username: 'Lalit',
        commment: 'Chill'
    },
    {
        username: 'Vinit',
        commment: 'Cars'
    }
]

app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments})
})

app.get('/comments/new',(req,res)=>{
    res.render('comments/new');
})
app.post('/comments',(req,res)=>{
    const {username,commment} = req.body;
    comments.push({username,commment})
    res.send("It worked");
})

app.get('/tacos',(req,res)=>{
    res.send("GET /tacos response")
})

app.post('/tacos',(req,res)=>{
    const {meat , qty } = req.body;
    res.send(`OK,here are your ${qty} ${meat}`)
})

app.listen(3000,()=>{
    console.log("Listening from port 3000");
})