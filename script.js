function toggleMode(){
    const html = document.documentElement

    html.classList.toggle('light')


    //PEGAR IMAGEM
    const img = document.querySelector("#profile img")

        if(html.classList.contains('light')){

            img.setAttribute('src','./assets/avatar-dark.png')
        }else{
            img.setAttribute('src','./assets/Avatar.png')
        }
    //SUBSTITUIR A IMAGEM

    //SE TIVER LIGHT MODE ADICIONAR LIGHT

    //SE TIVER SEM LIGHT MODE, MANTER IMAGEM NORMAL

}