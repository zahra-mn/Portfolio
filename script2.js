document
  .getElementById("backToTop")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Enables smooth scrolling
    });
  });

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", function () {
    const url = this.getAttribute("data-url");
    window.location.href = url; // Redirect to project page
  });
});
