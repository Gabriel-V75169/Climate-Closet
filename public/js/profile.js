const customizeProfileHandler = async (event) => {
  event.preventDefault();
  //these lines turn the user inputs into const that we can store
  const gender = document.querySelector("#gender").value;
  const season = document.querySelector("#season").value;

  const response = await fetch("/api/customize", {
    method: "POST",
    body: JSON.stringify({
      gender,
      season,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    getProductSuggestions();
    console.log("Save Successful");
  } else {
    alert(response.statusText);
    console.log("failed to update profile");
  }
};
// public/js/profile.js

function getProductSuggestions() {
  const gender = document.getElementById("gender").value;
  const season = document.getElementById("season").value;

  fetch(
    `/product-suggestions?gender=${gender}&season=${season}`,
    function (products) {
      updateProductSuggestions(products);
    }
  );
}

function updateProductSuggestions(products) {
  const suggestionsContainer = $("#outfits .list");
  suggestionsContainer.empty();

  if (products.length > 0) {
    products.forEach((product) => {
      suggestionsContainer.append(`
                <div class="listContainer">
                    <h3>${product.name}</h3>
                    <p>Price: ${product.price}</p>
                    <p>Season: ${product.season}</p>
                    <p>Gender: ${product.gender}</p>
                </div>
            `);
    });
  } else {
    suggestionsContainer.append("<p>No product suggestions available.</p>");
  }
}

document
  .querySelector(".customize-form")
  .addEventListener("submit", customizeProfileHandler);
