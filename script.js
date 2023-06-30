// Código JavaScript para o carrossel de depoimentos
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentItem = 0;

// Função para atualizar a classe "active" nos itens do carrossel
function updateCarousel() {
  carouselItems.forEach(item => {
    item.classList.remove('active');
  });

  carouselItems[currentItem].classList.add('active');
}

// Função para exibir o próximo item do carrossel
function nextItem() {
  currentItem++;
  if (currentItem >= carouselItems.length) {
    currentItem = 0;
  }
  updateCarousel();
}

// Função para exibir o item anterior do carrossel
function prevItem() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = carouselItems.length - 1;
  }
  updateCarousel();
}
