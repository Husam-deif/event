function loadComponents() {
  // This workaround loads the header and the footer,
  // and insert it into the proper divs (based on their IDs)
  // to avoid duplication across multiple pages.

  header = `
    <header>
    <nav>
        <a href="index.html">
            <div class="logo">
                <img src="img2.png" alt="Conference Logo" height="60px">
            </div>
        </a>
        <ul class="main__ul">
            <li><a href="index.html">Home</a></li>
            <li><a href="dates.html">Important Dates</a></li>
           
           
     
         
           
           
        </ul>
    </nav>
    <div id='menu' class='box-icon'><i class='bx bx-menu'></i></div>
    </header>
    `;

  footer = `
    <footer>
        <p>© Copyright 2025. Designed by Hussm Deif Alla </p>
    </footer>
    `;

  document.getElementById("header").innerHTML = header;
  document.getElementById("footer").innerHTML = footer;

  // responsive menu
  document.querySelector("#menu").addEventListener("click", () => {
    document.querySelector("nav ul").classList.toggle("showmenu");
  });
}

window.onload = loadComponents;
