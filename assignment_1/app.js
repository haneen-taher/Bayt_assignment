//Search bar
const searchIcon = document.querySelector(".search");
const searchBar = document.querySelector(".search-bar");
const closeIcon = document.querySelector(".close-icon");

searchIcon.addEventListener("click", () => {
  searchBar.style.display = "block";
  searchIcon.style.display = "none";
});

closeIcon.addEventListener("click", () => {
  searchBar.style.display = "none";
  searchIcon.style.display = "block";
});

document.addEventListener("click", (event) => {
  if (!searchBar.contains(event.target) && event.target !== searchIcon) {
    searchBar.style.display = "none";
    searchIcon.style.display = "block";
  }
});

// Form submission
function formSubmission() {
  document.getElementById("form").submit();
}
