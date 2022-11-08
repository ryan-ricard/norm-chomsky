'use strict';

const assignQuote = (quotes) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerHTML = randomQuote.replaceAll('\n','<br />');
}

document.addEventListener("DOMContentLoaded", function() {
    fetch('data/norm-quotes.json')
      .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
      .then(assignQuote);
});
