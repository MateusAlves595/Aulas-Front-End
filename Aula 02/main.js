'use strict'

const adicionar = document.getElementById('adicionar')

const adicionarCard = (nome, nota) => {
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    const notaAluno = nota
    const nomeAluno = nome
    novaDiv.classList.add('aluno')
    novaDiv.innerHTML = `<h2 class="aluno_nome">${nomeAluno}<h2>
                         <spam class="aluno_nota">${notaAluno}<spam>`

    if(notaAluno == '' || nomeAluno == ''){
        alert('Você deve dígitar todos os requisitos')
    } else if(isNaN(notaAluno)){
        alert('Você deve dígitar a nota corretamente')
    } else {
        if (notaAluno < 5) {
            novaDiv.classList.add('vermelho')
        } else {
            novaDiv.classList.add('azul')
        }
        container.appendChild(novaDiv)
    }
    
}

const handleClick = () => {
    const nome = prompt("Digite o nome do Aluno")
    const nota = prompt("Dígite a nota")
    adicionarCard(nome, Number(nota))
}

adicionar.addEventListener('click', handleClick)

