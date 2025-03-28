// Script for toggling quotes' visibility
document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.quote-toggle');
  
    toggleButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const quoteContent = button.nextElementSibling;
        if (quoteContent.style.display === 'block') {
          quoteContent.style.display = 'none';
        } else {
          quoteContent.style.display = 'block';
        }
      });
    });
  });
  