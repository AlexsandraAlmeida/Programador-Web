function questionario01() {
    
    var primeiro_nome = prompt("Olá. Insira o seu primeiro nome: ");    
    var ultimo_nome = prompt("Digite agora o seu ultimo nome: ");
    var idade = prompt("Digite a sua idade: ");
        
    if (idade <= 18){
        alert("Ola " + primeiro_nome + " " + ultimo_nome + ", tem " + idade + " anos e não é maior de idade.");
    }else{
        alert("Ola " + primeiro_nome + " " + ultimo_nome + ", tem " + idade + " anos e é maior de idade.");
    }
}