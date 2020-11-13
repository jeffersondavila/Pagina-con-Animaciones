let ubicacionPrincipal = window.pageYOffset;//Indica la posicion en la que se encuentra

AOS.init();

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset;

    //ubicacionPrincipal la mayoria de veces sera 0
    if(ubicacionPrincipal >= desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px";//[0] = Primer elemento
    } else{//si no esta en la ubicacion principal 0px
        document.getElementsByTagName("nav")[0].style.top = "-100px";//hace que se esconda
    }
    ubicacionPrincipal = desplazamientoActual;
})

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburger")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburger")[0].style.color = "#fff";
        semaforo = false;
    } else{
        document.querySelectorAll(".hamburger")[0].style.color = "#000";
        semaforo = true;
    }

    enlacesHeader.classList.toggle("menuHamburguesa");
})