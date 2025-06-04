function mostrarTabela() {
  const tabela = document.getElementById("tabela");
  tabela.style.display = "block";
  tabela.scrollIntoView({ behavior: "smooth" });
}

// Rolagem suave ao clicar nos links do menu
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Mostrar tabela de valores
function mostrarTabela() {
  const tabela = document.getElementById("tabela");
  tabela.style.display = "block";
  tabela.scrollIntoView({ behavior: "smooth" });
}
