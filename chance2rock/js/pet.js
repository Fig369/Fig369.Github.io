const products = document.querySelector(".productHolder");

function createCard([img,product,nameText,birthDate,weight,height,coatColor,noseColor]){
    let code = `
    <div class="galleryCard">
    <img src="${img}" alt="${product}" class="card-img-top embed-responsive-21by9">
        <div class="cardText">
            <p class="nameText">${nameText}</p>
            <h2 class="birthDate">${birthDate}</h2>
            <h2 class="weight">Weight: ${weight}</h2>
            <h5>⭐⭐⭐⭐⭐</h5>
            <p class="height">Height: ${height}</p>
            <p class="coatColor"><span>Coat Color:</span>${coatColor}</p>
            <p class="noseColor"><span>Nose Color:</span>${noseColor}</p>
        </div>
    </div`
    ;
    products.innerHTML += code
}

let item1 =["https://drive.google.com/drive/folders/1eZsDGo39_QFpl4fWffa6c7W9bE0Z8giC6Pd7Rf_usqw7gaDsPuMiQAOlj6TgLLC1K11JQwRb",
"Incredibullz Radio AKA Cuba",
"July 7th 2020",
"105 lbs",
"24 Inches",
"Lilac Tri",
"Red",
];

createCard(item1)
createCard(item1)
createCard(item1)
createCard(item1)
createCard(item1)