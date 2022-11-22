const userLang = navigator.language || navigator.userLanguage; 
switch (userLang) {
    case 'es-ES':
        document.getElementById('we6').innerHTML = 'Nos mantenemos en contacto.';
        document.getElementById('you').innerHTML = 'Puedes contactar con nosotros en cualquier momento y resolveremos tus dudas lo antes posible. También te pediremos tus comentarios y expectativas sobre el proceso para ser lo más exactos posible para dar vida a tus ideas.';
        document.getElementById('send').innerHTML = 'Lánzalo y comienza a generar ingresos.';
        document.getElementById('finish').innerHTML = '¡Termina tu proyecto y comienza a vender y conseguir clientes!';
        document.getElementById('getting').innerHTML = 'Ponerse en contacto es fácil';
        document.getElementById('we7').innerHTML = 'Nos pondremos en contacto contigo lo antes posible. No te preocupes.';
        document.getElementById('whats').innerHTML = `What's App Telegram o Signal:`;
        document.getElementById('contact-2').innerHTML = `CONTACTO`;
        break;

    default:
        break;
}
