var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-1': {
        title: 'Article 1 | sixty nine',
        heading: 'Deprecated Header 1',
        content: `
                <p>
                    s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). 
                    s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). 
                    s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). 
                </p>
                `
    },
    'article-2': {
        title: 'Article 2 | sixty nine',
        heading: 'Deprecated Header 2',
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
    },
    'article-3': {
        title: 'Article 2 | sixty nine',
        heading: 'Deprecated Header 3',
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
                <p>
                    s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). 
                    s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). 
                    s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). s(ix). 
                </p>
                `
    }
    
}

function createTemplate(data) {
 
    var htmlTemplate = `
        <html>
        <head>
            <title>
               ${data.title}
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
                    ${data.heading}
                </h3>
               
                ${data.content}
            </article>
        </body>
    </html>
    `;
    
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) { // express - ":"
  articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
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
