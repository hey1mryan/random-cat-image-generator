let buttonRef = document.getElementById('generateButton');
let catImg = document.getElementById('catImg');

function generateCat(event) {
    event.preventDefault();

    fetch("https://api.thecatapi.com/v1/images/search")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // Assuming the response is an array with one object that contains the URL
        catImg.src = data[0].url;
    });
    catImg.style.width = "250px";
}

buttonRef.addEventListener("click", generateCat);
