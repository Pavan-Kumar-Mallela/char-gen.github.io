document.addEventListener('DOMContentLoaded', function () {
  const characterPreview = document.getElementById('character-preview');
  const optionButtons = document.querySelectorAll('.option-btn');
  const colorOptions = document.querySelectorAll('.color-option');

  // Add event listeners to option buttons
  optionButtons.forEach(button => {
    button.addEventListener('click', function () {
      optionButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      // Here, add logic to switch customization options based on the selected button
    });
  });

  // Add event listeners to color options
  colorOptions.forEach(color => {
    color.addEventListener('click', function () {
      const selectedColor = this.getAttribute('data-color');
      characterPreview.className = selectedColor;
    });
  });

  // Randomize button logic
  document.getElementById('randomize-btn').addEventListener('click', function () {
    const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)].getAttribute('data-color');
    characterPreview.className = randomColor;
  });

  // Download button logic
  document.getElementById('download-btn').addEventListener('click', function () {
    const link = document.createElement('a');
    link.download = 'character.png';
    link.href = document.getElementById('character-image').src;
    link.click();
  });
});
