document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");
  
    for (const link of links) {
      link.addEventListener("click", smoothScroll);
    }
  
    function smoothScroll(event) {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href");
      window.scrollTo({
        top: document.querySelector(targetId).offsetTop,
        behavior: "smooth"
      });
    }
  });
  