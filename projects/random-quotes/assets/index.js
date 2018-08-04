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

window.addEventListener('keyup', function(e){
  if (e.key === 'Enter') getQuote();
});

quoteBox.onclick = getQuote;