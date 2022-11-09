// We will call pokemon API.
let pokemon = null
const pokemonImage= document.getElementById('pokemon-image')
const pokemonName= document.getElementById('pokemon-name')
const pokemonInfo= document.getElementById('pokemon-info')
const searchBox = document.getElementById("searchBox")
const button = document.getElementById("submit") 




button.addEventListener("click", (e)=>{
    id = searchBox.value
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, {
        method:"GET"
    }).then(res=>res.json().then( data => {
        pokemon = data
        console.log()
        pokemonImage.setAttribute("src",pokemon.sprites.front_default)
        pokemonName.innerText = pokemon.name
        pokemonInfo.innerHTML = `<span id="height">Height: ${pokemon.height * pokemon.weight} </span><span id="weight">Weight: ${pokemon.weight} </span>`
    }))
})


// console.log("Im calling pokemon api")




// console.log(data)

// data.cath(()=> console.log("data"))


// Promise(console.log("Hi"))
// .then(()=>console.log("waiting for her "))
// .cath(()=> console.log("Send a hi"))