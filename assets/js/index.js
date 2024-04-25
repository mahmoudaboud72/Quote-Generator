
let quote = document.getElementById("quote")
let author = document.getElementById("author")
let api_Link = "https://api.quotable.io/random"


async function getQuote(url){
    let response = await fetch(url)
    var data = await response.json()
    quote.innerText = data.content
    author.innerText = data.author
}

function tweetQuote(){
    window.open('https://twitter.com/intent/tweet?text="'+ quote.innerText +'"' , "tweet window")
}