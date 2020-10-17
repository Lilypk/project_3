const breedURL = "https://danieledminster.com/dogbreedlist.php";
const affenURL = "https://dog.ceo/api/breed/affenpinscher/images";
let menuBar = document.querySelector(".threelines");
let parent = document.querySelector(".container");
let list = document.querySelector(".unorderedlist");
let imageplacement = document.querySelector(".imgcontainer");
let imageone = "";
let listItem = [];

menuBar.addEventListener("click", function () {
  parent.classList.toggle("menudrops");
});

function getDogList(breedURL) {
  fetch(breedURL)
    .then((res) => res.json())
    .then((res) => {
      for (let i = 0; i < 5; i++) {
        let listItem = document.createElement("li");

        listItem.className = "breed";
        listItem.innerText = res[i];
        listItem.addEventListener("click", function () {
          let baseURL = `https://dog.ceo/api/breed/${res[i]}/images`;
          getDogImage(baseURL);
        });
        list.appendChild(listItem);
      }
    });
}
getDogList(breedURL);

function getDogImage(affenURL) {
  fetch(affenURL)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      //grab the first three images
      //create event listener on first list
      //add image to the text
      //place the image in the center
      imageplacement.innerHTML = "";
      for (let i = 0; i < 6; i++) {
        let imageOne = document.createElement("img");
        imageOne.setAttribute("src", res.message[i]);
        imageplacement.appendChild(imageOne);
      }
    });
}
