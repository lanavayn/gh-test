document.addEventListener("DOMContentLoaded", function () {
  // Карта из английских файлов в русские
  const pageMapToRussian = {
    "10-commandments-en.html": "10-commandments.html",
    "purpose-en.html": "purpose.html",
    "golden-verses-en.html": "golden-verses.html",
    "prayFromBible-en.html": "prayFromBible.html",
    "about-en.html": "about.html"
  };

  const currentPage = location.pathname.split("/").pop();
  const russianVersion = pageMapToRussian[currentPage];

  document.getElementById("header").innerHTML = `
    <div class="top-bar">
      <div class="top-left dropdown">
        <button class="dropbtn">☰ Select</button>
        <div class="dropdown-content">
          <a href="index-en.html">🏠 Home</a>
          <a href="about-en.html">📄 About</a>
          <a href="#" class="share-button" title="Share">📤 Share</a>
        </div>
      </div>

      <div class="top-right dropdown">
        <button class="dropbtn">🌐 Lang</button>
        <div class="dropdown-content">
          <a href="${currentPage}">Eng</a>
          <a href="${russianVersion || '#'}">Рус</a>
        </div>
      </div>
    </div>
  `;
});


