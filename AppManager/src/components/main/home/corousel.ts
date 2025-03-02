export default function (
  lists: Array<{ title: string; image: string; active: boolean }>,
) {
  return `
    <div id="carouselExampleSlidesOnly" class="carousel carousel-dark  slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        ${lists
          .map(
            (button, i) => `<button 
          type="button" 
          data-bs-target="#carouselExampleSlidesOnly" 
          data-bs-slide-to="${i}" 
          class="${button.active ? "active" : ""}" 
          aria-current="${button.active ? "active" : ""}" 
          aria-label="${button.title}"></button>`,
          )
          .join("")}
      </div>
      <div class="carousel-inner">
            ${
              lists
                ? lists
                    .map(
                      (list) => `
              <div 
                class="carousel-item ${list.active ? "active" : ""}" 
                data-bs-interval="3000"
              >
                <img src="${list.image}" class="d-block w-100" alt="${list.title}">
              </div>
              `,
                    )
                    .join("")
                : ""
            }   
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  `;
}
