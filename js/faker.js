let btnGen = document.querySelector("button");
btnGen.addEventListener("click", () => {
  {
    let info = faker.helpers.createCard();

    let {
      name,
      email,
      address: { city, country, zipcode },
    } = info;
    document.querySelector("#name").value = name;
    document.querySelector("#email").value = email;
    document.querySelector("#city").value = city;
    document.querySelector("#zipcode").value = zipcode;
    document.querySelector("#country").value = country;
  }

  async function getFace() {
    let response = await fetch(
      "https://api.generated.photos/api/v1/faces?per_page=1&gender=female&order_by=random",
      {
        method: "GET",
        headers: {
          Authorization: "API-Key Bop3zxuOhLsVtrjuQNrUYg",
        },
      }
    );

    let result = await response.json();
    document.getElementById("myImg").src = result.faces[0].urls[2]["128"];
  }
  getFace();
});
