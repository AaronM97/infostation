const express = require('express'); //$ npm install express -save   done
const app = express();
const port = 3000;

app.use(express.static('public'));
app.engine('html', require('ejs').renderFile); //$ npm install ejs -save    done


app.get('/', (req, res) => {
    res.render("index.html")
})

app.post('/results', (req, res) => {
    res.render("results.html")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))