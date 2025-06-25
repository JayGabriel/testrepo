const button = document.getElementById("randomButton");
const imageList = document.getElementsByClassName("imageContainer")[0];

initializeMessages

function initializeMessages() {
    
}

function generateNew(imageURL) {
    while (imageList.firstChild) {
        imageList.removeChild(imageList.firstChild)
    }
    const image_element = document.createElement("img");
    image_element.src = imageURL;
    imageList.appendChild(image_element);
}

button.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            generateNew(data.message);
        })
        .catch(error => {
            console.error("Error getting dog message...");
        });
});
