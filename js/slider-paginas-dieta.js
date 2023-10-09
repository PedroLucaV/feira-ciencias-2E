/** PÁGINAS DE DIETA: Mudança automática de slides **/

// Variável contadora:
let count = 1; 
// Quantidade de slides:
const numSlide = document.querySelectorAll('.slide').length; 
// Chamando o elemento 'radio1':
document.getElementById('radio1').checked = true;


function nextSlide() 
{ // PARA PASSAR PARA O PRÓXIMO SLIDE (30s):

    // Teste lógico, caso count ultrapasse o número de slides
    count++;
    if (count > numSlide) {
        count = 1;
    }

    // Substituindo o elemento radio1 por um 'radio'+count:
    document.getElementById(`radio${count}`).checked = true;
}

setInterval( function() {
    nextSlide()
}, 30000 /* 1000ms = 1s */ );