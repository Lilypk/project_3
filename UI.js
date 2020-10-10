const breedURL = 'https://danieledminster.com/dogbreedlist.php'
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
        .then(res => {
            console.log(res)
            for (let i=0; i < 5; i++) {
                //grab a breed
                //create list item
                //innertext 
                //append to ul
                let listItem = document.createElement('li')
                listItem.className = 'breed'
                listItem.innerText = res[i]
                list.appendChild(listItem)

            }
            

        })
}

getDal(breedURL)



