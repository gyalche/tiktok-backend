import express from "express";
import mongoose from "mongoose";
import Data from './data.js';
import Videos from './dbModel.js';

//app congif
const app=express();
const port=9000;

//midleware
app.use(express.json());
app.use((req, res, next)=>{
    res.setHeader('Acccess-Control-Allow-Origin','*'),
    res.setHeader('Acccess-Control-Allow-Headers','*'),
    next();

})
//DB Config
const connection_url='mongodb+srv://dawasherpa:dawasherpa@cluster0.ym1xq.mongodb.net/tiktokDatabase?retryWrites=true&w=majority'
mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useUnifiedTopology : true
})
//API endpoints
app.get('/',(req, res)=>{
    
    res.status(200).send("hellow world")
});

app.get('/v1/posts', (req, res)=>{
    res.status(200).send(Data);
})

app.get('/v2/posts', (req, res)=>{
    Videos.find((err, data)=>{
        
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data);
        }
   
    })
})

app.post('/v2/posts', (req, res)=>{
    const dbVideos=req.body;
    Videos.create(dbVideos, (err, data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data);
        }
    })
    
})
//imporing dbMOdel

//Listener
app.listen(port, ()=>console.log(`listening on localhost:${port}`));