const userLang = navigator.language || navigator.userLanguage; 
switch (userLang) {
    case 'es-ES':
        document.getElementById('contact-btn').innerHTML = 'Contacto';
        document.getElementById('getting').innerHTML = 'Ponerse en contacto es fácil';
        document.getElementById('we7').innerHTML = 'Nos pondremos en contacto contigo lo antes posible. No te preocupes.';
        document.getElementById('whats').innerHTML = `What's App Telegram o Signal:`;
        document.getElementById('contact-2').innerHTML = `CONTACTO`;
        break;

    default:
        break;
}
