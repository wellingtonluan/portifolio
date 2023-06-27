function toggleMode(){
    const html = document.documentElement

    html.classList.toggle('light')


    //PEGAR A TAG IMAGEM
    const img = document.querySelector("#profile img")

    //SUBSTITUIR A IMAGEM!
        if(html.classList.contains('light')){
            //SE TIVER LIGHT MODE, ADICIONAR A IMAGEM LIGHT
            img.setAttribute('src','./assets/avatar-dark.png')
        }else{
            img.setAttribute('src','./assets/Avatar.png')
        }
    //SE TIVER SEM LIGHT MODE, MANTER IMAGEM NORMAL

}