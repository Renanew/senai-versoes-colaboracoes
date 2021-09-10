const peca = ['A','Alicate','Ala'];
var peso = 100;
var quantidadeDePeca = 10;

for(let i=0; i<peca.length; i++){
    if(peca[i].length<3){
       // console.log(Peça[i]);
        console.log("Peça "+ peca[i] + " não cadastrada, pois caracteres é inferior a 3. ");
        console.log("");
    }
        else {
        console.log("Peça cadastrada: " +peca[i]);
        console.log("");
        }
}

if (peso>100){
    console.log("Pode realizar o cadastro da peça devido a peso ser "+ peso +" gramas.");
    console.log("");
    }
    else {
    console.log("Cadastro não realizado devido ao peso ser "+ peso +" gramas.");
    console.log("");
    } 
if (quantidadeDePeca>10){
    console.log("Capacidade "+ quantidadeDePeca +" insuficiente para realizar o cadastro.");
}
    else {
    console.log("Capacidade "+ quantidadeDePeca + " suficiente para realizar o cadastro.");
}