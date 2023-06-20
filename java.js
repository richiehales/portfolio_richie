function projectOne() {
    var x = document.getElementById("project-1-img");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("buttonOne").innerHTML = "Click to close TeaCosy project"; 
    } else {
      x.style.display = "none";
      document.getElementById("buttonOne").innerHTML = "Click to view TeaCosy project";
    }
  }

  function projectTwo() {
    var y = document.getElementById("project-2-img");
    if (y.style.display === "none") {
      y.style.display = "block";
      document.getElementById("buttonTwo").innerHTML = "Click to close Arts project"
    } else {
      y.style.display = "none";
      document.getElementById("buttonTwo").innerHTML = "Click to view Arts project";
    }
  }


