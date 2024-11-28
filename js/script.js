// Função para ajustar elementos com base no tamanho da janela
function ajustarResponsividade() {
    const largura = window.innerWidth;
  
    const heroSection = document.querySelector('.hero');
    const heroTexto = document.querySelector('.hero h1');
  
    if (largura < 768) {
      // Ajustes para dispositivos menores
      heroSection.style.padding = '20px';
      heroTexto.style.fontSize = '24px';
    } else if (largura < 1200) {
      // Ajustes para tablets
      heroSection.style.padding = '40px';
      heroTexto.style.fontSize = '32px';
    } else {
      // Ajustes para desktops
      heroSection.style.padding = '60px';
      heroTexto.style.fontSize = '48px';
    }
  }
  
  // Chama a função ao carregar a página
  ajustarResponsividade();
  
  // Adiciona um ouvinte para o evento de redimensionamento
  window.addEventListener('resize', ajustarResponsividade);
  