function num (){

    var number;
    
    number = prompt ("Por favor, ingrese un número:");
    
    if (number > 0) {alert ("El número ingresado es POSITIVO");}
    else if (number < 0) {alert ("El número ingresado es NEGATIVO");}
    else if (number == 0) {alert ("Usted ingreso el número CERO");}
    else {alert ("No ingresó un número, GAME OVER");}
    
    
    console.log (number)
    
    }