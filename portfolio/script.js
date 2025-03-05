function backgroundImage() {
    const mensagem = document.getElementById("mensagem");
    const saudacao = document.getElementById("saudação");
    const body = document.body; 

    const agora = new Date(); 
    const hora = agora.getHours(); 
    let saudacaoTexto;
    let backgroundImage;

    // Definindo a saudação e a imagem de fundo com base na hora
    if (hora >= 6 && hora < 12) {
        saudacaoTexto = "Bom dia!";
        backgroundImage = "url('assets/d1.jpg')"; 
    } else if (hora >= 12 && hora < 18) {
        saudacaoTexto = "Boa tarde!";
        backgroundImage = "url('assets/t1.jpg')"; 
    } else if (hora >= 18 && hora < 24) {
        saudacaoTexto = "Boa noite!";
        backgroundImage = "url('assets/n1.jpg')"; 
    } else {
        saudacaoTexto = "Boa madrugada!";
        backgroundImage = "url('assets/m1.jpg')"; 
    }
    
    saudacao.innerHTML = saudacaoTexto; 
    body.style.backgroundImage = backgroundImage; 
}

// Chama a função quando a página é carregada
window.onload = backgroundImage;
