'use strict';

const assignQuote = (quotes) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerHTML = randomQuote.replaceAll('\n','<br />');
    document.getElementById("quote").style.display = 'block';
}

const assignPhoto = (photoDir) => {
    const number = Math.floor(Math.random() * 10) + 1;
    const photoID = number.toString().padStart(3, '0');
    const url = `/img/${photoDir}/${photoID}.jpg`
    const img = document.getElementById('photo')
    img.src=url;
    if (photoDir === 'norm'){
        img.alt='Photo of Norm Peterson, played by George Wendt'
    }
    img.style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    const MODE = Math.random() < 0.5 ? "NORM" : "NOAM";
    const quoteURL = MODE === "NORM" ? 'data/norm-quotes.json' : 'data/noam-quotes.json';
    fetch(quoteURL)
      .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
      .then(assignQuote);

    const photoDir = MODE === "NORM" ? "noam" : 'norm';
    assignPhoto(photoDir);
});
