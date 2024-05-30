function downloadContact() {
    const contactInfo = `BEGIN:VCARD
VERSION:3.0
FN:One Stop Solutions
TEL:+918888888888
END:VCARD`;

    const blob = new Blob([contactInfo], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'OneStopSolutionsContact.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

document.getElementById('contact-button').addEventListener('click', function() {
    downloadContact();
});

