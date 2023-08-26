// CompanyName start
const companyName = document.getElementById("companyName");

companyName.addEventListener("mouseenter", () => {
  companyName.style.color = "orange";
});

companyName.addEventListener("mouseleave", () => {
  companyName.style.color = "white";
});
// CompanyName end

// Search Button start
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value;
  alert(`Anda mencari: ${searchTerm}`);
});
// Search Button end
