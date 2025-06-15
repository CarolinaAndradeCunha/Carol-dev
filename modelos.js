 const animar = document.querySelectorAll('.animar');

  function animarAoScroll() {
    const topPage = window.innerHeight * 0.85;
    animar.forEach(el => {
      const posicao = el.getBoundingClientRect().top;
      if (posicao < topPage) {
        el.classList.add('mostrar');
      }
    });
  }

  window.addEventListener('scroll', animarAoScroll);
  window.addEventListener('load', animarAoScroll);

const botaoTopo = document.getElementById('btn-topo');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      botaoTopo.classList.add('mostrar');
    } else {
      botaoTopo.classList.remove('mostrar');
    }
  });

  botaoTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

const botoesVerMais = document.querySelectorAll('.ver-mais');

botoesVerMais.forEach(botao => {
  botao.addEventListener('click', () => {
    const card = botao.closest('.card-projeto');
    const textoCompleto = card.querySelector('.texto-completo');
    textoCompleto.classList.toggle('escondido');
    botao.textContent = textoCompleto.classList.contains('escondido') ? 'Ver mais' : 'Ver menos';
  });
});
