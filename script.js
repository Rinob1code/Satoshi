
function searchBooks() {
  const input = document.getElementById("search").value.toLowerCase();
  const list = document.getElementById("bookList");
  const books = list.getElementsByTagName("li");

  for (let i = 0; i < books.length; i++) {
    const text = books[i].textContent.toLowerCase();
    books[i].style.display = text.includes(input) ? "" : "none";
  }
}

// Smooth scroll animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
