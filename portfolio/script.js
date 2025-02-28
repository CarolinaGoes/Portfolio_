function abrirPopup() {
    document.getElementById("janela").style.display = "block";
}

function fecharPopup() {
    document.getElementById("janela").style.display = "none";
    document.querySelector("main").style.display = "block"; // Exibe o conteúdo do main
}

function enviar() {
    const nome = document.getElementById("inputNome").value;
    const mensagem = document.getElementById("mensagem");
    const saudacao = document.getElementById("saudação");
    const body = document.body; // Referência ao corpo da página

    if (nome.trim() !== "") {
        const agora = new Date(); 
        const hora = agora.getHours(); 
        let saudacaoTexto;
        let backgroundImage;

        // Condições para definir a saudação e a imagem de fundo
        if (hora >= 6 && hora < 12) {
            saudacaoTexto = "Bom dia, " + nome + "!";
            backgroundImage = "url('assets/d1.jpg')"; 
        } else if (hora >= 12 && hora < 18) {
            saudacaoTexto = "Boa tarde, " + nome + "!";
            backgroundImage = "url('assets/t1.jpg')"; 
        } else if (hora >= 18 && hora < 24) {
            saudacaoTexto = "Boa noite, " + nome + "!";
            backgroundImage = "url('assets/n1.jpg')"; 
        } else {
            saudacaoTexto = "Boa madrugada, " + nome + "!";
            backgroundImage = "url('assets/m1.jpg')"; 
        }

        saudacao.innerHTML = saudacaoTexto; 
        body.style.backgroundImage = backgroundImage; 
        
        fecharPopup();
        
    } else {
        mensagem.innerHTML = "Por favor, digite seu nome!"; 
    }
}

window.onload = function() {
    abrirPopup();
}