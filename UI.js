let menuBar = document.querySelector('.threelines')
let parent = document.querySelector('.container')
menuBar.addEventListener('click', function() {
    parent.classList.toggle('menudrops')
})

