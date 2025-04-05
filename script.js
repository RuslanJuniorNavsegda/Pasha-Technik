document.addEventListener("DOMContentLoaded", () => {
  const albums = [
    {
      title: "Статистика гуся, Часть 2",
      year: 2017,
      tracks: 15,
      description: "Легендарно",
    },
    {
      title: "Что-то с чем-то",
      year: 2023,
      tracks: 16,
      description: "Легендарно",
    },
    {
      title: "Порядочный",
      year: 2022,
      tracks: 13,
      description: "Легендарно",
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

  function createEmojiRain() {
    const emojis = ["🌹", "🥀", "💮", "🌸", "💐"];
    const container = document.createElement("div");
    container.className = "emoji-rain";

    for (let i = 0; i < 50; i++) {
      const emoji = document.createElement("div");
      emoji.className = "emoji-item";
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.left = `${Math.random() * 100}%`;
      emoji.style.animationDuration = `${Math.random() * 3 + 2}s`;
      emoji.style.animationDelay = `${Math.random() * 2}s`;
      container.appendChild(emoji);
    }

    document.body.appendChild(container);

    setTimeout(() => {
      container.remove();
    }, 5000);
  }

  document
    .querySelector(".rain-button")
    .addEventListener("click", createEmojiRain);

  function adjustLayout() {
    const portrait = document.querySelector(".artist-portrait");
    if (window.innerWidth < 768) {
      portrait.style.maxWidth = "300px";
    } else {
      portrait.style.maxWidth = "none";
    }
  }

  window.addEventListener("resize", adjustLayout);
  adjustLayout();
});
