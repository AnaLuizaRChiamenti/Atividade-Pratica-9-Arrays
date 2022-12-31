/* 1. Desenvolva um algoritmo para percorrer um vetor de 15 elementos
inteiros já preenchido e imprima todos os valores pares. */


function exercicio1() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    const result = numeros.filter((valor, indice, array) => valor % 2 === 0)

    console.log(result)
}

/* 2. Desenvolva um algoritmo para percorrer um vetor de 20 elementos
inteiros e no final mostre a soma de todos os elementos. */

function exercicio2() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    numeros.forEach(function (numeros) {
        const soma1 = soma(numeros)
        console.log(soma1)
    })
}

function soma(numeros) {
    let soma = numeros + numeros;
    return soma;
}

/* 6. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
e que exiba a lista desses nomes na tela. Após exibir essa lista, o
programa deve mostrar também os nomes na ordem inversa em
que o usuário os digitou.

Ex:
Entrada: Édson, Marcelo, Letícia, Ju, Thobias
Saída: Thobias, Ju, Letícia, Marcelo, Édson */

function exercicio6() {
    let lista = []

    for (let contador = 1; contador <= 5; contador++) {
        let nome = prompt("Digite um nome: ")

        lista.unshift(nome)
    }

    console.log(lista)

    for (let contador = lista.length - 1; contador >= 0; contador--) {
        console.log(lista[contador])
    }
}

/* 3. Desenvolva um algoritmo que preenche um vetor com os 4
primeiros números perfeitos. */

function exercicio3() {
    let numeroPerfeito = []
    let contador = 1;
    do {
        let retorno = verificaPerfeito(contador)
        if (retorno) {
            numeroPerfeito.push(contador)
        }

        contador++
    } while (numeroPerfeito.length <= 3)

    console.log(`FOR ${numeroPerfeito}`)

}

function verificaPerfeito(numero) {
    //a soma dos dividores deve ser igual ao numero verificado
    let soma = 0;

    for (let contador = 1; contador < numero; contador++) {
        if (numero % contador === 0) {
            soma += contador;
        }
    }

    if (soma === numero) {
        return true;
    } else {
        return false;
    }
}

/* 4. Crie uma função que recebe 2 vetores de 10 elementos inteiros e que
retorne a união dos dois em um novo vetor. */

function exercicio4() {
    let lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let lista2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    unirArray(lista1, lista2)
}

function unirArray(lista1, lista2){
    const uniao = [];
    for (let contador = 0; contador < lista1.length; contador++){
        uniao.push(lista1[contador])
    }
    for (let contador = 0; contador < lista2.length; contador++){
        uniao.push(lista2[contador])
    }

    document.write(uniao)
}

/* 5. Crie uma função que recebe um vetor de inteiros e um número
inteiro e retorne verdadeiro se o número faz parte do vetor ou falso
se não faz parte. */

function exercicio5() {
    let lista = [1, 12, 33, 54, 32, 67, 32, 14, 9]
    let numeroInteiro = Number(prompt("Digite um numero inteiro: "))

    let numero = verificarNumeroLista(lista, numeroInteiro)

    if (numero){
        document.write("O valor faz parte da lista.")
    } else {
        document.write("O valor não faz parte da lista.")
    }
    
}

function verificarNumeroLista(lista, numero) {
    
    const numeroVerificado = lista.find( (valor, indice, array) => valor == numero)
    if(numeroVerificado == numero){
        return true;
    } else {
        return false;
    }

}