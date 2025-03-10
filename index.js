const express=require('express');
const app=express();
const port=3001;
const connection=require('./database/db');
const mysql=require('mysql');
const userRoute=require('./Route/userRoute');
app.use(express.json());

app.get('/users',(req,res)=>{
    const sql='select * from users';
    connection.query(sql,(err,result)=>{
        if(err)err;
        res.send(result);
    })
});
app.post('/adduser',(req,res)=>{
    const user=req.body;
    const sql='insert into users set ?';
    connection.query(sql,user,(err,result)=>{
        if(err)err;
        res.send('user added succesfully');
    })
});




app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    const sql='DELETE FROM users WHERE user_id=?';
    connection.query(sql,id,(err,result)=>{
        if(err)err;
        res.send('user delete succesfully');
    })
});



app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});