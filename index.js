document.addEventListener('DOMContentLoaded', function () {
  const characterPreview = document.getElementById('character-preview');
  const optionButtons = document.querySelectorAll('.option-btn');
  const colorOptions = document.querySelectorAll('.color-option');
  const characterImage = document.getElementById('character-image');
  const optionImages = document.querySelectorAll('.option-image');

  // Initialize character elements
  const characterElements = {
    hair: document.getElementById('character-hair'),
    eyes: document.getElementById('character-eyes'),
    ears: document.getElementById('character-ears'),
    mouth: document.getElementById('character-mouth'),
    accessories: document.getElementById('character-accessories')
  };

  // Add event listeners to option buttons
  optionButtons.forEach(button => {
    button.addEventListener('click', function () {
      optionButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      const type = this.getAttribute('data-type');
      showOptions(type);
    });
  });

  // Add event listeners to color options
  colorOptions.forEach(color => {
    color.addEventListener('click', function () {
      const selectedColor = this.getAttribute('data-color');
      characterPreview.className = `${selectedColor} p-4 rounded-lg flex items-center justify-center relative`;
    });
  });

  // Add event listeners to option images
  optionImages.forEach(img => {
    img.addEventListener('click', function () {
      const type = this.getAttribute('data-type');
      const id = this.getAttribute('data-id');
      const src = this.getAttribute('src');
      characterElements[type].src = src;
    });
  });

  // Randomize button logic
document.addEventListener('DOMContentLoaded', function () {
  const characterPreview = document.getElementById('character-preview');
  const optionButtons = document.querySelectorAll('.option-btn');
  const colorOptions = document.querySelectorAll('.color-option');
  const characterElements = {
    hair: document.getElementById('character-hair'),
    eyes: document.getElementById('character-eyes'),
    ears: document.getElementById('character-ears'),
    mouth: document.getElementById('character-mouth'),
    accessories: document.getElementById('character-accessories')
  };
  const optionImages = document.querySelectorAll('.option-image');

  // Show or hide the customization options based on the selected category
  function showOptions(type) {
    document.querySelectorAll('#customize-options > div').forEach(div => {
      div.classList.add('hidden');
    });
    document.getElementById(`${type}-options`).classList.remove('hidden');
  }

  // Add event listeners to option buttons
  optionButtons.forEach(button => {
    button.addEventListener('click', function () {
      optionButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      const type = this.getAttribute('data-type');
      showOptions(type);
    });
  });

  // Add event listeners to color options
  colorOptions.forEach(color => {
    color.addEventListener('click', function () {
      const selectedColor = this.getAttribute('data-color');
      characterPreview.className = `${selectedColor} p-4 rounded-lg flex items-center justify-center relative`;
    });
  });

  // Add event listeners to option images
  optionImages.forEach(img => {
    img.addEventListener('click', function () {
      const type = this.getAttribute('data-type');
      const src = this.getAttribute('src');
      characterElements[type].src = src;
    });
  });

  // Randomize button logic
  document.getElementById('randomize-btn').addEventListener('click', function () {
    // Randomize background color
    const colors = ['bg-gray-400', 'bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-yellow-500', 'bg-orange-500'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    characterPreview.className = `${randomColor} p-4 rounded-lg flex items-center justify-center relative`;

    // Randomize other character features
    Object.keys(characterElements).forEach(type => {
      const options = Array.from(document.querySelectorAll(`#${type}-options .option-image`));
      const randomOption = options[Math.floor(Math.random() * options.length)];
      characterElements[type].src = randomOption.getAttribute('src');
    });
  });
});

