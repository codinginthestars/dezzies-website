// Light/Dark Theme
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const mode = document.body.classList.contains('dark-mode') ? 'Light' : 'Dark';
    themeToggle.textContent = mode;
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
        modal.classList.add('show');
        document.body.classList.add('modal-open');
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});
closeModal.addEventListener('click', closeWithAnimation);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        closeWithAnimation();
    }
});

function closeWithAnimation() {
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.classList.remove('modal-open');


    setTimeout(() => {
        modal.classList.remove('hide');
        modal.style.display = 'none';
    }, 300);
};

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('show')) {
        closeWithAnimation();
    }
})