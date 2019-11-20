const express = require('express'); //$ npm install express -save  
const app = express();
var bodyParser = require('body-parser') 
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 
const port = 3000;

app.use(express.static('public'));
app.use(express.static('views'));

app.engine('html', require('ejs').renderFile); //$ npm install ejs -save   
app.use(express.urlencoded()); 


app.get('/', (req, res) => {
   res.render("index.html")
});


app.post('/results', urlencodedParser, (req, res) => {
   res.render("results.html", {data: req.body})
});

app.post('/lucky', urlencodedParser, (req, res) => {
   res.render("lucky.html", {data: req.body})
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


// public for css js and assets 
//views is for html 