// Open modal with the larger image
function openModal(image) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "flex"; // Show modal
    modalImage.src = image.getAttribute("data-large"); // Use the high-resolution image source
}

// Close modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Hide modal
}

// Close modal if clicking outside the image content
document.getElementById("imageModal").onclick = function(event) {
    if (event.target === this) {
        closeModal();
    }
};
