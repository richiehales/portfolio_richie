function projectOne() {
    var x = document.getElementById("project-1-img");
    var y = document.getElementById("buttonTwo");
    var z = document.getElementById("buttonThree");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
      document.getElementById("buttonOne").innerHTML = "Click to close TeaCosy project"; 
    } else {
      x.style.display = "none";
      y.style.display = "block";
      z.style.display = "block";
      document.getElementById("buttonOne").innerHTML = "Click to view TeaCosy project";
    }
  }

  function projectTwo() {
    var x = document.getElementById("buttonOne");
    var y = document.getElementById("project-2-img");
    var z = document.getElementById("buttonThree");
    if (y.style.display === "none") {
      y.style.display = "block";
      x.style.display = "none";
      z.style.display = "none";
      document.getElementById("buttonTwo").innerHTML = "Click to close Arts project"
    } else {
      y.style.display = "none";
      x.style.display = "block";
      z.style.display = "block";
      document.getElementById("buttonTwo").innerHTML = "Click to view Arts project";
    }
  }

  
