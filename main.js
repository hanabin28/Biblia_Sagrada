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


/** Pesquisa por livro **/
const inputPesquisar = document.getElementById('pesquisar')

const getBooks = async function(books){
    const url = `https://www.abibliadigital.com.br/api/books/${books}`
    const response = await fetch(url)
    const returnBook = await response.json()
    return returnBook
}

const showBooks = async function(){
    const showBooks = document.getElementById('aparecer-versiculo')
    const books = await getBooks(inputPesquisar.value)

    showBooks.value = `Livro: ${books.name}\n Abreviação: ${books.abbrev.pt}\nAutor: ${books.author}\nCapítulos: ${books.chapters}\n${books.testament}\nGrupo: ${books.group}\n${books.comment}`
}

// inputPesquisar.addEventListener('blur', showBooks)
inputPesquisar.addEventListener('keypress', (event) =>{
    if (event.code === 'Enter') {
        showBooks()
    }
})
/**   **/


/** Pesquisa - livro + capítulo **/
const getChapter = async function(chapter){
    const url = `https://www.abibliadigital.com.br/api/verses/nvi/gn/${chapter}`
    const response = await fetch(url)
    const returnChapter = await response.json()
    console.log(returnChapter)
    return returnChapter
}

const showChapter = async function(){
    const showChapter = document.getElementById('aparecer-versiculo')
    const chapter = await getChapter(inputPesquisar.value)

    showChapter.value = chapter.book.name
    showChapter.value = chapter.verses[5].text
    
}

inputPesquisar.addEventListener('blur', showChapter)