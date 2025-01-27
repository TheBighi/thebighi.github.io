const textElements = document.querySelectorAll('.text1');
const textSum = document.querySelectorAll('.text2');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

function randomizeText() {
  textElements.forEach(function(element) {
    element.textContent = Math.floor(Math.random() * 100);
  textSum.forEach(function(element) {
    element.textContent = "";
  });
  });
}
function calculateText() {
  let sum = 0;

  // Sum up the values from textElements
  textElements.forEach(function(element) {
    sum += parseInt(element.textContent, 10) || 0;  // Ensure it's a number
  });

  // Set the sum into each of the textSum elements
  textSum.forEach(function(element) {
    element.textContent = sum;
  });
}
  
// Randomize text instantly when the page loads
randomizeText();

button1.addEventListener('click', randomizeText);
button2.addEventListener('click', calculateText);
