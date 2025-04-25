document.getElementById('btnBusca').addEventListener('click', () => {
    const valorBusca = document.getElementById('campoBusca').value.trim();
    const resultado = document.getElementById('resultadoBusca');
  
    if (valorBusca) {
      resultado.textContent = `Você buscou por: '${valorBusca}'`;
    } else {
      resultado.textContent = '';
    }
  });
  

  const swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  