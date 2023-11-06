const listingsDiv = document.getElementById("listings");

let stay = "Mumbai";
let checkin = "2024-09-16";
let checkout = "2024-09-17";
let adult = "1";
let children = "0";
let infants = "0";
let pets = "0";
let page = "1";

const url = `https://airbnb13.p.rapidapi.com/search-location?location=${stay}&checkin=${checkin}&checkout=${checkout}&adults=${adult}&children=${children}&infants=${infants}&pets=${pets}&page=${pets}&currency=USD`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9f72019347msh38915cdbf59c937p1d1831jsn1cd0b2dee67b",
    "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
  },
};

async function getData() {
  try {
    const data = await fetch(url, options);
    const result = await data.json();
    addListings(result.results);
    console.log(result.results);
  } catch (err) {
    console.log(err);
  }
}

getData();

function addListings(listingResult) {
  for (let i = 0; i < listingResult.length; i++) {
    console.log("hi");
    const listing = document.createElement("div");
    listing.className = "listing";

    listing.innerHTML = `<div class="listing">
<img
  class="listing-image"
  src=${listingResult[i].images[0]}
  alt=""
  width="100%"
/>
<div class="listing-content">
  <div class="content-header">
    <div class="header-text">
      <h3 class="header-text-first">${listingResult[i].type}</h3>
      <h3 class="header-text-second">${listingResult[i].name}</h3>
    </div>
    <div class="heart">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.9934 9.64436C14.0607 7.48008 10.8377 6.8979 8.41618 8.87972C5.99464 10.8616 5.65372 14.1751 7.55537 16.519L15.9934 24.3334L24.4313 16.519C26.333 14.1751 26.0337 10.8407 23.5705 8.87972C21.1074 6.91874 17.9261 7.48008 15.9934 9.64436Z"
          stroke="#374151"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
  <div class="divider-horizontal"></div>

  <div class="content-details">
    <h3 class="content-aminities1">
      ${listingResult[i].persons} guests · ${listingResult[i].type} · ${
      listingResult[i].beds
    } beds · ${listingResult[i].bathrooms} bath
    </h3>
    <h3 class="content-aminities2">${listingResult[i].previewAmenities[0]} · ${
      listingResult[i].previewAmenities[1]
    }  ${
      listingResult[i].previewAmenities[2] === undefined
        ? ""
        : " · " + listingResult[i].previewAmenities[2]
    }</h3>
  </div>

  <div class="divider-horizontal"></div>

  <div class="content-footer">
    <div class="review">
      <h3 class="review-stars">${listingResult[i].rating}</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M10 3.95825L11.4583 8.54158H16.0417L12.2917 11.4583L13.5417 16.0416L10 13.1249L6.45834 16.0416L7.70834 11.4583L3.95834 8.54158H8.54168L10 3.95825Z"
          fill="#FCD34D"
          stroke="#F59E0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <div class="review-text">(${listingResult[i].reviewsCount} reviews)</div>
    </div>

    <div class="price">
      <h3 class="price-point">$${listingResult[i].price.rate}</h3>
      <h3 class="price-per-night">/night</h3>
    </div>
  </div>
</div>
</div>
`;
    listingsDiv.appendChild(listing);
    const divider = document.createElement("div");
    divider.className = "divider";
    listingsDiv.appendChild(divider);
  }
}
