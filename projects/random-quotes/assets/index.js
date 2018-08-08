const quoteBox = document.getElementById('quote');

function getQuote() {
  // Handles quote fetching and HTML population
  (function () {
    const sauce = 'https://talaikis.com/api/quotes/random/';
    
    fetch(sauce)
      .then(data => data.json())
        .then(quote => {
          quoteBox.innerHTML = `
          <p>"${quote.quote}" &mdash; <span class="author">${quote.author}</span></p>
          `
        });
  })();
  // Handles color change
  (function () {
    const randomNumber = Math.round(Math.random() * 360);
    quoteBox.style.backgroundColor = `hsl(${randomNumber}, 50%, 25%)`;
  })();
}

function getTweet() {
  const tweet = quoteBox.innerText;
  window.open(`https://twitter.com/intent/tweet?text=${tweet.length > 275 ? tweet.slice(0, 275) + ' [...]' : tweet}`);
}

// Listeners for populating page with quotes
window.addEventListener('keyup', function(e){
  if (e.key === 'Enter') getQuote();
});

quoteBox.onclick = getQuote;

// Listeners for Tweeting
window.addEventListener('keyup', function (e){
  if (e.key === 't' || e.key === 'T') getTweet();
});

document.querySelector('body').ondblclick = getTweet;
