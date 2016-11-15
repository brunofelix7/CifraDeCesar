function criptografar(){ 
    // Variável para guardar a frase escrita pelo usuário
    var frase = ""; 
    // Array com o alfabeto
    var alfa = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
    // Pega o valor escrito no input do HTML, caso sejam maiúsculas a função toLowerCase() converte para minúsculas
    var frase = document.getElementById('encrypt').value.toLowerCase();  
    // Pede a chave ao usuário
    var chave = prompt("Chave:");   
    // Converte o valor inserido para inteiro
    var x = parseInt(chave);    
    // Array vazio para guardar a frase criptografada
    var vetorCript = []; 
    // Gera a criptografia percorrendo o Array alfa de acordo com a chave passada e joga no Array vazio
    for (var i = 0; i < frase.length; i++){     
        if(frase[i] != ' '){                    
            for (var j = 0; j < alfa.length; j++){
                if (frase[i] == alfa[j]){
                    vetorCript[i] = alfa[(j + x) % alfa.length];
                    break;
                }
            }
        }else{
            vetorCript[i] = ' ';
        }
    }
    // Junta os caracteres e mostra na na área resultado o resultado do texto criptografado
    return document.getElementById('resultado').innerHTML = vetorCript.join("");
}


function descriptografar(){
    var frase = "";
    var alfa = ["a","b","c","d","e","f","g","h","i","j","k","l","m", 
                "n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
    var frase = document.getElementById('deprypt').value.toLowerCase();
    var chave = prompt("Chave:");
    var x = parseInt(chave);
    var vetorCript = [];

    for (var i = 0; i < frase.length; i++){
        if(frase[i] != ' '){
            for (var j = 0; j < alfa.length; j++){
                if (frase[i] == alfa[j]){
                    vetorCript[i] = alfa[(j - x) % alfa.length]; // Percorre o array de maneira inversa com a chave informada
                    break;
                }
            }
        }else{
            vetorCript[i] = ' ';
        }
    }
    return document.getElementById('resultado').innerHTML = vetorCript.join("");
}