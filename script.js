// Atualiza o ano no footer automaticamente (index.html)
const anoSpan = document.getElementById("ano");
if (anoSpan) {
  anoSpan.textContent = new Date().getFullYear();
}

// Suaviza a rolagem para âncoras internas (index.html + servicos.html)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Animação de entrada suave no body (index.html)
window.addEventListener("load", () => {
  document.body.classList.add("pagina-carregada");
});

// Força abrir links externos (http, https, wa.me, mailto) em nova aba (index.html)
document.querySelectorAll('a[href^="http"], a[href^="mailto:"], a[href*="wa.me"]').forEach(link => {
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});

// Efeito hover nos cards (servicos.html)
const cardsServicos = document.querySelectorAll('.card');
cardsServicos.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = 'none';
  });
});

// Botão Voltar ao Topo (servicos.html)
const btnTopo = document.createElement('button');
btnTopo.textContent = '↑';
btnTopo.classList.add('btn-topo');
document.body.appendChild(btnTopo);

Object.assign(btnTopo.style, {
  position: 'fixed',
  bottom: '30px',
  right: '30px',
  padding: '10px 15px',
  fontSize: '18px',
  display: 'none',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: '#e91e63',
  color: '#fff',
  zIndex: '1000',
  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTopo.style.display = 'block';
  } else {
    btnTopo.style.display = 'none';
  }
});

btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Botão raspadinha e mensagem novidade (novidades.html)
const btnRaspadinha = document.getElementById('btn-raspadinha');
const msgNovidade = document.getElementById('msg-novidade');

if (btnRaspadinha && msgNovidade) {
  btnRaspadinha.addEventListener('click', () => {
    // efeito gostoso de clique
    btnRaspadinha.style.transform = 'scale(0.95)';
    setTimeout(() => {
      btnRaspadinha.style.transform = 'scale(1)';
    }, 150);

    // substitui o botão pela mensagem de novidade
    btnRaspadinha.hidden = true;
    msgNovidade.hidden = false;
  });
}

// Filtro de cards por categoria (modelos.html)
document.addEventListener('DOMContentLoaded', () => {
  const botoesFiltro = document.querySelectorAll('.filtro');
  const cardsFiltro = document.querySelectorAll('.card');

  botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
      // Remove classe 'ativo' de todos os botões
      botoesFiltro.forEach(btn => btn.classList.remove('ativo'));
      botao.classList.add('ativo');

      const categoriaSelecionada = botao.getAttribute('data-categoria');

      cardsFiltro.forEach(card => {
        const categoriaCard = card.getAttribute('data-categoria');

        if (categoriaSelecionada === 'todos' || categoriaCard === categoriaSelecionada) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

// Animação de entrada dos cards (projreais.html)
function mostrarCardsProjeto() {
  const cardsProjeto = document.querySelectorAll('.card-projeto');
  cardsProjeto.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('mostrar');
    }, index * 150);
  });
}

// Executa a animação de entrada dos cards quando a página carregar
window.addEventListener('load', mostrarCardsProjeto);
