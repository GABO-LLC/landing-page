const userLang = navigator.language || navigator.userLanguage; 
switch (userLang) {
    case 'es-ES':
        document.getElementById('title').innerHTML = 'GABO - desarrollo software';
        document.getElementById('contact-btn').innerHTML = 'Contacto';
        document.getElementById('start-btn').innerHTML = 'Empieza ya';
        document.getElementById('it').innerHTML = 'Es Hora De';
        document.getElementById('START').innerHTML = 'COMENZAR A CONSTRUIR TU NEGOCIO';
        document.getElementById('and').innerHTML = 'Y te vamos a ayudar a lograrlo.';
        document.getElementById('get').innerHTML = 'EMPIEZA AHORA';
        document.getElementById('some').innerHTML = 'Algunos de nuestros clientes';
        document.getElementById('do').innerHTML = '¿Tienes una web?';
        document.getElementById('a').innerHTML = `¿Una aplicación móvil? ¿Eccomerce? ¿Portafolio perosnal o landing page de tu negocios con CMS? ¿Un SaaS? ¿O tal vez un PaaS? ¿O te gustaría tener uno pero no tienes presupuesto para que un equipo de desarrolladores le den vida a tu idea?<br>¡Estamos aquí para ayudarte!`;
        document.getElementById('get2').innerHTML = 'EMPIEZA AHORA';
        document.getElementById('how').innerHTML = 'Cómo podemos ayudarte';
        document.getElementById('we').innerHTML = 'Podemos ayudarte a diseñar no solo tu software sino también tu negocio, y brindarte asesoramiento sobre marketing o emprendimiento en lineas generales.';
        document.getElementById('we2').innerHTML = 'Queremos conocerte';
        document.getElementById('we3').innerHTML = '¡Queremos conocerte! Necesitamos conocer que necesitas, objetivos y gustos para desarrollar un plan de trabajo y darte los mejores servicios, así como verificar si somos compatibles, si no podemos ayudarte o creemos que necesitarías algo más, telo vamos a decir, no nos gusta hacerte perder el tiempo ni perder el nuestro.';
        document.getElementById('we4').innerHTML = '¡Te ayudamos a materializar tus sueños!';
        document.getElementById('if').innerHTML = '¡Si congeniamos empezamos a trabjar juntos!';
        document.getElementById('pause').innerHTML = 'Para en cualquier momento';
        document.getElementById('do2').innerHTML = '¿Te gusta cómo trabajamos? ¡Sigamos trabajando! ¿No estás convencido? No te preocupes, puedes buscar desarrolladores en otro lugar y te deseamos lo mejor.';
        document.getElementById('we5').innerHTML = 'Marcamos la diferencia';
        document.getElementById('always').innerHTML = 'Siempre comprometidos con tu presupuesto y plazos.';
        document.getElementById('after').innerHTML = 'Despues de conocer tus necesidades estimamos cuanto tiempo y dinero nos va a llevar hacerlo realidad, te lo decimos y así será. No habrá retrasos ni aumentos de presupuesto durante todo el proceso.';
        break;

    default:
        break;
}
