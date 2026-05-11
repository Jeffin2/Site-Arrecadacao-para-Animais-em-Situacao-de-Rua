const traducoes = {

    pt: {

        titulo: "🐶 Apoie animais necessitados 😺",
        subtitulo: "Juntos, podemos fazer uma diferença real.",
        fase_programacao: "/Site atualmente em desenvolvimento/",
        link_contato: "Reportar um problema",

        doar: "Doar agora",
        contato: "Entre em contato",

        nome: "Digite seu nome",
        email: "Digite seu e-mail",
        mensagem: "Digite sua mensagem",

        enviar: "Enviar"

    },


    en: {

        titulo: "🐶 Support Animals in Need 😺",
        subtitulo: "Together, we can make a real difference",

        doar: "Donate now",
        contato: "Contact us",

        nome: "Enter your name",
        email: "Enter your email",
        mensagem: "Type your message",

        enviar: "Send"

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