console.log('Script Connected');

// const box1 = document.getElementById('box1');

// setTimeout(() => {
//   box1.style.boxShadow = "5px 15px 35px white"
// }, 2000);

const box2 = document.getElementById('box2');

const imagems = [
  "/assets/brigadeiro.jpg",
  "/assets/brigadeiro2.jpg",
  "/assets/brigadeiro3.jpg",
  "/assets/brigadeiro4.jpg"
];

let index = 0;

function changeImg() {
  // Aplica a classe fade-out para começar a transição
  box2.classList.add('fade-out');

  setTimeout(() => {
    // Muda a imagem após o fade-out
    box2.style.backgroundImage = `url('${imagems[index]}')`;

    // Remove a classe para fazer o fade-in
    box2.classList.remove('fade-out');

    // Atualiza o índice
    index = (index + 1) % imagems.length;
  }, 500); // Tempo do fade-out antes de trocar a imagem
}

changeImg();
setInterval(changeImg, 4000);

