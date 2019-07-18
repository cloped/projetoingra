 
let expandir = (id) =>{
    let dica = document.getElementById(id);
    // let expandiu = false;
    if(dica.classList.contains("escondido")){

        dica.classList.remove("escondido");
    }else{
        dica.classList.add("escondido");
    }
}