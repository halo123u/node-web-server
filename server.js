const express = require('express');

var app = express();

app.get('/', (req,res)=>{
    //res.send('<h1>hello express</h1>');
    res.send({
        name: 'oswaldo',
        likes: [
            'gaming',
            'stuff',

        ]
    })
});

app.get('/about', (req, res)=>{
    res.send('About Page');

});

app.get('/bad', (req, res)=>{
    res.send({
        errorMessage: 'Unable to complete request',
        code: '400'
    });
});
app.listen(3000);