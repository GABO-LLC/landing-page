const userLang = navigator.language || navigator.userLanguage; 
switch (userLang) {
    case 'es-ES':
        document.getElementById('title').textContent = 'GABO - desarrollo software';
        document.getElementById('contact-btn').textContent = 'Contacto';
        document.getElementById('start-btn').textContent = 'Empieza ya';
        document.getElementById('it').textContent = 'Es Hora De';
        document.getElementById('START').textContent = 'COMENZAR A CONSTRUIR TU NEGOCIO';
        document.getElementById('and').textContent = 'Y te vamos a ayudar a lograrlo.';
        document.getElementById('get').textContent = 'EMPIEZA AHORA';
        document.getElementById('some').textContent = 'Algunos de nuestros clientes';
        document.getElementById('do').textContent = '¿Tienes una web?';
        document.getElementById('a').innerHTML = `¿Una aplicación móvil? ¿Eccomerce? ¿Portafolio perosnal o landing page de tu negocios con CMS? ¿Un SaaS? ¿O tal vez un PaaS? ¿O te gustaría tener uno pero no tienes presupuesto para que un equipo de desarrolladores le den vida a tu idea?<br>¡Estamos aquí para ayudarte!`;
        document.getElementById('get2').textContent = 'EMPIEZA AHORA';
        document.getElementById('how').textContent = 'Cómo podemos ayudarte';
        document.getElementById('we').textContent = 'Podemos ayudarte a diseñar no solo tu software sino también tu negocio, y brindarte asesoramiento sobre marketing o emprendimiento en lineas generales.';
        document.getElementById('we2').textContent = 'Queremos conocerte';
        document.getElementById('we3').textContent = '¡Queremos conocerte! Necesitamos conocer que necesitas, objetivos y gustos para desarrollar un plan de trabajo y darte los mejores servicios, así como verificar si somos compatibles, si no podemos ayudarte o creemos que necesitarías algo más, telo vamos a decir, no nos gusta hacerte perder el tiempo ni perder el nuestro.';
        document.getElementById('we4').textContent = '¡Te ayudamos a materializar tus sueños!';
        document.getElementById('if').textContent = '¡Si congeniamos empezamos a trabjar juntos!';
        document.getElementById('pause').textContent = 'Para en cualquier momento';
        document.getElementById('do2').textContent = '¿Te gusta cómo trabajamos? ¡Sigamos trabajando! ¿No estás convencido? No te preocupes, puedes buscar desarrolladores en otro lugar y te deseamos lo mejor.';
        document.getElementById('we5').textContent = 'Marcamos la diferencia';
        document.getElementById('always').textContent = 'Siempre comprometidos con tu presupuesto y plazos.';
        document.getElementById('after').textContent = 'Despues de conocer tus necesidades estimamos cuanto tiempo y dinero nos va a llevar hacerlo realidad, te lo decimos y así será. No habrá retrasos ni aumentos de presupuesto durante todo el proceso.';
        
        document.getElementById('we6').textContent = 'Nos mantenemos en contacto.';
        document.getElementById('you').textContent = 'Puedes contactar con nosotros en cualquier momento y resolveremos tus dudas lo antes posible. También te pediremos tus comentarios y expectativas sobre el proceso para ser lo más exactos posible para dar vida a tus ideas.';
        document.getElementById('send').textContent = 'Lánzalo y comienza a generar ingresos.';
        document.getElementById('finish').textContent = '¡Termina tu proyecto y comienza a vender y conseguir clientes!';
        document.getElementById('getting').textContent = 'Ponerse en contacto es fácil';
        document.getElementById('we7').textContent = 'Nos pondremos en contacto contigo lo antes posible. No te preocupes.';
        document.getElementById('whats').textContent = `What's App Telegram o Signal:`;
        document.getElementById('contact-2').textContent = `CONTACTO`;
        break;

    default:
        break;
}
