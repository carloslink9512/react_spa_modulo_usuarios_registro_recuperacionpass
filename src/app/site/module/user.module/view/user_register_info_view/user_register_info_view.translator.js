export const translator = (lang) => {
    let language;

    switch (true) {
        case (lang === 'es'):
            language = {
                title1: 'Experiencia de usuario LOGO',
                item1_1: 'Crea tu cuenta. Inicia el proceso de registro rápido.',
                item1_2: 'Comenta nuestras publicaciones. Queremos conocer tu opinión.',
                title2: 'En LOGO podrás',
                item2_1: 'Tus comentarios son fundamentales para nuestro desarrollo.',
                item2_2: 'Envíanos tus consultas, te responderemos a la brevedad.',
                item2_3: 'Frecuentemente agregaremos publicaciones referidas a la ciencia, tecnología, conocimiento y desarrollo.',
                item2_4: 'Navega nuestros productos descargables LOGO. Trabajamos para darte y para darnos la mejor experiencia de usuario.',
                item2_5: '¿Programamos? Construyamos aplicaciones basados en el stack MERN + React Native. Apliquemos Javascript.',
                title3: 'Síguenos en'
            }
            break;

        default:
            language = {
                title1: 'LOGO user experience',
                item1_1: 'Creat your account. Start the quick registration process.',
                item1_2: 'Comment on our posts. We want to know your opinion.',
                title2: 'In LOGO you can',
                item2_1: 'Your feedback is fundamental to our development.',
                item2_2: 'Send us your queries, we will respond as soon as possible.',
                item2_3: 'We will frequently add publications related to science, technology, knowledge and development.',
                item2_4: 'Browse our downloadable LOGO products. We work to give you and to give us the best user experience.',
                item2_5: "Do we program? Let's build applications based on the MERN + React Native stack. Let's apply Javascript.",
                title3: 'Follow us on'
            }
    }

    return language;
}