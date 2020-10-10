const urlDC = 'https://developers.zomato.com/api/v2.1/cities?q=Washington%2C%20DC&count=1'
let topRest = 'https://developers.zomato.com/api/v2.1/collections?city_id=283'
let headers = { headers: { 'user-key': 'e1d1a4db60a524fc8bf6a94f67d7c8b0' } }
let menuBar = document.querySelector('.threelines')
let parent = document.querySelector('.container')
let list = document.querySelector('.unorderedlist')
let imageplacement = document.querySelector('.imgcontainer')
let imageone = ''
menuBar.addEventListener('click', function () {
    parent.classList.toggle('menudrops')
})

function getRestaurants() {
    fetch(topRest, headers)
        .then(res => res.json())
        .then(res => console.log(res))
}

getRestaurants()

function getFirstImage() {
    let firstimage = document.querySelector('.first')
    // let firstURL = topRest + firstimage 

    fetch(topRest, headers)
    .then(res => {
        console.log('ugh')
        res.json()
    })
    .then(res => {
        // imageone = res[15].topRest
        console.log(res)
    })
}

getFirstImage()

