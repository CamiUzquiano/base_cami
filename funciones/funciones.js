/*Con {} definimos objetos
Con [] defino arreglos o arrays
Con () defino funsiones
Con let definimos variables*/
document.addEventListener("DOMContentLoaded", function(){
    console.log("El DOM se ha cargado");
    const mascotas = [{tipo:"perro", nombre:"Snoopy", edad:9, color:"blanco"},
                    {tipo:"perro", nombre:"Ody", edad:8, color:"beige"}];
    /*Con esta sacamos una alerta en la pagina para que salga la información requerida, la que está buscando
    alert(mascotas[1].nombre);*/
    const sandbox = document.querySelector(".sandbox");
    sandbox.style.padding = "60px";
    /*De esta forma podemos modificar el estilo desde java, si bien se puede modificar en css se usa en java para hacerlo interactivo
    sandbox.style.backgroundColor= "red";
    sandbox.style.width = "600px";
    sandbox.style.height = "600px";
    sandbox.style.border = "6px solid black";*/
    const btnNaranja = document.querySelector("#btnNaranja");
    const btnVerde = document.querySelector("#btnVerde");
    const btnAzul = document.querySelector("#btnAzul");
    const cargaMascota = document.querySelector("#cargarMascota");
    
    btnNaranja.addEventListener("click",function(){
        sandbox.style.backgroundColor = "orange";
    });
    btnVerde.addEventListener("click",function(){
        sandbox.style.backgroundColor = "green";
    });
    btnAzul.addEventListener("click",function(){
        sandbox.style.backgroundColor = "blue";
    });

    const nuevoCard = document.createElement("div");
    nuevoCard.innerHTML = `<h2>${mascotas[0].tipo}</h2>
                            <ul>
                                <li>Nombre: ${mascotas[0].nombre}</li>
                                <li>Edad: ${mascotas[0].edad}</li>
                                <li>Color: ${mascotas[0].color}</li>
                            </ul>`;    
    nuevoCard.classList.add("card");
    nuevoCard.style.widht="300px";
    nuevoCard.style.padding="10px";
    nuevoCard.style.margin="10px 0px";
    nuevoCard.style.border="2px solid black";
    nuevoCard.style.borderRadius="10px";

    cargaMascota.addEventListener("click",function(){
        sandbox.appendChild(nuevoCard);
    });
})