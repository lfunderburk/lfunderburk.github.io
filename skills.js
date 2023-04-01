document.getElementById("toggleSkills").addEventListener("click", function() {
    var skillsList = document.getElementById("skillsList");
    var toggleButton = document.getElementById("toggleSkills");
  
    if (skillsList.style.display === "none") {
      skillsList.style.display = "block";
      toggleButton.textContent = "Collapse skills";
    } else {
      skillsList.style.display = "none";
      toggleButton.textContent = "Expand skills";
    }
  });
  