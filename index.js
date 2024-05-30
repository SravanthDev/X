<script>
document.getElementById('contact-button').addEventListener('click', function() {
    // Check if the device is a mobile device
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // If it's a mobile device, initiate saving contact
    if (isMobile) {
        var contactLink = 'tel:8888888888';
        window.open(contactLink, '_blank');
    } else {
        // If it's not a mobile device, redirect to contact page
        window.location.href = 'Contact us';
    }
});
</script>
