var dataDoEvento = 15/09/2021;
// variavel de entrada da data de Evento
var dataDaInscricao = 20/09/2021;
//variavel de entrada da data da Inscrição
var idade = 15;
// variavel de entrada da data de inscrição

var cadastro =102;
// variavel de entrada de numero de cadastro já realizado

if (cadastro<100){
    // condição para cadastro ser menor que 100
for(let i=cadastro; i<100; i++){
   // condição de repetição que irá repetir o comando até completar 100 cadastro
        console.log("Cadastro "+cadastro+ " realizado");
        //Comando para imprimir o cadastro
        cadastro=cadastro+1
        // condição de repetição
    }
}else{
        console.log("Cadastro não permitido devido ao numero de cadastro já realizado.")
    // se cadastro for maior que 100 não vai permirtir e mostrar esta mensagem.
    }
 

if (dataDaInscricao<=dataDoEvento){
    console.log("Cadastro permitido!");
}
    else{
        console.log("Cadastro negado devido a data do evento!");
    }
//comando para ver se data do evento é inferior a data cadastrada.


if (idade>= 18){
    console.log("Cadastro realizado, idade permitida para o evento!");
}
    else{
        console.log("Cadastro negado devido a sua idade!")
    }