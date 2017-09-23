const quote = document.getElementById("quote");
const quoteP = document.getElementById("quote_p");
const btn = document.getElementById("btn");

window.addEventListener("load", () => {
  const startRequest = new XMLHttpRequest();
  startRequest.open(
    "GET",
    "https://cors-anywhere.herokuapp.com/https://talaikis.com/api/quotes/random/"
  );
  startRequest.onload = () => {
    const myStartData = JSON.parse(startRequest.responseText);
    quote.style.webkitTransition = 'opacity 1s';
    renderHTML(myStartData);
  };
  startRequest.send();
});

btn.addEventListener("click", () => {
  const myRequest = new XMLHttpRequest();
  myRequest.open(
    "GET",
    "https://cors-anywhere.herokuapp.com/https://talaikis.com/api/quotes/random/"
  );
  myRequest.onload = () => {
    const myData = JSON.parse(myRequest.responseText);
    renderHTML(myData);

    const twitter = document.getElementById("twitter");
    twitter.addEventListener("click", () => {
      window.open(
        `https://twitter.com/intent/tweet?text=${myData.quote} By ${myData.author}`
      );
    });
  };
  myRequest.send();
  quote.value = "";
});

function renderHTML(data) {
  quote.innerHTML = `<p>"${data.quote}"</p>`;
  quoteP.innerHTML = `by ${data.author}`;
}
