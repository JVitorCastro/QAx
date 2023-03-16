console.log('Olá, JavaScript!')

var userName = 'João Vitor'

console.log(userName)

document.getElementById('user-name').innerHTML = userName

// Variáveis

// var nome = 'Mestre Yoda'
// var idade = 100
// var jedi = true

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof jedi)

// Operadores Matemáticos

// var n1 = 5
// var n2 = '5'
//
// total = n1 + parseInt(n2)
// console.log(total)

// Operadores de Comparação
// === compara valor e tipo
// == compara apenas valor
// != diferente sem avaliar o tipo
// !== diferente avaliando o tipo

// var v1 = 5
// var v2 = 5
//
// var resultado = v1 === v2

// Funções

// function soma(n1, n2) {
//     console.log(n1 + n2)
// }

// function boasVindas() {
//     alert('Sejam bem vindos')
// }


// Controle de Fluxos - BDD, desenvolvimento guiado a comportamento

// Sendo um cliente correntista do banco
// Posso sacar dinheiro em caixar eletrônicos
// Para pode comprar em lugares que não aceitam cartões

// Cenário 1: Saque com sucesso
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 500 reais
// Então o valor do saque deve ser deduzido do meu saldo

// Cenario 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 1001 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo



// var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']
//
// console.log(gaveteiro)

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']
// console.log(typeof personagens)
// personagens.push('C3PO')
// personagens.push('R2D2')
// personagens.pop()

// // Essa função retorna true quando 'p' é igual a Darth Vader
// function procura(p) {
//     return p !== 'Darth Vader'
// }
//
// // O filter aplica a função 'procura' à lista 'personagens'
// // Observe que o filter se encarrega de usar cada item da lista como um argumento para a função
// personagens = personagens.filter(procura)

// personagens = personagens.filter(function (p) {
//     return p !== 'Darth Vader'
// })
// console.log(personagens)

// Controle de repetição (Loops)

var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

// personagens.forEach(function (p) {
//     console.log(p)
// })

// for (var i in personagens) {
//     console.log(personagens[i])
// }

// for(var i = 0; i <=10; i++) {
//     console.log(i)
// }


// Objetos
// Em nome de funções use cameoCase
// var yoda = {
//     nome: 'Mestre Yoda',
//     idade: 100,
//     jedi: true
//     mostraIdade: function () {
//         console.log(`A idade do ${this.nome} é ${this.idade} anos.`)
//     }
// }
//
// yoda.mostraIdade()

// yoda.nome = 'Mestre Yoda'
// yoda.idade = 100
// yoda.jedi = true

// Constantes

// const nome = 'Darth Vader'
// console.log(nome)
//
// nome = 'Mestre Yoda'
// console.log(nome)







