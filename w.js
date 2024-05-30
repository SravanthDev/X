function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function saveContact(contactNumber) {
    if (navigator.share) {
        navigator.share({
            title: 'Contact Us',
            text: 'Save our contact number',
            url: `tel:${contactNumber}`
        }).catch(console.error);
    } else {
        const tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
        tempInput.value = contactNumber;
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('Contact number copied to clipboard!');
    }
}

document.getElementById('contact-button').addEventListener('click', function() {
    saveContact('+91 XXXXX XXXXX');
});
