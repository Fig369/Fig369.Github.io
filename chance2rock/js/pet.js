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

let item1 =["https://fig369.github.io/chance2rock/images/g-2.jpeg",
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