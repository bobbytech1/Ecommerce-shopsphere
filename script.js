function countdown() {
    const endDate = new Date('2023-12-31T23:59:59'); // December 31st at 11:59:59 PM
    const now = new Date().getTime();
    const difference = endDate - now;
    const timerElement = document.getElementById('timer');
  
    if (difference <= 0) {
      timerElement.innerHTML = 'Countdown is over!';
    } else {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }
  
  // Update the countdown every second
  setInterval(countdown, 1000);
  

  function customCountdown() {
    const customEndDate = new Date('2023-12-26T23:59:59'); // December 26th at 11:59:59 PM
    const customNow = new Date().getTime();
    const customDifference = customEndDate - customNow;
    const customTimerElement = document.getElementById('countDown');
  
    if (customDifference <= 0) {
      customTimerElement.innerHTML = 'Countdown is over!';
    } else {
      const customDays = Math.floor(customDifference / (1000 * 60 * 60 * 24));
      const customHours = Math.floor((customDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const customMinutes = Math.floor((customDifference % (1000 * 60 * 60)) / (1000 * 60));
      const customSeconds = Math.floor((customDifference % (1000 * 60)) / 1000);
  
      customTimerElement.innerHTML = `${customDays}d ${customHours}h ${customMinutes}m ${customSeconds}s`;
    }
  }
  
  // Update the custom countdown every second
  setInterval(customCountdown, 1000);
  

  document.getElementById("copy").innerHTML = "&copy; " + new Date().getFullYear() + " copyright"
  



  
  
const btn = document.querySelector('#addToCart')
