//Recuparação dos botoẽs que serão usados para os eventos.
const btnBackground = document.getElementById('btn-background');
const btnTextColor = document.getElementById('btn-text-color');
const btnFontSize = document.getElementById('btn-font-size');
const btnLineSpace = document.getElementById('btn-line-space');
const btnFontType = document.getElementById('btn-font-type');

//Altera a cor de fundo do texto e a cor do texto.
btnBackground.addEventListener('click', () => {
    let bg = document.querySelector('.text-conteiner');
    let text = document.querySelector('#main-text');
    if (bg.style.backgroundColor !== 'black' && text.style.color !== 'white') {
        bg.style.backgroundColor = 'black';
        text.style.color = 'white'
    } else {
        bg.style.backgroundColor = 'white';
        text.style.color = 'black';
    }
})

//Altera a cor do texto
btnTextColor.addEventListener('click', () => {
    let text = document.querySelector('#main-text');
    if (text.style.color !== 'yellow') {
        text.style.color = 'yellow';
    } else {
        text.style.color ='red';
    }
})

//Altera o tamanho da fonte
btnFontSize.addEventListener('click', () => {
    let text = document.querySelector('#main-text');
    if (text.style.fontSize !== '20px') {
        text.style.fontSize = '20px';
    } else {
        text.style.fontSize ='16px';
    }
})

//Altera o espaçamento entre as linhas
btnLineSpace.addEventListener('click', () => {
    let text = document.querySelector('#main-text');
    if (text.style.lineHeight !== '30px') {
        text.style.lineHeight= '30px';
    } else {
        text.style.lineHeight ='18px';
    }
})

