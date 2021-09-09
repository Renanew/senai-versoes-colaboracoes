const Peça = ['A','Alicate','Ala'];
var Peso = 4;
var QuantidadeDePeça = 10;

for(let i=0; i<Peça.length; i++){
    if(Peça[i].length<=3){
       // console.log(Peça[i]);
        console.log("Peça "+ Peça[i] + " não cadastrada, pois caracteres é inferior a 3. ");
        console.log("");
    }
    else if ((Peça[i].length>3)){
    console.log("Peça cadastrada: " +Peça[i]);
    console.log("");
    }
    }

if (Peso>100){
    console.log("Pode realizar o cadastro da peça devido a peso ser "+ Peso +" gramas.");
    console.log("");
}
    else if(Peso<=100){
    console.log("Cadastro não realizado devido ao peso ser "+ Peso +" gramas.");
    console.log("");
    } 
if (QuantidadeDePeça>10){
    console.log("Capacidade "+ QuantidadeDePeça +" insuficiente para realizar o cadastro.");
}
else if (QuantidadeDePeça<=10){
 console.log("Capacidade "+ QuantidadeDePeça + " suficiente para realizar o cadastro.");
}