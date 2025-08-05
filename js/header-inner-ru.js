document.addEventListener("DOMContentLoaded", function () {
  const pageMap = {
    "10-commandments-en.html": "10-commandments.html",
    "purpose-en.html": "purpose.html",
    "golden-verses-en.html": "golden-verses.html",
    "prayFromBible-en.html": "prayFromBible.html",
    "about-en.html": "about.html"
  };

  const currentPage = location.pathname.split("/").pop();
  const russianVersion = pageMap[currentPage] || currentPage;

  document.getElementById("header").innerHTML = `
    <div class="top-bar">
      <div class="top-left">
        <a href="index.html">🏠 Главная</a>
      </div>
       <div class="top-centre">
        <a href="about.html">📄 О сайте</a>
      </div>
      <div class="top-right">
        <a href="#" class="share-button" title="Поделиться">
          <img src="images/share.png" alt="Поделиться" width="20"> 
        </a>
      </div>
     
    </div>
  `;
});
