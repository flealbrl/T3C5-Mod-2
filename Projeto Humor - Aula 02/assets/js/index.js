const elementoNome = document.querySelector('#nome'); 
const elementoSituacao = document.querySelector('#situacao');
const elementoImg = document.querySelector('#imagem')
let elementoBtn = document.querySelector('#alterar')
let elementoBody = document.querySelector('body')

elementoBtn.addEventListener('click', () =>{
    if(elementoBtn.value == 'primeiro'){
        elementoImg.src = './assets/img/normal.jpg' 
        elementoNome.innerText = 'Jessé Gomes da Silva Filho' 
        elementoSituacao.innerText = 'Normal' 
        elementoBody.setAttribute('style','background: url(./assets/img/background-normal.jpg) !important; background-size: cover !important; background-repeat: no-repeat !important;')
        elementoBtn.value = 'segundo' 
    } else if(elementoBtn.value == 'segundo') { 
        elementoImg.src = './assets/img/sextou.png'
        elementoNome.innerText = 'Zeca Pagodinho'
        elementoSituacao.innerText = 'Sextou' 
        elementoBody.setAttribute('style','background: url(./assets/img/background-sextou.jpg) !important; background-size: cover !important; background-repeat: no-repeat !important;')
        elementoBtn.value = 'terceiro' 
    } else {
        elementoImg.src = './assets/img/enchente.jpg'
        elementoNome.innerText = 'Zeca Pagodinho Ajudante/Heroi'
        elementoSituacao.innerText = 'Enchente' 
        elementoBody.setAttribute('style','background: url(./assets/img/background-enchente.jpg) !important; background-size: cover !important; background-repeat: no-repeat !important;')
        elementoBtn.value = 'primeiro'     
    }
})