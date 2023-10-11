'use strict'


/**  Menu  **/
const openMenuBtn = document.getElementById('open-menu-btn')
const closeMenuBtn = document.getElementById('close-menu-btn')
const menu = document.getElementById('menu')
const bodyChange = document.getElementById('body')

const openMenu = function(){
    menu.classList.add('active')
    bodyChange.classList.add('change')
}

const closeMenu = function(){
    menu.classList.remove('active')
    bodyChange.classList.remove('change')
}

openMenuBtn.addEventListener('click', openMenu)
closeMenuBtn.addEventListener('click', closeMenu)
/**   **/


/** Botão - Gerar versículo aleatório **/
const buttonRandomVerse = document.getElementById('btnGenerateRandomVerse')

const getRandomVerse = async function(){
    const url = 'https://www.abibliadigital.com.br/api/verses/nvi/random'
    const response = await fetch(url)
    const returnVerse = await response.json()
    return returnVerse
}

const showRandomVerse = async function(){
    const showVerses = document.getElementById('aparecer-versiculo')

    const btnGenerateRandomVerse = await getRandomVerse(buttonRandomVerse.value)

    showVerses.value = `Livro: ${btnGenerateRandomVerse.book.name}\nCapítulo: ${btnGenerateRandomVerse.chapter}\n Versículo: ${btnGenerateRandomVerse.number}\n Texto: ${btnGenerateRandomVerse.text}`
}

buttonRandomVerse.addEventListener('click', showRandomVerse)
/**   **/


/** Pesquisa **/
const inputPesquisar = document.getElementById('pesquisar')

const getBooks = async function(books){
    const url = `https://www.abibliadigital.com.br/api/${books}/`
    const response = await fetch(url)
    const returnBook = await response.json()
    console.log(returnBook)
    return returnBook
}

inputPesquisar.addEventListener('click', getBooks)
