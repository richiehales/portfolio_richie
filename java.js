function projectOne() {
    var a = document.getElementById("pojects-selection");
    var b = document.getElementById("buttonOne");
    var x = document.getElementById("project-1-img");
    var y = document.getElementById("buttonTwo");
    var z = document.getElementById("buttonThree");
    if (x.style.display === "none") {
      a.style.flexDirection = "column";
      b.style.width = "15rem";
      b.style.margin = "0 auto";
      b.style.marginBottom = "0.5rem";   
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
      document.getElementById("buttonOne").innerHTML = "Click to close TeaCosy project"; 
    } else {
      if (window.innerWidth < 1000) {
        a.style.flexDirection = "column";
      }
      b.style.width = "13rem";
      b.style.margin = "";
      b.style.marginBottom = ""; 
      x.style.display = "none";
      y.style.display = "block";
      z.style.display = "block";
      document.getElementById("buttonOne").innerHTML = "Click to view TeaCosy project";
    }
  }

  function projectTwo() {
    var a = document.getElementById("pojects-selection");
    var b = document.getElementById("buttonTwo");
    var x = document.getElementById("buttonOne");
    var y = document.getElementById("project-2-img");
    var z = document.getElementById("buttonThree");
    if (y.style.display === "none") {
      a.style.flexDirection = "column";
      b.style.width = "15rem";
      b.style.margin = "0 auto";
      b.style.marginBottom = "0.5rem"; 
      y.style.display = "block";
      x.style.display = "none";
      z.style.display = "none";
      document.getElementById("buttonTwo").innerHTML = "Click to close Arts project"
    } else {
      if (window.innerWidth < 1000) {
        a.style.flexDirection = "column";
      }
      b.style.width = "13rem";
      b.style.margin = "";
      b.style.marginBottom = ""; 
      y.style.display = "none";
      x.style.display = "block";
      z.style.display = "block";
      document.getElementById("buttonTwo").innerHTML = "Click to view Arts project";
    }
  }

  
