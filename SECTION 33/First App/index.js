const express = require("express");
const app = express();
console.dir(app)

//app.use((req , res)=>{
//    console.log("We got a new request");
    // res.send("Hello, We got your request this is a response!!");
    //res.send('<h1>This is my Web Page</h1>')
//})

//3000 is a port Number 

/*We will get the concept of Routing*/
app.get('/union',(req,res)=>{
    res.send("UNION")
})
app.get('/sbi',(req,res)=>{
    res.send("SBI")
})
app.get('/',(req,res)=>{
    res.send(" Home Page")
})

//Query Strings
app.get('/search', (req,res)=>{
    const {q} = req.query;
    res.send(`<h3>Search results for : ${q}</h3>`);
})
//* is universal it gives the message if path is not identified
app.get('*',(req,res)=>{
    res.send("I don't know that path.")
})

app.listen(3000, () => {
    console.log("Listening on Port 3000");
})




//Instead of loading server again & again we use NODEMON once it is started then it automatically loads the page.