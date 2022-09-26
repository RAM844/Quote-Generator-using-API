let joke = document.getElementById("joke");
let btn = document.getElementById("jokeBtn");
// https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist,sexist



function getJokes(){
   
}

btn.addEventListener("click",() => {
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist,sexist&type=single")
    .then(response =>  response.json())
    .then((data)=> {
        joke.innerHTML= '';
        joke.innerHTML = data.joke;
    })
});