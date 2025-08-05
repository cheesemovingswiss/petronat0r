
document.addEventListener('DOMContentLoaded', function() {
  alert('OK');
  let video = document.getElementById('leekVideo');
  if (video) {
    video.play();
  }
  let startTime = Date.now();
  let timerElement = document.getElementById('timer');

  function updateTimer() {
    let elapsed = Date.now() - startTime;
    let seconds = Math.floor((elapsed / 1000) % 60);
    let minutes = Math.floor((elapsed / (1000 * 60)) % 60);
    let hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);

    timerElement.textContent = 
      String(hours).padStart(2, '0') + ':' +
      String(minutes).padStart(2, '0') + ':' +
      String(seconds).padStart(2, '0');

    requestAnimationFrame(updateTimer);
  }

  requestAnimationFrame(updateTimer);
});