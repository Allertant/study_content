const express=require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Get Request')
})

app.post('/',(req,res)=>{
    res.send('Post Request')
})

app.listen(80,()=>{
    console.log("server running at http://localhost")
})

