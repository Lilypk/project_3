const breedURL = 'https://dog.ceo/api/breeds/list/all'
const dalURL = 'https://dog.ceo/api/breed/Dalmatian/images/random'
let menuBar = document.querySelector('.threelines')
let parent = document.querySelector('.container')
let list = document.querySelector('.unorderedlist')
let imageplacement = document.querySelector('.imgcontainer')
let imageone = ''
let buttons = document.querySelector('li')
menuBar.addEventListener('click', function () {
    parent.classList.toggle('menudrops')
})

function getDal(breedURL) {
    fetch(breedURL)
        .then(res => res.json())
        .then(res => console.log(res))
}

getDal(breedURL)



