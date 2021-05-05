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
    localStorage.setItem('text', text.style.color);
    localStorage.setItem('bg', bg.style.backgroundColor);
})

//Altera a cor do texto
btnTextColor.addEventListener('click', () => {
    let text = document.querySelector('#main-text');
    if (text.style.color !== 'yellow') {
        text.style.color = 'yellow';
    } else {
        text.style.color ='red';
    }
    localStorage.setItem('text', text.style.color);
})

//Altera o tamanho da fonte
btnFontSize.addEventListener('click', () => {
    let text = document.querySelector('#main-text');
    if (text.style.fontSize !== '20px') {
        text.style.fontSize = '20px';
    } else {
        text.style.fontSize ='16px';
    }
    localStorage.setItem('font', text.style.fontSize);
})

//Altera o espaçamento entre as linhas
btnLineSpace.addEventListener('click', () => {
    let text = document.querySelector('#main-text');
    if (text.style.lineHeight !== '30px') {
        text.style.lineHeight= '30px';
    } else {
        text.style.lineHeight ='18px';
    }
    localStorage.setItem('space', text.style.lineHeight);
})

//Altera o tipo de fonte do texto 
btnFontType.addEventListener('click', () => {
    let text = document.querySelector('#main-text');
    if (text.style.fontFamily !== 'monospace') {
        text.style.fontFamily = 'monospace';
    } else {
        text.style.fontFamily = 'sans serif';
    }
    localStorage.setItem('font-type', text.style.fontFamily);
})

//Salvar preferencias
if (localStorage.getItem('bg') !== null) {
    document.querySelector('.text-conteiner').style.backgroundColor = localStorage.getItem('bg');    
}
if (localStorage.getItem('space') !== null) {
    document.querySelector('#main-text').style.backgroundColor = localStorage.getItem('space');
}
if (localStorage.getItem('font') !== null) {
    document.querySelector('#main-text').style.fontSize = localStorage.getItem('font');
}
if (localStorage.getItem('text') !== null) {
    document.querySelector('#main-text').style.color = localStorage.getItem('text');
}
if (localStorage.getItem('font-type') !== null) {
    document.querySelector('#main-text').style.fontFamily = localStorage.getItem('font-type');
}


