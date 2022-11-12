'use strict';

const assignQuote = (quotes) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerHTML = randomQuote.replaceAll('\n','<br />');
}

const assignPhoto = () => {
    const number = Math.floor(Math.random() * 10) + 1;
    const photoID = number.toString().padStart(3, '0');
    const url = `/img/noam/${photoID}.jpg`
    document.getElementById('photo').src=url;
}

document.addEventListener("DOMContentLoaded", function() {
    fetch('data/norm-quotes.json')
      .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
      .then(assignQuote);

    assignPhoto();
});
