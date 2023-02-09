'use strict'
const numero1 = document.getElementById('nota1')
const numero2 = document.getElementById('nota2')
const buttonCalcular = document.getElementById('calcular')
const resultado = document.getElementById('resultado')
const formulario = document.getElementById('formulario')
const aprovado = 'Aprovado'
const reprovado = 'Reprovado'
const erro = 'ERRO'

function somar(){
    resultado.value =( Number(nota1.value) + Number(nota2.value)) / 2

    if (resultado.value < 5){
        formulario.classList.add('sombra-Vermelha')
        notaFinal.value = reprovado
    } else if (resultado.value < 0 || resultado.value > 10) {
        formulario.classList.add('sombra-Amarela')
    } else {
        formulario.classList.toggle('sombra-Azul')
        notaFinal.value = aprovado
    }
}

calcular.addEventListener('click', somar)