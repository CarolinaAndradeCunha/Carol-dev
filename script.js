<script>
  // Mostrar tabela de valores ao clicar no botão
  document.getElementById("mostrarTabela").addEventListener("click", function () {
    const tabela = document.getElementById("tabela");

    // Alternar entre mostrar e esconder
    if (tabela.style.display === "none") {
      tabela.style.display = "block";
      tabela.scrollIntoView({ behavior: "smooth" });
      this.textContent = "🔽 Esconder Valores";
    } else {
      tabela.style.display = "none";
      this.textContent = "📊 Consultar Valores";
    }
  });

  // Rolagem suave ao clicar nos links do menu
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
</script>
