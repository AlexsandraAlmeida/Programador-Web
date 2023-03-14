function inserir_dados(){
    var nome = window.prompt("Digite o seu nome:")
    var idade = window.prompt("Digite a sua idade:")
    var nascimento = window.prompt("Digite o seu ano de nascimento:")

    var dados_cliente = document.querySelector("section#mostrar_dados")
    dados_cliente.innerHTML = `<p>Seja bem vindo(a) <strong>${nome}</strong>!<br> Você tem <strong>${idade}</strong> anos e nasceu em <strong>${nascimento}</strong><br>
    <span style="font-size:80px">&#x1F609;</span>
    </p>`
}