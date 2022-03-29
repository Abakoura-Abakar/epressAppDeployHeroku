const express = require('express')


const PORT = process.env.PORT || 5000
const app = express()



app.set('view engine', 'ejs')

app.use(express.static('public'))


//home page presentations
app.get('/', function(req, res){
    res.render('pages/index')
})

//Mes taches
app.get('/_taches', function(req, res){
    res.render('pages/_taches')
})


app.get('/_taches-acheve', function(req, res){
    res.render('pages/_taches-acheve')
})
app.listen(PORT, function(){
    console.log(" is the magic port "+ PORT)
})

