function loadassets() {
    //alert('sussy baka');
    const ending = document.querySelector(".ending");
    const menu = document.getElementsByClassName("navbar-container")[0];

    fetch('/assets/templates/navbar.html')
      .then(response => response.text())
      .then(data => {
        menu.innerHTML = data;
    });
    
    fetch('/assets/templates/ending.html')
      .then(response => response.text())
      .then(data => {
        ending.innerHTML = data;
    });
}  