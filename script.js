function idadeatual(){
    var nasc = prompt ("Informe o seu ano de nascimento:", "")
    if(nasc){ 
        const date = new Date();
        const currentYear = date.getFullYear();
        console.log(currentYear)
        parseInt(currentYear)
        var id1 = currentYear - nasc
        console.log("Idade no ano atual: " +id1)
        alert("Sua idade no ano atual é: "+ id1)
    }else{
        alert("Até outro dia!")
    }
}
function idade50(){
    var nasc = prompt("Informe o seu ano de Nascimento:", "")
    if(nasc){
    var id2 = 2050 - nasc
    console.log("Idade em 2050: " + id2)  
    alert("Sua idade em 2050: " + id2)
    }else{
    alert("Até outro dia!")            
    }
    }
function celsius(){
    var celsius = parseFloat(prompt("Informe a temperatura em Celsius: ", ""))
    if(celsius){
    var fahrenheit = parseFloat((celsius*1.8)+32)
    alert("a temperatura informada em Fahrenheit é: " +fahrenheit)
    }else{
        alert("Até outro dia!")
    }
}
function mediaarit(){
    var nota1 = parseFloat(prompt("Informe a primeira nota:", ""))
    if(nota1){
    var nota2 = parseFloat(prompt("Informe a segunda nota:", ""))
    if(nota2){
    var nota3 = parseFloat(prompt("Informe a terceira nota:", ""))
    if(nota3){
        var media = parseFloat((nota1+nota2+nota3)/3)
        alert("A média das 3 notas é: " +media)
    }else{
        alert("Até outro dia!")
    }
    }else{
        alert("Até outro dia!")        
    }
    }else{
        alert("Até outro dia!")
    }
}
function Hip(){
    var resp = parseFloat(prompt("Informe o primeiro cateto", ""))
    if(resp){
    var resp1 = parseFloat(prompt("Informe o segundo cateto", ""))
    if(resp1){
    var hipotenusa= parseFloat((resp1*resp1)+(resp*resp))
    var hipotenusa2= parseInt(Math.sqrt(hipotenusa))
    alert("A Hipotenusa é igual a: " +hipotenusa2);
    console.log("O Resultado da Hipotenusa é: "+hipotenusa2)
        }else{
        alert("Até outro dia!")
        }
        }else{
        alert("Até outro dia!")
        }
}

