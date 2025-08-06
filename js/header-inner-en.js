document.addEventListener("DOMContentLoaded", function () {
  const pageMapToRussian = {
    "10-commandments-en.html": "10-commandments.html",
    "purpose-en.html": "purpose.html",
    "golden-verses-en.html": "golden-verses.html",
    "prayfrombible-en.html": "prayFromBible.html" // ключ в lower-case
    };
  
  console.log("📄 Все страницы (pageMapToEnglish):", pageMapToRussian);

  const currentPage = window.location.pathname.split("/").pop().toLowerCase();
  const russianVersion = pageMapToRussian[currentPage];

  console.log("Current Page:", currentPage);
  console.log("Русская версия:", russianVersion);

  // Вставляем меню
  const headerElement = document.getElementById("header");
  if (headerElement) {
    headerElement.innerHTML = `
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
            <a href="${russianVersion ? russianVersion : '#'}" ${russianVersion ? '' : 'style="pointer-events: none; opacity: 0.5;"'}>Рус</a>
          </div>
        </div>
      </div>
    `;
  }


});


