//var express=require('express');
//var database =require('./databas')
import express from 'express';
import database from './databas'

const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.status(200).send("hiii")
});

app.get('/getProduct',(req,res) => {
    let output = database.prototype.getData('myclass');
    res.send(output)
});

app.post('/postProduct',(req,res) => {
    var mydata = {'name':'sai','class':'datascience'}
    let output = database.prototype.postData('myclass',mydata);
    res.send(output)
});

app.listen(port,(err) => {
    console.log(`Serveris running on port ${port}`)
});
