function troca(){
    var imagemsecun = document.getElementById("imagem-h2")

    if (imagemsecun.getAttribute("src") === "./images/putz.png") {
        imagemsecun.setAttribute("src", "./images/sem_mascara.jpg")
    }else {
        imagemsecun.setAttribute("src", "./images/putz.png") 
    }
   

}