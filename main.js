const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 7;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if (tamanhoSenha > 1){
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha(); 
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha; 
    geraSenha(); 
}
const campoSenha = document.querySelector('#campo-senha')
const checkbox = document.querySelectorAll('.checkbox')

for (i=0 < checkbox.lenght;i++) {
    checkbox[i].onclick = geraSenha 

}
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz'
const simbolos = '@#$%&*'
const numeros ='1234567890'
geraSenha(); 


function geraSenha(){
    let alfabeto ='';
    if (checkbox[0].checked) {
    alfabeto = alfabeto + letrasMaiusculas;
}
if (checkbox[1].checked) {
    alfabeto = alfabeto + letrasMinusculas;
}
if (checkbox[2].checked) {
    alfabeto = alfabeto + numeros;
}
if (checkbox[3].checked) {
    alfabeto = alfabeto + simbolos;
}

    let senha = '';
    for (let i = 0; i < tamanhoSenha;i++){
    let numeroAleatorio = Math.random()*alfabeto.length;
    numeroAleatorio = math.floor(numeroAleatorip)
    senha = senha + alfabeto [numeroAleatorio]
}
campoSenha.value = senha; 
 }

 