
document.querySelector('.nav-button').addEventListener('click', showMenu)

function showMenu() {
    document.querySelector('.side-bar').classList.toggle("show-side-bar");
}

//get the modal

let modal = document.getElementById('myModal');
let img = document.getElementsByClassName("gallery"); //array of our images
let close = document.getElementById("close") //the close button
let modal_img = document.getElementById("img01") // image modal
let caption = document.getElementById("caption") // get the text caption
let slide_button = document.getElementById("slide") //get the slide button


console.log((document.querySelector('.work')))

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', function(){
        modal.style.display = "block"
        modal_img.src = img[i].src
        caption.innerHTML = img[i].alt
    }) 
   slide_button.addEventListener('click', function (){
        console.log(i)
   })
}


close.addEventListener("click", function(){
    modal.style.display = "none"
})


