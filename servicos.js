// Mostra o botão de WhatsApp ao rolar a página
window.addEventListener("scroll", () => {
  const botaoWpp = document.querySelector(".whatsapp-flutuante");
  if (window.scrollY > 100) {
    botaoWpp.classList.add("mostrar");
  } else {
    botaoWpp.classList.remove("mostrar");
  }
});

// Anima elementos ao rolar
const elementosAnimados = document.querySelectorAll(".animar");

function animarAoScroll() {
  elementosAnimados.forEach((el) => {
    const posicao = el.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    if (posicao < alturaTela - 100) {
      el.classList.add("mostrar");
    }
  });
}

window.addEventListener("scroll", animarAoScroll);

// Rolagem suave ao clicar nos links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute("href"));
    if (destino) {
      destino.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
