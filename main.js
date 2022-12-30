const quoteText = document.querySelector('.quote__text');
const author = document.querySelector('.author span');
const btnNewQuote = document.querySelector('.features__new-quote');
const btnSpeak = document.querySelector('.btn-speak');
const btnCopy = document.querySelector('.btn-copy');

btnNewQuote.addEventListener('click', () => {
    btnNewQuote.classList.add('loading');
    btnNewQuote.innerText = 'Loading ...';
    fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => {
            quoteText.innerText = data.content;
            author.innerText = data.author;
            btnNewQuote.innerText = 'New Quote';
            btnNewQuote.classList.remove('loading');
        })
})

btnSpeak.addEventListener('click', () => {
    let speak = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${author.innerText}`);
    speechSynthesis.speak(speak);
})

btnCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(quoteText.innerText);
})

