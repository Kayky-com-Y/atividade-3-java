const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function TransformarSegundos(segundos){
    let horas = Math.floor(segundos / 3600)
    segundos -= horas * 3600
    let minutos = Math.floor(segundos / 60)
    segundos -= minutos * 60
    return `${horas}h ${minutos}min ${segundos}s`
}

function TransformarCelciosFahrenheitKelvin(celsius){
    let fahrenheit = (celsius * 9 / 5) + 32
    let kelvin = celsius + 273.15
    return `Celsius: ${celsius} - Fahrenheit: ${fahrenheit} - Kelvin: ${kelvin}`
}

function CalcularPedido(valor, quantidade){
    let subtotal = valor * quantidade;

    if (subtotal > 300){
        return `Você comprou ${quantidade} produtos no valor de R$${subtotal} e pagou R$${subtotal * 0.9} com um desconto de 10%`
    }
    else if (subtotal > 100){
        return `Você comprou ${quantidade} produtos no valor de R$${subtotal} e pagou R$${subtotal * 0.95} com um desconto de 5%`
    }
    else{
        return `Você comprou ${quantidade} produtos no valor de R$${subtotal} e pagou R$${subtotal} sem desconto`;
    }
}

function Obrigacoes(anoNascimento, sexo){
    let anoAtual = new Date().getFullYear()
    let idade = anoAtual - anoNascimento

    if (idade >= 18 && sexo == "M"){
        return `Idade: ${idade}. Você pode votar, o voto é obrigatório e deve se alistar`
    }
    else if (idade >= 18){
        return `Idade: ${idade}. Você pode votar, o voto é obrigatório e não precisa se alistar`
    }
    else if (idade >= 16){
        return `Idade: ${idade}. Você pode votar, mas o voto não é obrigatório e não precisa se alistar`
    }
    else{
        return `Idade: ${idade}. Você não pode votar e não precisa se alistar`
    }
}

function Calculadora(valor1, valor2, operação){
    switch (operação){
        case "+":
            return `O resultado da soma de ${valor1} e ${valor2} é ${valor1 + valor2}`
        case "-":
            return `O resultado da subtração de ${valor1} e ${valor2} é ${valor1 - valor2}`
        case "*":
            return `O resultado da multiplicação de ${valor1} e ${valor2} é ${valor1 * valor2}`
        case "/":
            if (valor2 == 0){
                return "Não é possível dividir por zero"
            }
            return `O resultado da divisão de ${valor1} e ${valor2} é ${valor1 / valor2}`
        default:
            return "Operação inválida"
    }
}

function IMC(peso, altura){
    let imc = peso / (altura * altura)

    if (imc < 18.5){
        return "Abaixo do peso"
    }
    else if (imc < 25){
        return "Peso normal"
    }
    else if (imc < 30){
        return "Sobrepeso"
    }
    else{
        return "Obesidade"
    }
}

function PedraPapelTesoura(jogador1, jogador2){
    if (jogador1 == jogador2){
        return "Empate"
    }

    if (
        (jogador1 == "pedra" && jogador2 == "tesoura") ||
        (jogador1 == "tesoura" && jogador2 == "papel") ||
        (jogador1 == "papel" && jogador2 == "pedra")
    ){
        return "Jogador 1 ganhou"
    }

    return "Jogador 2 ganhou"
}

function Palindromo(frase){
    frase = frase.toLowerCase()
    frase = frase.replaceAll(" ", "")

    let fraseInvertida = ""

    for (let i = frase.length - 1; i >= 0; i--){
        fraseInvertida += frase[i]
    }

    if (frase == fraseInvertida){
        return "É um palíndromo"
    }
    else{
        return "Não é palíndromo"
    }
}

function NotasDaTurma(notas){
    let media = 0
    let maior = notas[0]
    let menor = notas[0]

    for (let i = 0; i < notas.length; i++){
        media += notas[i]

        if (notas[i] > maior){
            maior = notas[i]
        }

        if (notas[i] < menor){
            menor = notas[i]
        }
    }

    media /= notas.length

    return `Maior nota: ${maior} - Menor nota: ${menor} - Media: ${media}`
}

function Fibonacci(n){
    let primeiro = 0
    let segundo = 1

    for (let i = 0; i < n; i++){
        let proximo = primeiro + segundo
        primeiro = segundo
        segundo = proximo
    }

    return primeiro
}

function RegrasDeSenha(senha){
    let regrasNaoCumpridas = []

    if (senha.length < 8){
        regrasNaoCumpridas.push("A senha deve ter pelo menos 8 caracteres")
    }

    if (!/[A-Z]/.test(senha)){
        regrasNaoCumpridas.push("A senha deve ter pelo menos uma letra maiúscula")
    }

    if (!/[0-9]/.test(senha)){
        regrasNaoCumpridas.push("A senha deve ter pelo menos um número")
    }

    if (regrasNaoCumpridas.length == 0){
        return "Senha válida"
    }

    return regrasNaoCumpridas
}

function Produto(nome, preco, quantidade){
    this.nome = nome
    this.preco = preco
    this.quantidade = quantidade
}

function ValorTotalEstoque(produtos){
    let total = 0

    for (let i = 0; i < produtos.length; i++){
        total += produtos[i].preco * produtos[i].quantidade
    }

    return total
}

function ProdutoMaisCaro(produtos){
    let produtoMaisCaro = produtos[0]

    for (let i = 1; i < produtos.length; i++){
        if (produtos[i].preco > produtoMaisCaro.preco){
            produtoMaisCaro = produtos[i]
        }
    }

    return produtoMaisCaro
}

function ProdutosAbaixoDoMinimo(produtos, minimo){
    let produtosAbaixoDoMinimo = []

    for (let i = 0; i < produtos.length; i++){
        if (produtos[i].quantidade < minimo){
            produtosAbaixoDoMinimo.push(produtos[i])
        }
    }

    return produtosAbaixoDoMinimo
}

function Estoque(){
    let produto = [];

    function adicionarProduto(nome, preco, quantidade){
        let novoProduto = new Produto(nome, preco, quantidade);
        produto.push(novoProduto);
    }

    adicionarProduto("Banana", 10, 20);
    adicionarProduto("Maçã", 8, 0);
    adicionarProduto("Melancia", 15, 5);

    let continuar = true;

    function menuEstoque(){
        if (!continuar){
            menu();
            return;
        }

        rl.question("Digite 1 para ver a quantidade total de produtos no estoque. Digite 2 para encontrar o produto mais caro. Digite 3 para listar todos os produtos com preço abaixo de um valor informado. Digite 4 para sair: ", (opcao) => {

            if (opcao == 1){
                let quantidadeTotal = 0;

                for (let i = 0; i < produto.length; i++){
                    quantidadeTotal += produto[i].quantidade;
                }

                console.log(`Quantidade total de produtos: ${quantidadeTotal}`);
            }
            else if (opcao == 2){
                let produtoMaisCaro = produto[0];

                for (let i = 0; i < produto.length; i++){
                    if (produto[i].preco > produtoMaisCaro.preco){
                        produtoMaisCaro = produto[i];
                    }
                }

                console.log(`Produto mais caro: ${produtoMaisCaro.nome} - Preço: ${produtoMaisCaro.preco}`);
            }
            else if (opcao == 3){
                rl.question("Digite o valor para listar os produtos abaixo dele: ", (valor) => {
                    let produtosAbaixoDoValor = [];

                    for (let i = 0; i < produto.length; i++){
                        if (produto[i].preco < Number(valor)){
                            produtosAbaixoDoValor.push(produto[i]);
                        }
                    }

                    console.log(`Produtos abaixo do valor ${valor}:`);

                    for (let i = 0; i < produtosAbaixoDoValor.length; i++){
                        console.log(`${produtosAbaixoDoValor[i].nome} - Preço: ${produtosAbaixoDoValor[i].preco}`);
                    }

                    menuEstoque();
                });

                return;
            }
            else if (opcao == 4){
                continuar = false;
                menu();
                return;
            }

            menuEstoque();
        });
    }

    menuEstoque();
}

function Contato(nome, telefone, categoria){
    this.nome = nome;
    this.telefone = telefone;
    this.categoria = categoria;
}

function AgendaDeContatos(){
    let contatos = [];

    function adicionarContato(nome, telefone, categoria){
        let novoContato = new Contato(nome, telefone, categoria);
        contatos.push(novoContato);
    }

    function RemoverContato(nome){
        for (let i = 0; i < contatos.length; i++){
            if (contatos[i].nome == nome){
                contatos.splice(i, 1);
                return `Contato ${nome} removido com sucesso`;
            }
        }

        return `Contato ${nome} nao encontrado`;
    }

    function ListarContatos(categoria){
        let contatosCategoria = [];

        for (let i = 0; i < contatos.length; i++){
            if (contatos[i].categoria == categoria){
                contatosCategoria.push(contatos[i]);
            }
        }

        for (let i = 0; i < contatosCategoria.length; i++){
            console.log(`Nome: ${contatosCategoria[i].nome} - Telefone: ${contatosCategoria[i].telefone}`);
        }
    }
}

function ValoresUnicos(numeros){
    let unicos = []

    for (let i = 0; i < numeros.length; i++){
        if (!unicos.includes(numeros[i])){
            unicos.push(numeros[i])
        }
    }

    return unicos
}

class ProdutoEstoque{
    constructor(nome, preco, quantidade){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    aplicarDesconto(porcentagem){
        this.preco = this.preco - (this.preco * porcentagem / 100)
    }

    estaDisponivel(){
        return this.quantidade > 0
    }
}

let produto1 = new ProdutoEstoque("Banana", 10, 20)
let produto2 = new ProdutoEstoque("Maçã", 8, 0)
let produto3 = new ProdutoEstoque("Melancia", 15, 5)

class ContaBancaria{
    constructor(titular, saldo){
        this.titular = titular
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
        return true
    }

    sacar(valor){
        if (valor > this.saldo){
            return false
        }

        this.saldo -= valor
        return true
    }

    extrato(){
        return `${this.titular} tem em sua conta R$${this.saldo}`
    }
}

class Retangulo{
    constructor(base, altura){
        this.base = base
        this.altura = altura
    }

    calcularArea(){
        return this.base * this.altura
    }

    calcularPerimetro(){
        return 2 * (this.base + this.altura)
    }
}

function menu(){
    rl.question(`
        Digite o número do problema que deseja executar:

        1 - Transformar segundos
        2 - Celsius, Fahrenheit e Kelvin
        3 - Produto com desconto
        4 - Idade e obrigações
        5 - Calculadora
        6 - IMC
        7 - Pedra, Papel e Tesoura
        8 - Palíndromo
        9 - Notas da turma
        10 - Fibonacci
        11 - Regras de senha
        12 - Estoque
        13 - Agenda e valores únicos
        14 - Classe Produto
        15 - Conta Bancária
        16 - Retângulo
        0 - Sair

        Digite sua escolha: `, (opcao) => {

        switch (opcao){
            case "1":
                rl.question("Digite a duração em segundos: ", (segundos) => {
                    console.log(TransformarSegundos(Number(segundos)));
                    menu();
                });
                break

            case "2":
                rl.question("Digite a temperatura em Celsius: ", (celsius) => {
                    console.log(TransformarCelciosFahrenheitKelvin(Number(celsius)));
                    menu();
                });
                break

            case "3":
                rl.question("Digite o valor do produto: ", (valor) => {
                    rl.question("Digite a quantidade comprada: ", (quantidade) => {
                        console.log(CalcularPedido(Number(valor), Number(quantidade)));
                        menu();
                    });
                });
                break

            case "4":
                rl.question("Digite o ano de nascimento: ", (anoNascimento) => {
                    rl.question("Digite o sexo (M/F): ", (sexo) => {
                        console.log(Obrigacoes(Number(anoNascimento), sexo));
                        menu();
                    });
                });
                break

            case "5":
                rl.question("Digite o primeiro número: ", (valor1) => {
                    rl.question("Digite o segundo número: ", (valor2) => {
                        rl.question("Digite a operação (+, -, *, /): ", (operacao) => {
                            console.log(Calculadora(Number(valor1), Number(valor2), operacao));
                            menu();
                        });
                    });
                });
                break

            case "6":
                rl.question("Digite o peso: ", (peso) => {
                    rl.question("Digite a altura: ", (altura) => {
                        console.log(IMC(Number(peso), Number(altura)));
                        menu();
                    });
                });
                break

            case "7":
                rl.question("Jogador 1, escolha pedra, papel ou tesoura: ", (jogador1) => {
                    rl.question("Jogador 2, escolha pedra, papel ou tesoura: ", (jogador2) => {
                        console.log(PedraPapelTesoura(jogador1, jogador2));
                        menu();
                    });
                });
                break

            case "8":
                rl.question("Digite uma frase: ", (frase) => {
                    console.log(Palindromo(frase));
                    menu();
                });
                break

            case "9":
                rl.question("Digite as notas separadas por espaço: ", (entrada) => {
                    let notas = entrada.split(" ").map(Number);
                    console.log(NotasDaTurma(notas));
                    menu();
                });
                break

            case "10":
                rl.question("Digite o número do termo de Fibonacci: ", (n) => {
                    console.log(Fibonacci(Number(n)));
                    menu();
                });
                break

            case "11":
                rl.question("Digite a senha: ", (senha) => {
                    console.log(RegrasDeSenha(senha));
                    menu();
                });
                break

            case "12":
                Estoque();
                break

            case "13":
                rl.question("Digite números separados por espaço: ", (entrada) => {
                    let numeros = entrada.split(" ").map(Number);
                    console.log(ValoresUnicos(numeros));
                    menu();
                });
                break

            case "14":
                produto1.aplicarDesconto(20)
                produto3.aplicarDesconto(10)

                console.log(produto1.preco)
                console.log(produto1.estaDisponivel())
                console.log(produto2.estaDisponivel())
                console.log(produto3.preco)
                console.log(produto3.estaDisponivel())

                menu();
                break

            case "15":
                let conta1 = new ContaBancaria("Kayky", 1000)
                let conta2 = new ContaBancaria("João", 500)

                conta1.depositar(200)
                conta1.sacar(300)

                conta2.depositar(100)
                conta2.sacar(50)

                console.log(conta1.extrato())
                console.log(conta2.extrato())

                menu();
                break

            case "16":
                rl.question("Digite a base: ", (base) => {
                    rl.question("Digite a altura: ", (altura) => {
                        let retangulo = new Retangulo(Number(base), Number(altura))

                        console.log(`Área: ${retangulo.calcularArea()}`)
                        console.log(`Perímetro: ${retangulo.calcularPerimetro()}`)

                        menu();
                    });
                });
                break

            case "0":
                console.log("Programa encerrado.")
                rl.close()
                break

            default:
                console.log("Opção inválida.")
                menu()
        }
    });
}

menu()