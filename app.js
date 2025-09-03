
const films = [
  "O Senhor dos Anéis: A Sociedade do Anel",
  "A Origem",
  "Forrest Gump",
  "Coringa",
  "Vingadores: Ultimato",
  "O Rei Leão"
]
console.log(films)
let display_filmes = document.getElementById("film-list")
const ads_Element = document.getElementById("ads")

function showFilms(){
    display_filmes.innerHTML = ''

    for(var index = 1; index < films.length;index++){
        display_filmes.innerHTML += `\n<p>${films[index]}</p>`;
    }
    ads_Element.innerHTML = ''
}

function cleanList(){
    display_filmes.innerHTML = ''
    ads_Element.innerHTML = 'A lista está vazia'
}