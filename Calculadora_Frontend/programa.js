//Tener una referencia al elemnento del dom al que queremos agregarle el eventListener

const miBotonSumar = document.getElementById("sumar");
const miBotonRestar = document.getElementById("restar");
const miBotonMultiplicar = document.getElementById("multiplicar");
const miBotonDividir = document.getElementById("dividir");

miBotonSumar.addEventListener('click', async (event)=>{
    event.preventDefault();
    const numeroUno = parseFloat(document.getElementById("num1").value);
    const numeroDos = parseFloat(document.getElementById("num2").value);
    const respuesta = await fetch(
        'http://localhost:3000/sumar',
        {
            "method":"POST",
            //tener control para conectarse con la aqui y decirle cuanto debe esperar(es decirle las caracteristicas de la peition)
            "headers":{
                "content-TYPE":"application/json"
            },
            "body":JSON.stringify({numeroUno,numeroDos})
        }
    );
    const dato = await respuesta.json();
    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML= dato;
    divResultado.classList.add("dato");

});

miBotonRestar.addEventListener("click", async (event)=>{
    event.preventDefault();
    const numeroUno = parseFloat(document.getElementById("num1").value);
    const numeroDos = parseFloat(document.getElementById("num2").value);
    const respuesta = await fetch(
        'http://localhost:3000/restar',
        {
            "method":"POST",
            //tener control para conectarse con la aqui y decirle cuanto debe esperar(es decirle las caracteristicas de la peition)
            "headers":{
                "content-TYPE":"application/json"
            },
            "body":JSON.stringify({numeroUno,numeroDos})
        }
    );
    const dato = await respuesta.json();
    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML= dato;
    divResultado.classList.add("dato");
});

miBotonMultiplicar.addEventListener("click", async (event)=>{
    event.preventDefault();
    const numeroUno = parseFloat(document.getElementById("num1").value);
    const numeroDos = parseFloat(document.getElementById("num2").value);
    const respuesta = await fetch(
        'http://localhost:3000/multiplicar',
        {
            "method":"POST",
            //tener control para conectarse con la aqui y decirle cuanto debe esperar(es decirle las caracteristicas de la peition)
            "headers":{
                "content-TYPE":"application/json"
            },
            "body":JSON.stringify({numeroUno,numeroDos})
        }
    );
    const dato = await respuesta.json();
    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML= dato;
    divResultado.classList.add("dato");
});

miBotonDividir.addEventListener('click', async(event)=>{
    event.preventDefault();
    const numeroUno = parseFloat(document.getElementById("num1").value);
    const numeroDos = parseFloat(document.getElementById("num2").value);
    const respuesta = await fetch(
        'http://localhost:3000/dividir',
        {
            "method":"POST",
            "headers":{
                "content-TYPE":"application/json"
            },
            "body":JSON.stringify({numeroUno,numeroDos})
        }
    );
    const dato = await respuesta.json();
    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML= dato;
    divResultado.classList.add("dato");
});