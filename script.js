const contactBtn = document.getElementById('btn');

contactBtn.addEventListener('click', function() {
    // Scrolls smoothly to the contact section
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

console.log("Data Science Portfolio Loaded.");