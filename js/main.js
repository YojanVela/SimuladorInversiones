function inversion(){
    // capturamos los valores del campo de formularios
    let nombres = document.getElementById("nombres").value;
    let telefono =document.getElementById("telefono").value;
    let correo=document.getElementById("email").value;
    let monto=document.getElementById("inversion").value;
    let tiempo=document.getElementById("tiempo").value;
    // capturamos los espacios o span para mostrar el nombre y el email
    let cNombres =document.getElementById("nombres-show");  
    let cCorreo=document.getElementById("email-show");
    let cTiempo=document.getElementById("tiempo-show");
    let cMonto=document.getElementById("interes-show");
    let cTotal=document.getElementById("total-show");
    let cGanancia=document.getElementById("ganancia-show");
    // Capturamos los contenedores pre simulacion y post simulacion
    let contPre= document.querySelector(".pre-simulation");
    let contPost= document.querySelector(".post-simulation")

    
    // Se activay se desactiva el contenido
    contPost.classList.remove("disabled");
    contPre.classList.add("disabled");
    // Mostramos los datos del usuario
    cNombres.innerHTML=(nombres); 
    cCorreo.innerHTML=(correo);

    // Utilizamos el Switch para cambiar el tiempo y el interes segun los años

    switch (tiempo) {
        case '1':
            cTiempo.innerHTML = "12 MESES";
            cMonto.innerHTML = "0.08%";

            var ganancia = monto * 0.096; 
            var total = parseInt(ganancia) + parseInt(monto);

            cTotal.innerHTML = total;
            cGanancia.innerHTML = ganancia;

            break;
        case '2':
            cTiempo.innerHTML=("24 MESES");
            cMonto.innerHTML="1.3%";

            var ganancia2 = parseInt(monto) * 0.312;
            var total2 = parseInt(ganancia2) + parseInt(monto);

            cTotal.innerHTML = total2;
            cGanancia.innerHTML = ganancia2;
            break;

        case '3':
            cTiempo.innerHTML=("36 MESES");
            cMonto.innerHTML="1.7%";

            var ganancia3 = parseInt(monto) * 0.612;
            var total3 = parseInt(ganancia3) + parseInt(monto);

            cTotal.innerHTML = total3;
            cGanancia.innerHTML = ganancia3;
            break;
    }

}
    // alert("Bienvenido Usuario  " + nombres + " Su telefono es:" + telefono);
    // console.log("Bienvenido usuario " + nombres + " Su telefono es:" + telefono);
// let contador = 100;
//     while (contador >0) {
//         console.log(contador);
//         contador = contador - 1;
//     }