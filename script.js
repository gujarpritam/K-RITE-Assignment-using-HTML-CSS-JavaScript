// Functionality after clicking on menu
function menu() {
  window.location.href = "page.html";
}

let selectedBrands = 0,
  totalBrands = 0;
let brandList = [
  "wix",
  "shopify",
  "mailchimp",
  "paypal",
  "disney",
  "intercom",
  "google",
  "evernote",
  "microsoft",
  "invision",
];

// Functionality to select individual brand
const brand = Array.from(document.getElementsByClassName("brand"));
brand.forEach((element) => {
  element.onclick = function () {
    if (element.checked === true) {
      selectedBrands++;
    } else if (element.checked === false) {
      selectedBrands--;
    }

    document.querySelector(".selected_brands > span:nth-child(1)").innerHTML =
      selectedBrands;
  };
});

// Functionality to select all brands
const allBrands = document.getElementById("brands");

allBrands.onclick = function () {
  let arr = [];
  if (allBrands.checked === true) {
    selectedBrands = 10;
    arr = brandList.map((brandName) => {
      return (document.getElementById(brandName).checked = true);
    });
  } else if (allBrands.checked === false) {
    selectedBrands = 0;
    arr = brandList.map((brandName) => {
      return (document.getElementById(brandName).checked = false);
    });
  }
  document.querySelector(".selected_brands > span:nth-child(1)").innerHTML =
    selectedBrands;
};

// Implementation of Search functionality
function search() {
  let ans = "";
  let inputValue = document.querySelector(".input_box > input");
  inputValue = inputValue.value.toLowerCase();
  console.log("inputValue", inputValue);

  const checkBoxStatus = document.getElementById(inputValue).checked;
  if (checkBoxStatus === false) {
    document.getElementById(inputValue).checked = true;
    selectedBrands++;
    document.querySelector(".selected_brands > span:nth-child(1)").innerHTML =
      selectedBrands;
  }
}
