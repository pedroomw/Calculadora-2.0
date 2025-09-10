function calcular() {
    
    const numero1 = +document.getElementById("num1").value;
    const numero2 = +document.getElementById("num2").value;
    const operacion = document.getElementById("operacion").value;

    let resultado;


    switch (operacion) {
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        case "/":
            if (numero2 !== 0) { 
                resultado = numero1 / numero2;
            } else {
                resultado = "Error: División por cero";
            }
            break;
        default:
            resultado = "Operación no válida";
            break;
    }

 
    return resultado;
}

function mostrarResultado() {
  
    const resultadoCalculado = calcular();

   
    document.getElementById("resultado").textContent = "El resultado es: " + resultadoCalculado;
}