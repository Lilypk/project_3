let menuBar = document.querySelector('.threelines')
let parent = document.querySelector('.container')
menuBar.addEventListener('mouseover', function() {
    parent.classList.toggle('menudrops')
})

