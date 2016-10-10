var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article1 = {
    title: 'Article 1 | sixty nine',
    heading: 'Deprecated Header',
    content: `
            <p>
                s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). 
                s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). 
                s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). 
            </p>
            <p>
                s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). 
                s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). 
                s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). 
            </p>
            `
}

var htmlTemplate = `
    <html>
    <head>
        <title>
           ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="ui/style.css" rel="stylesheet" />
    </head>
    
    <body>
        <nav class="container">
            <a href="/">Home</a>
        </nav>
        <br/>
        <article class="container">
            <h3>
                ${heading}
            </h3>
           
            ${content}
        </article>
    </body>
</html>

`;


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-1.html'));
  //res.send("Article will be uploaded shortly. Lol.");
});

app.get('/article-2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-2.html'));
  //res.send("Article will be uploaded shortly. Lol.");
});

app.get('/article-3', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-3.html'));
//res.send("Article will be uploaded shortly. Lol.");
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
