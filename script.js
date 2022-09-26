let quote = document.getElementById("quote");
let btn = document.getElementById("Btn");
let author = document.getElementById("author");



btn.addEventListener("click",() => {
    fetch("http://api.quotable.io/random")
    .then(response =>  response.json())
    .then((data)=> {
        quote.innerHTML= '';
        quote.innerHTML = `“ ${data.content} ”`;
        author.innerHTML = `by ${data.author}`
        btn.innerText = "Get Another Quote"
    })
});