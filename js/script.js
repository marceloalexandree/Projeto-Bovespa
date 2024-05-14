function show(){
    let menuMobile = document.querySelector(".mobile")
    let botao = document.querySelector(".icone-mobile")

    if (menuMobile.classList.contains('abrir')){
        menuMobile.classList.remove('abrir')
        botao.classList.remove('rodar')
    } else{
        menuMobile.classList.add('abrir')
        botao.classList.add('rodar')
    }
}