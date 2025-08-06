document.addEventListener("DOMContentLoaded", function () {
  // Карта из английских страниц в русские
  const pageMapToRussian = {
    "10-commandments-en.html": "10-commandments.html",
    "purpose-en.html": "purpose.html",
    "golden-verses-en.html": "golden-verses.html",
    "prayFromBible-en.html": "prayFromBible.html",
    "about-en.html": "about.html"
  };

  // Получаем текущее имя файла
  const currentPage = window.location.pathname.split("/").pop();
  
  // Ищем русскую версию страницы
  const russianVersion = pageMapToRussian[currentPage] || null;

  console.log("Текущая страница:", currentPage);
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

  // Активируем кнопку Share (если она есть)
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("share-button")) {
      event.preventDefault();
      if (navigator.share) {
        navigator.share({
          title: document.title,
          url: window.location.href
        });
      } else {
        alert("Sharing not supported in this browser.");
      }
    }
  });
});


