const breedURL = 'https://danieledminster.com/dogbreedlist.php'
const affenURL = 'https://dog.ceo/api/breed/affenpinscher/images'
const afrURL = 'https://dog.ceo/api/breed/African/images'
const airURL = 'https://dog.ceo/api/breed/Airedale/images'
const akiURL = 'https://dog.ceo/api/breed/Akita/images'
const appURL = 'https://dog.ceo/api/breed/Appenzeller/images'
let menuBar = document.querySelector('.threelines')
let parent = document.querySelector('.container')
let list = document.querySelector('.unorderedlist')
let imageplacement = document.querySelector('.imgcontainer')
let imageone = ''
let listItem = []

menuBar.addEventListener('click', function () {
    parent.classList.toggle('menudrops')
})

function getDogList(breedURL) {
    fetch(breedURL)
        .then(res => res.json())
        .then(res => {
            for (let i = 0; i < 5; i++) {
                let listItem = document.createElement('li')
                listItem.className = 'breed'
                listItem.innerText = res[i]
                list.appendChild(listItem)
            }
        })
}
getDogList(breedURL)

function getDogImage(affenURL) {
    fetch(affenURL) 
    .then(res => res.json())
    .then(res => {
        console.log(res)
        for (let i = 0; i < 3; i++) {
            //grab an image
            //create event listener on first list 
            //add image to the text
            //place the image in the center
        
         
          let firstDog = itemList.shift()
          console.log(firstDog)
            
            }
        })
    }

getDogImage(affenURL)

