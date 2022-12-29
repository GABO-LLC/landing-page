const userLang = navigator.language || navigator.userLanguage; 
switch (userLang) {
    case 'es-ES':
        document.getElementById('home').innerHTML = 'INICIO';
        document.getElementById('contact-2').innerHTML = 'Contacto';
        document.getElementById('getting').innerHTML = 'Ponerse en contacto es fácil';
        document.getElementById('we7').innerHTML = 'Siempre te responderemos lo antes posible. No te preocupes.';
        document.getElementById('whats').innerHTML = `What's App Telegram o Signal:`;
        document.getElementById('contact-2').innerHTML = `CONTACTO`;
        document.getElementById('call').innerHTML = `Aganda una llamada ahora`;
        break;
    default:
        break;
}
