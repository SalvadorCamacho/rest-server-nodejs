require('./config/config')

const express = require('express')
const app = express()

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/usuario', function (req, res) {
    res.send('get en usuario')
})

app.post('/usuario', function (req, res) {
    
    let body = req.body;
     
    if(body.nombre === undefined){
        res.status(400).json({
        ok: false,
        mensaje: 'El nombre es requerido'
      });
    }else{
        res.json({
        persona: body
       })
    }  
    
})

app.put('/usuario/:id', function (req, res) {
    
    let id = req.params.id;

    res.json({
       id
    });
});

app.delete('/usuario', function (req, res) {
    res.send('delete en usuario')
})

app.listen(process.env.PORT, ()=> {
    console.log('trabajando en el puerto: ', process.env.PORT);
})

