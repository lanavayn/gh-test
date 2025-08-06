document.addEventListener("DOMContentLoaded", function () {
  const pageMapToEnglish = {
    "10-commandments.html": "10-commandments-en.html",
    "purpose.html": "purpose-en.html",
    "golden-verses.html": "golden-verses-en.html",
    "prayFromBible.html": "prayFromBible-en.html",
    "about.html": "about-en.html"
  };

  const currentPage = location.pathname.split("/").pop();
  const englishVersion = pageMapToEnglish[currentPage] || null;

  console.log("Current Page:", currentPage);
  console.log("English version:", englishVersion);

  document.getElementById("header").innerHTML = `
    <div class="top-bar">
      <div class="top-left dropdown">
        <button class="dropbtn">☰ Выбрать</button>
        <div class="dropdown-content">
          <a href="index.html">🏠 Домой</a>
          <a href="about.html">📄 О нас</a>
          <a href="#" class="share-button" title="Поделиться">📤 Ссылка</a>
        </div>
      </div>
      <div class="top-right dropdown">
        <button class="dropbtn">🌐 Lang</button>
        <div class="dropdown-content">
          ${englishVersion ? `<a href="${englishVersion}">Eng</a>` : `<span style="opacity: 0.5;">Eng</span>`}
          <a href="${currentPage}">Рус</a>
        </div>
      </div>
    </div>
  `;
});
