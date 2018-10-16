const express = require('express');
const app = express();
const fs = require('fs');

let quotes = fs.readFileSync('./quotes.json');
jsonQuotes = JSON.parse(quotes);
let nQuotes = Object.keys(jsonQuotes.quotes).length;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  let quote = jsonQuotes.quotes[Math.floor(Math.random() * nQuotes)];
  
  res.json({
      quote: quote.quote,
      author: quote.author
  })
})

const port = process.env.PORT || 8080;
app.set('port', port);

app.listen(port, () => {
  console.log(`Server running in : ${port}`);
});