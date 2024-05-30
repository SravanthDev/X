function saveContact(contactNumber) {
    // Check if the device supports sharing via navigator.share
    if (navigator.share) {
        navigator.share({
            title: 'Contact Us',
            text: 'Save our contact number',
            url: `tel:${contactNumber}`
        }).catch(console.error);
    } else {
        // If sharing is not supported, create a temporary input element to copy the number to clipboard
        const tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
        tempInput.value = contactNumber;
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('Contact number copied to clipboard!');
    }
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contact-button').addEventListener('click', function() {
    // You can optionally change the contact number here
    saveContact('8888888888');
});

