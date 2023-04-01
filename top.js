  // Go to the top button functionality
  document.getElementById("goToTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  window.onscroll = function() {
    var goToTopButton = document.getElementById("goToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      goToTopButton.style.display = "block";
    } else {
      goToTopButton.style.display = "none";
    }
  };