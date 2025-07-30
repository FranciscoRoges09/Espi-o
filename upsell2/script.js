// Timer de 5 minutos
let time = 5 * 60;
const countdown = document.getElementById('countdown');

const timer = setInterval(() => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  countdown.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  time--;
  if (time < 0) clearInterval(timer);
}, 1000);

// Botão de CTA (redirecionamento)
document.getElementById('cta-btn').addEventListener('click', () => {
  window.location.href = "https://seguropagamentos.com.br/PacoteMasterVIP"; // Substituir pelo link real
});
