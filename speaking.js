document.getElementById("toggleTable").addEventListener("click", function() {
    var table = document.getElementById("speakingTable");
    var toggleButton = document.getElementById("toggleTable");
  
    if (table.style.display === "none") {
      table.style.display = "table";
      toggleButton.textContent = "Contract list of talks";
    } else {
      table.style.display = "none";
      toggleButton.textContent = "Expand list of talks";
    }
  });
  