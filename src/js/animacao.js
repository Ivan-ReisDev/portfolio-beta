/*Efeito no texto*/
window.sr = ScrollReveal({reset: true});

sr.reveal('.animar-left',{
    origin: 'left',
    distance: '40px', 
    duration: 1500,
  });

  sr.reveal('.sobre',{
    origin: 'bottom',
    distance: '180px', 
    duration: 2000,
  });

sr.reveal('.tecnologias-html', {
  origin: 'top',
  distance: '120px',
  duration: 2500,
});

sr.reveal('.tecnologias-javascript', {
    origin: 'right',
    distance: '120px',
    duration: 2500,
  });

  sr.reveal('.tecnologias-python', {
    origin: 'bottom',
    distance: '120px',
    duration: 2500,
  });

  sr.reveal('.tecnologias-css', {
    origin: 'left',
    distance: '120px',
    duration: 2500,
  });

  sr.reveal('.projetos',{
    rotate: {x: 500, y: 0, z:0},
    scale: 0.1,
    easing: 'ease-in',
    duration: 3500,
  });
