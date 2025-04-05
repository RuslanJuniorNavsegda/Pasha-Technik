document.addEventListener("DOMContentLoaded", () => {
  const albums = [
    {
      title: "Крайний случай",
      year: 2020,
      tracks: 14,
      description: "Последний студийный альбом, философское завещание",
    },
    {
      title: "Платина",
      year: 2019,
      tracks: 10,
      description: "Совместный альбом с OG Buda",
    },
    {
      title: "Ультрамарин",
      year: 2018,
      tracks: 12,
      description: "Переиздание дебютного альбома",
    },
  ];

  const discographyGrid = document.querySelector(".discography-grid");

  albums.forEach((album) => {
    const card = document.createElement("div");
    card.className = "album-card";
    card.innerHTML = `
            <h3>${album.title}</h3>
            <p>Год: ${album.year}</p>
            <p>Треков: ${album.tracks}</p>
            <p class="album-description">${album.description}</p>
        `;
    discographyGrid.appendChild(card);
  });

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    document.querySelector(".parallax-header").style.backgroundPositionY = `${
      scrolled * 0.5
    }px`;
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(".album-card, .timeline-event, .quote")
    .forEach((el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
      observer.observe(el);
    });
});
