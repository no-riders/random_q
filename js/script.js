//jshint esnext: true

(function() {
    const quote = document.getElementById("quote");
    const quoteP = document.getElementById("quote_p");
    const btn = document.getElementById("btn");
    const twitter = document.getElementById("twitter");
    let quoteText = '';
    let author = '';

    if (!('fetch' in window)) {
        console.log('Fetch API is not supported by Your Browser');
        return;
    }

    function renderHTML(data) {
        quote.innerHTML = `<p>"${data.quote}"</p>`;
        quoteP.innerHTML = `by ${data.author}`;
        quoteText = data.quote;
        author = data.author;
    }

    function onError(error) {
        console.log('Oops, looks like an ' + error);
    }

    function validate(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    function getJSON(result) {
        return result.json();
    }

    function fetchQuote() {
        fetch('https://cors-anywhere.herokuapp.com/https://talaikis.com/api/quotes/random/')
            .then(validate)
            .then(getJSON)
            .then(renderHTML)
            .catch(onError);
    }
    fetchQuote();

    function twit() {
        window.open(
            `https://twitter.com/intent/tweet?text=${quoteText} ${author}`
        );
    }

    btn.addEventListener('click', fetchQuote);

    twitter.addEventListener('click', twit);

})();