const buttons = document.querySelectorAll("[data-carousel-button]");
const slidesContainer = document.querySelector("[data-slides]");
let autoPlayInterval;

// Function to handle slide transition
function changeSlide(offset) {
    const activeSlide = slidesContainer.querySelector("[data-active]");
    let newIndex = [...slidesContainer.children].indexOf(activeSlide) + offset;

    // Wrap around if out of bounds
    if (newIndex < 0) newIndex = slidesContainer.children.length - 1;
    if (newIndex >= slidesContainer.children.length) newIndex = 0;

    slidesContainer.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
}

// Button click event listener
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
        changeSlide(offset);

        // Reset auto-play when user clicks buttons
        resetAutoPlay();
    });
});

// Auto-play function with interval
function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        changeSlide(1); // Change slide every 4 seconds (offset of 1)
    }, 4000); // Adjust time as necessary
}

// Function to reset auto-play timer when user interacts
function resetAutoPlay() {
    clearInterval(autoPlayInterval); // Stop the current auto-play
    startAutoPlay(); // Start the auto-play again
}

// Start auto-play on page load
startAutoPlay();
