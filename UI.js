const url = 'https://developers.zomato.com/documentation#!/common/collections'
let headers = { headers: { 'x-api-key': 'e1d1a4db60a524fc8bf6a94f67d7c8b0' } }
let menuBar = document.querySelector('.threelines')
let parent = document.querySelector('.container')
menuBar.addEventListener('click', function () {
    parent.classList.toggle('menudrops')
})

function getRestaurants() {
    fetch(url, headers)
        .then(res => {
            console.log('hello')
            console.log(res)
            return res.json()
        })
}

