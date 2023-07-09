//Objetivo 1
const personagens = document.querySelectorAll('.personagens');

//1.2
personagens.forEach((personagens) => {
    personagens.addEventListener('mouseenter', () =>{
       
//1.3
const personagensSelecionado = document.querySelector('.selecionado');
personagensSelecionado.classList.remove('selecionado');

personagens.classList.add('selecionado');

//Objetivo 2

const ImagemPersonagensGrande = document.querySelector('.personagens-grande');

//passo 2.2
const idPersonagens = personagens.attributes.id.value;
ImagemPersonagensGrande.scr = `./X-men/src/imagens/card-${idPersonagens}.png`;
    })
})