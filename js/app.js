const adivinarNumero = (e)=>{
    e.preventDefault();
    const numero = document.getElementById('number').value
    if(numero==randomNumber){
        alert('Acertaste!')
        formulario.reset()
    }
    else if(numero>randomNumber){
        alert('Te pasaste, es mas bajo')
        formulario.reset()}
    else if(numero<randomNumber){
        alert('Te falto, es mas alto')
        formulario.reset()}
}

const randomNumber = Math.floor(Math.random() * 6) + 1

const formulario = document.getElementById('miFormulario')

formulario.addEventListener("submit",adivinarNumero)