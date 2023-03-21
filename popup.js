function capitalizeLetters() {
    let input = document.getElementById("input");
    let text = input.value;
    let output = "";
  
    for (let i = 0; i < text.length; i++) {
      let letter = text.charAt(i);
      if (Math.random() < 0.5) {
        letter = letter.toUpperCase();
      } else {
        letter = letter.toLowerCase();
      }
      output += letter;
    }
  
    input.value = output;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("capitalize-button").addEventListener("click", capitalizeLetters);
  });
  