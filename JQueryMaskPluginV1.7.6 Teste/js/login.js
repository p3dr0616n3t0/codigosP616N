function entrar(){
	var nome = document.getElementById('user').value; // valor do primeiro input
	var password = document.getElementById('senha').value; // valor do segundo input
	var tamanho = password.length; // tamanho da string do primeiro input
	var contador = 0;

	while(contador<tamanho){
		if (password[contador]=="3") {
			alert("Não pode digitar o caractere 3");
			break; // da um break caso encontre algum caracter 3 na senha
		}
		contador++;
	}

	if (password.length<8) {
		alert("A senha deve conter no mínimo 8 caracteres");
		// document.getElementById('senha').focus();
	} else if(nome.length == 0){
		alert("Digite o nome do usuário");
	} else {
		alert("ERROOOOOOU!");
	}

}

//function fff(elemento){
//	elemento.style.backgroundColor = "black";
//	elemento.style.color = "white";
//}

//function fff2(elemento){
//	elemento.style.backgroundColor = "white";
//	elemento.style.color = "black";
//}


// implementar
function validacao() {}