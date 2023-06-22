const formulario = document.querySelector("#formulario")
formulario.addEventListener( "submit", validarFormulario) 
function validarFormulario (e){
    e.preventDefault();
    const Name = document.querySelector("#ReservName").value
    const Date = document.querySelector("#ReservDate").value
    const Time = document.querySelector("#ReservTime").value
    const People = document.querySelector("#NumberPeople").value

    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `Hello, your reservation to name ${Name} of ${People} people on the day ${Date} on ${Time} is CONFIRMED, thanks for counting on us.`

}


    
