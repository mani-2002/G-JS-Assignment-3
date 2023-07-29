function validateInput(input) {
  var value = input.value;
  value = value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
  input.value = value;
}

function validateHour(input) {
  var value = input.value;
  if (value > 23) {
      value = 23;
  }
  value = value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
  input.value = value;
}
function startTimer() {
  var daysInput = document.getElementById("dayss");
  var hoursInput = document.getElementById("hourss");
  var minutesInput = document.getElementById("minutess");
  var secondsInput = document.getElementById("secondss");

  var days = parseInt(daysInput.value) || 0;
  var hours = parseInt(hoursInput.value) || 0;
  var minutes = parseInt(minutesInput.value) || 0;
  var seconds = parseInt(secondsInput.value) || 0;

  var totalSeconds = days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;

  var countdownInterval = setInterval(function() {
    if (totalSeconds <= 0) {
      clearInterval(countdownInterval);
      return;
    }

    totalSeconds--;

    var updatedDays = Math.floor(totalSeconds / (24 * 60 * 60));
    var updatedHours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    var updatedMinutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    var updatedSeconds = totalSeconds % 60;

    daysInput.value = updatedDays.toString().padStart(2, "0");
    hoursInput.value = updatedHours.toString().padStart(2, "0");
    minutesInput.value = updatedMinutes.toString().padStart(2, "0");
    secondsInput.value = updatedSeconds.toString().padStart(2, "0");
  }, 1000);
  
  var pauseButton = document.getElementById("pauseButton");
  pauseButton.addEventListener("click", function() {
    clearInterval(countdownInterval);
  });
  
  var resetButton = document.getElementById("resetButton");
  resetButton.addEventListener("click", function() {
    clearInterval(countdownInterval);
    daysInput.value = "00";
    hoursInput.value = "00";
    minutesInput.value = "00";
    secondsInput.value = "00";
  });
}
