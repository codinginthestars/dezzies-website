// Light/Dark Theme
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const mode = document.body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
    themeToggle.textContent = `Switch to ${mode}`;
});

// Modal Gallery
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close-modal');
const galleryImages = document.querySelectorAll('.gallery-grid img');

galleryImages.forEach((img) => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = img.src;
    });
});

