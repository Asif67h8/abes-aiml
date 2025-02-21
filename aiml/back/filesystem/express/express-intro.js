//const express=require('express');
//http://localhost:3000/api?name=rajesh&rollno=220233
import express from 'express';
const app= express();
const port=3000;
app.get('/', (req, res) =>{
    res.send("welcome to express")
});
app.use(express.json());
app.post('/users', (req, res) =>{
    const {name} = req.body;
    res.send(`my name is ${name}`)
});
app.get('/api/:name/:rollno',(req, res)=>{
    try {
        const {name,rollno} = req.params;
        res.send(`welcome ${name} and your roll no. is ${rollno}`);
        
    } catch (error) {
        console.log(`error is: ${error.massage}`)
        
    }
});
/*app.get('/api', (req, res) =>{
   // const {name="guest",rollno= 100} = req.query;
    try {
        const {name,rollno}= req.query;
    if(!name){
        return res.status(400).send("name is required");
    }
    else{
        res.send(`welcome to ABES: ${name} and roll no. id ${rollno}`)
    }
    } catch (error) {
        console.log(error.message)
    }
});*/
app.listen(port,() => {
    console.log(`server is running on port ${port}`);
});
