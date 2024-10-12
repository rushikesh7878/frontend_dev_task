  
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function() {
        const radio = this.querySelector('.radio');
        radio.checked = true;

        // Toggle active class for the selected box and hide others
        document.querySelectorAll('.box').forEach(otherBox => {
            if (otherBox === this) {
                otherBox.classList.add('active');
                otherBox.classList.add('selected'); // Add selected class
            } else {
                otherBox.classList.remove('active');
                otherBox.classList.remove('selected'); // Remove selected class
            }
        });

        // Update total price based on the selected box
        const priceElement = this.querySelector('.current-price');
        const totalPrice = document.getElementById('total-price');
        totalPrice.textContent = `Total : $${priceElement.getAttribute('data-price')} USD`;
    });
});

  