const container = document.querySelector(".container");
const card = document.querySelector(".card");
const title = document.querySelector(".title");
const santa = document.querySelector(".santa");
const tree = document.querySelector(".tree");

let isMobile = false;

// Verifica se o dispositivo é um dispositivo móvel
if ('ontouchstart' in window || navigator.maxTouchPoints) {
  isMobile = true;
}

// Função para lidar com o efeito de rotação
const handleRotate = (event) => {
  let x, y;

  if (isMobile) {
    // Para eventos de toque em dispositivos móveis
    x = (innerWidth / 2 - event.touches[0].clientX) / 15;
    y = (innerHeight / 2 - event.touches[0].clientY) / 15;
  } else {
    // Para eventos de mouse em desktop
    x = (innerWidth / 2 - event.pageX) / 15;
    y = (innerHeight / 2 - event.pageY) / 15;
  }

  card.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
};

// Função para lidar com os efeitos do cartão
const handleCardEffects = () => {
  santa.style.transform = "translate3d(0, 0, 160px)";
  title.style.transform = "translate3d(0, 0, 220px)";
  tree.style.transform = "translate3d(0, 0, 160px)";
  card.style.transition = "all 0.1s ease";
};

// Função para retornar o cartão ao estado original
const handleCardBack = () => {
  card.style.transform = "rotateY(0deg) rotateX(0deg)";
  card.style.transition = "all 0.5s ease";
  title.style.transform = "translate3d(0, 0, 0)";
  santa.style.transform = "translate3d(0, 0, 0)";
  tree.style.transform = "translate3d(0, 0, 0)";
};

// Ouvintes de eventos
container.addEventListener(isMobile ? "touchmove" : "mousemove", handleRotate);
container.addEventListener(isMobile ? "touchstart" : "mouseover", handleCardEffects);
container.addEventListener(isMobile ? "touchend" : "mouseout", handleCardBack);

