const express = require('express');
const app = express();
const path = require ('path');
const port = process.env.PORT || 8000;


const static_path = (path.join(__dirname, "../public")); 


app.set('view engine', 'hbs');
app.use(express .static(static_path));

app.get ("" ,(req,res)=>{
    res.render('index')
})
app.get ("/about/" ,(req,res)=>{
    res.render('about.hbs') 
})
app.get ("/weather/" ,(req,res)=>{
    res.render('weather')
})
app.get ("*" ,(req,res)=>{
    res.render('404error')
})

app.listen(port, ()=>{
    console.log(`listining to port ${port}`)
})
