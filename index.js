// express
const express = require('express');
const app = express();

app.get('/',(req, res) =>{
    res.send('Hello Word');
});

app.listen(3000,() => {
    console.log('web app is listening! on port 3000');
});

//go to chrome and goto localhost:3000 for a sweet hello world message



// AUG 10th
// app name lets-go-shopping for now 
