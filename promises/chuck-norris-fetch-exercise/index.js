const url = 'https://api.chucknorris.io/jokes/random';

const $button = document.querySelector("#button");
const $divWrapp = document.querySelector(".wrapp")


$button.addEventListener("click", function() {

    $divWrapp.innerHTML = "";
    
    fetch(url)
    .then(response => response.json())
    .then(myJson => {
        let joke = myJson.value
        let p = document.createElement("p");
        p.textContent = joke;
        $divWrapp.appendChild(p);
    })
    
    
})