const express = require('express'); //$ npm install express -save   done
const app = express();
var bodyParser = require('body-parser') //required to parse information from the html, npm install body-parser -save
var urlencodedParser = bodyParser.urlencoded({ extended: false }) //the function we invoke in middleware to parse our post data
const port = 3000;

app.use(express.static('public'));
app.use(express.static('views'));
// const path = require('path');
// app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile); //$ npm install ejs -save    done
app.use(express.urlencoded()); //allows us to extract info from a html (parse URL-encoded bodies)


app.get('/', (req, res) => {
   res.render("index.html")
});


app.post('/results', urlencodedParser, (req, res) => {
   //let query = req.body;
   res.render("results.html", { data: req.body })
})

app.post('/lucky', (req, res) => {
   res.send("I work")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// public for css js and assets 

//views is for html 