const express = require("express");

const app = express();

app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.engine('html',require('ejs').renderFile);

app.get('input/',function(req,res){res.render('input.html');});
app.use(express.urlencoded({extended:false}));

app.post('input/',function(req,res){
    const text = req.body.text;
    console.log(text);
    res.redirect('/input');
})

app.listen(3000, ()=> {
    console.log('Example app listening on port',3000);
})
