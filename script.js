const traducoes = {

    pt: {

        titulo: "Bem-vindo",
        descricao: "Ajude nossa campanha de arrecadação.",
        doar: "Doar agora",
        contato: "Entre em contato",

        nome: "Digite seu nome",
        email: "Digite seu e-mail",
        mensagem: "Digite sua mensagem",

        enviar: "Enviar"

    },

    en: {

        titulo: "Welcome",
        descricao: "Support our fundraising campaign.",
        doar: "Donate now",
        contato: "Contact us",

        nome: "Enter your name",
        email: "Enter your email",
        mensagem: "Type your message",

        enviar: "Send"

    }

};


function mudarIdioma(idioma){

    localStorage.setItem("idioma", idioma);


    document
        .querySelectorAll("[data-key]")
        .forEach(elemento => {

            const chave = elemento.dataset.key;

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



function iniciarIdioma(){

    const idiomaSalvo =
        localStorage.getItem("idioma") || "pt";

    mudarIdioma(idiomaSalvo);

}


document.addEventListener(
    "DOMContentLoaded",
    iniciarIdioma
);