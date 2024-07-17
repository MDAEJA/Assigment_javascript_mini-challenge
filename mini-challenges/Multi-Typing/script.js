document.addEventListener('DOMContentLoaded', (event) => {
    const text = "Hello, welcome to the typewriter effect demo!";
    const typewriterElement = document.getElementById('typewriter');
    let index = 0;
    const speed = 100; // typing speed in milliseconds
  
    function typeWriter() {
      if (index < text.length) {
        typewriterElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
      }
    }
  
    typeWriter();
  });
  