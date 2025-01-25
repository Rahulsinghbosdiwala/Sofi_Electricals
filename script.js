// JavaScript for Sofi Electricals Website

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Dynamic year in the footer
const footer = document.querySelector('footer p');
if (footer) {
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `&copy; ${currentYear} Sofi Electricals. All rights reserved.`;
}

// Display quotation form dynamically
const quotationSection = document.getElementById('quotation');
if (quotationSection) {
    const formHtml = `
        <form id="quotationForm" action="sofielectricals@outlook.com" method="POST" enctype="text/plain">
            <label for="name">Your Name:</label><br>
            <input type="text" id="name" name="name" placeholder="Enter your name" required><br><br>
            <label for="email">Your Email:</label><br>
            <input type="email" id="email" name="email" placeholder="Enter your email" required><br><br>
            <label for="items">Items for Quotation:</label><br>
            <textarea id="items" name="items" placeholder="List the items you need a quotation for" rows="5" required></textarea><br><br>
            <button type="submit">Submit</button>
        </form>
    `;

    quotationSection.innerHTML += formHtml;
}

// Embed map dynamically in the contact section
const contactSection = document.getElementById('contact');
if (contactSection) {
    const mapHtml = `
        <h3>Find Us Here:</h3>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.073196467242!2d74.471189!3d34.1700462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1a78f95519a4d%3A0xdf17b4d5f0d8d40!2sSOFI%20ELECTRICALS!5e0!3m2!1sen!2sin!4v1737726531430!5m2!1sen!2sin" width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;

    contactSection.innerHTML += mapHtml;
}
