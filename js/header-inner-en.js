document.addEventListener("DOMContentLoaded", function () {
  const pageMap = {
    "10-commandments-en.htmll": "10-commandments.html",
    "purpose-en.html": "purpose.html",
    "golden-verses-en.html": "golden-verses.html",
    "prayFromBible-en.html": "prayFromBible.html"
  };

  const currentPage = location.pathname.split("/").pop();
  const englishVersion = pageMap[currentPage] || "index-en.html";

  document.getElementById("header").innerHTML = `
    <div class="top-bar">
      <div class="top-left">
        <a href="index.html">🏠 Главная</a>
      </div>
      <div>
          <a href="about.html">📄 О сайте</a>
        </div>
      <div class="top-center">
        <a href="#" class="share-button" title="Поделиться"> 
          <img src="images/share.png" alt="Поделиться" width="28">
        </a>
      </div>
      <div class="top-right dropdown">
        <button class="dropbtn">🌐 Language</button>
        <div class="dropdown-content">
          <a href="${englishVersion}" class="lang">English</a>
          <a href="${currentPage}" class="lang">Русский</a>          
        </div>
      </div>
    </div>
  `;
});
