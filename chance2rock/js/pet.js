const products = document.querySelector(".productHolder");

function createCard([img,product,nameText,birthDate,weight,height,coatColor,noseColor]){
    let code = `
    <div class="galleryCard">
    <img src="${img}" alt="${product}" class="card-img-top embed-responsive-21by9">
        <div class="cardText">
            <p class="nameText">${nameText}</p>
            <h2 class="birthDate">${birthDate}</h2>
            <h2 class="weight">Weight:${weight}</h2>
            <h5>⭐⭐⭐⭐⭐</h5>
            <p class="height">Height:${height}</p>
            <p class="coatColor"><span>Coat Color:</span>${coatColor}</p>
            <p class="noseColor"><span>Nose Color:</span>${noseColor}</p>
        </div>
    </div>
    `;
    products.innerHTML += code;
}

let item1 =["https://fig369.github.io/chance2rock/images/g-2.jpeg",
"Incredibullz Radio AKA Cuba",
"July 7th 2020",
"105 lbs",
"24 Inches",
"Lilac Tri",
"Red",
];

let item2 =["https://fig369.github.io/chance2rock/images/g-3.jpeg",
"Dog 2",
"April 20th 2020",
"105 lbs",
"24 Inches",
"Ghost Tri",
"Red",
];

let item3 =["https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
"TBD",
"Fall 2022",
"TBD",
"TBD",
"TBD",
"TBD",
];

createCard(item1)
createCard(item2)
createCard(item3)
createCard(item3)
createCard(item3)