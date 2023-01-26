// variaveis que posso usar, 'const', e uma variavel constante, que você não ira mudar, ja 'left', e a proposta oposta
const modal = document.querySelector('.modal');
const botaotrailer = document.querySelector('.botao-trailer');
const video = document.getElementById("video");
const botaofecharmodal = document.querySelector(".fechar-modal");
const linkdovideo = video.src;

function alternarModal(){
    modal.classList.add("aberto")
}

botaotrailer.addEventListener('click', () => {
    alternarModal()
    video.setAttribute("src", linkdovideo)
});

botaofecharmodal.addEventListener('click', () => {
    modal.classList.toggle("aberto")
    // 'classlist' com 'add' adicionara um atributo a class, já 'remove' removera o novo atributo da class, e toggle seria para alterar entre os dois
    video.setAttribute("src", "")
    
} );








