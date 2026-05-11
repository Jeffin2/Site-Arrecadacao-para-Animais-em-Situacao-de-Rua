const traducoes = {

    pt: {

        titulo: "🐶 Apoie animais necessitados 😺",
        subtitulo: "Juntos, podemos fazer uma diferença real.",
        link_contato: "Contato de suporte",
        link_valores: "Ver valores doados",

        titulo_sobre: "Sobre nós",
        p_sobre: "Somos uma plataforma de arrecadação de fundos dedicada a apoiar animais abandonados e errantes, proporcionando-lhes o cuidado e a atenção que merecem.",
        p_sobre_2: "Nosso objetivo é conectar pessoas que querem ajudar com casos reais de resgate, garantindo que cada doação chegue aos animais em necessidade.",
        p_sobre_3: "Acreditamos que cada vida importa, e até mesmo pequenas contribuições podem criar uma grande diferença na vida dos animais que foram esquecidos.",

        titulo_trabalho: "Nosso Trabalho",
        p_trabalho: "Nossa missão é conectar doadores generosos com animais em necessidade, ajudando a financiar esforços de resgate, abrigo, comida e cuidados médicos.",
        p_trabalho_2: "Trabalhamos em parceria com voluntários e abrigos para garantir que animais resgatados recebam o tratamento adequado e um lugar seguro para se recuperar.",
        p_trabalho_3: "Cada projeto que apoiamos é cuidadosamente revisado para garantir transparência e impacto real.",

        titulo_conteudo: "Nosso Projeto",
        p_conteudo: "Esta plataforma está atualmente em desenvolvimento, e mais recursos estarão disponíveis em breve.",
        p_conteudo_2: "Estamos trabalhando para construir uma maneira confiável e transparente para as pessoas apoiarem o bem-estar animal.",
        p_conteudo_3: "Obrigado por seu interesse em fazer um impacto positivo.",
        p_conteudo_4: "No futuro, planejamos incluir rastreamento de doações em tempo real, atualizações de resgate e histórias de animais que foram ajudados por meio desta plataforma.",
        p_conteudo_5: "Juntos, podemos construir uma comunidade que dá aos animais uma segunda chance de vida.",

        titulo_chave_pix: "Chave Pix para Doações",
        p_chave_pix: "Se você quiser contribuir, pode usar a seguinte chave Pix:",
        p_chave_pix2: "pedrohmaiabarbosa7@gmail.com",

        titulo_contato: "Contato de Suporte",
        label_name: "Nome",
        label_email: "Email",
        label_subject: "Assunto",
        label_message: "Mensagem",

        btn_enviar: "Enviar mensagem",
        btn_voltar: "Voltar ao menu principal",

        texto_valor_doado: "Valor total doado:",
        texto_carregando: "Carregando...",
        btn_voltar_valores: "Voltar ao menu principal",

    },


    en: {

        titulo: "🐶 Support Animals in Need 😺",
        subtitulo: "Together, we can make a real difference",
        link_contato: "Contact Support",
        link_valores: "View Donated Amounts",

        titulo_sobre: "About Us",
        p_sobre: "We are a fundraising platform dedicated to supporting abandoned and stray animals, providing them with the care and attention they deserve.",
        p_sobre_2: "Our goal is to connect people who want to help with real rescue cases, making sure every donation reaches animals in need.",
        p_sobre_3: "We believe every life matters, and even small contributions can create a big difference in the lives of animals that have been forgotten.",

        titulo_trabalho: "Our Work",
        p_trabalho: "Our mission is to connect generous donors with animals in need, helping fund rescue efforts, shelter, food, and medical care.",
        p_trabalho_2: "We partner with volunteers and shelters to ensure that rescued animals receive proper treatment and a safe place to recover.",
        p_trabalho_3: "Every project we support is carefully reviewed to guarantee transparency and real impact.",

        titulo_conteudo: "Our Project",
        p_conteudo: "This platform is currently in development, and more features will be available soon.",
        p_conteudo_2: "We are working to build a reliable and transparent way for people to support animal welfare.",
        p_conteudo_3: "Thank you for your interest in making a positive impact.",
        p_conteudo_4: "In the future, we plan to include real-time donation tracking, rescue updates, and stories of animals that have been helped through this platform.",
        p_conteudo_5: "Together, we can build a community that gives animals a second chance at life.",

        titulo_chave_pix: "Pix Key for Donations",
        p_chave_pix: "If you would like to contribute, you can use the following Pix key:",
        p_chave_pix2: "pedrohmaiabarbosa7@gmail.com",

        titulo_contato: "Support Contact",
        label_name: "Name",
        label_email: "Email",
        label_subject: "Subject",
        label_message: "Message",

        btn_enviar: "Send Message",
        btn_voltar: "Back to Main Menu",
        btn_voltar_valores: "Back to Main Menu",
        texto_valor_doado: "Total amount donated:",
        texto_carregando: "Loading...",

    }

};



function aplicarTraducao(idioma){

    const elementos =
        document.querySelectorAll("[data-key]");


    elementos.forEach(elemento => {

        const chave =
            elemento.dataset.key;


        if(!traducoes[idioma][chave]) return;


        const texto =
            traducoes[idioma][chave];


        if(
            elemento.tagName === "INPUT" ||
            elemento.tagName === "TEXTAREA"
        ){

            elemento.placeholder = texto;

        }else{

            elemento.textContent = texto;

        }

    });

}



function mudarIdioma(idioma){

    localStorage.setItem(
        "idioma",
        idioma
    );


    const elementos =
        document.querySelectorAll("[data-key]");


    elementos.forEach(elemento => {

        elemento.classList.add(
            "animando"
        );

    });


    setTimeout(() => {

        aplicarTraducao(
            idioma
        );


        elementos.forEach(elemento => {

            elemento.classList.remove(
                "animando"
            );

        });

    }, 350);

}



function iniciarIdioma(){

    const idiomaSalvo =

        localStorage.getItem(
            "idioma"
        ) || "pt";


    aplicarTraducao(
        idiomaSalvo
    );

}



document.addEventListener(

    "DOMContentLoaded",

    iniciarIdioma

);