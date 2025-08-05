  const timerElement = document.getElementById('timer');
  let startTime = Date.now();

  function updateTimer() {
    const elapsed = Date.now() - startTime;
    const hours = String(Math.floor(elapsed / 3600000)).padStart(2, '0');
    const minutes = String(Math.floor((elapsed % 3600000) / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((elapsed % 60000) / 1000)).padStart(2, '0');
    timerElement.textContent = `${hours}:${minutes}:${seconds}`;
  }

  setInterval(updateTimer, 1000);