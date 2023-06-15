import './index.css';

export const Banner = () => {
    const bannerSection = document.createElement('section');
    bannerSection.classList.add('banner');
    bannerSection.innerHTML = `
      <div class="container">
        <div class="banner__content">
          <h1>Přijď to ochutnat!</h1>
          <p>Nabízíme kvalitní kávu, útulné prostředí a perfektní servis.</p>
        </div>
      </div>
    `;
    return bannerSection;
  };