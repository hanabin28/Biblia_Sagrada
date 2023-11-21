'use strict'


/**  Menu  **/
const openMenuBtn = document.getElementById('open-menu-btn')
const closeMenuBtn = document.getElementById('close-menu-btn')
const menu = document.getElementById('menu')
const bodyChange = document.getElementById('body')

const openMenu = function () {
    menu.classList.add('active')
    bodyChange.classList.add('change')
}

const closeMenu = function () {
    menu.classList.remove('active')
    bodyChange.classList.remove('change')
}

openMenuBtn.addEventListener('click', openMenu)
closeMenuBtn.addEventListener('click', closeMenu)

/** Menu - dropdown **/
// const dropdown = document.getElementById('dropdown')
// const subMenu = document.getElementById('sub-menu')

// const openSubMenu = function () {
//     subMenu.classList.add('show')
// }

// dropdown.addEventListener('click', openSubMenu)

/**   **/


/** Botão - Gerar versículo aleatório **/
const buttonRandomVerse = document.getElementById('btnGenerateRandomVerse')

const getRandomVerse = async function () {
    const url = 'https://www.abibliadigital.com.br/api/verses/nvi/random'
    const response = await fetch(url)
    const returnVerse = await response.json()
    return returnVerse
}

const showRandomVerse = async function () {
    const showVerses = document.getElementById('aparecer-versiculo')

    const btnGenerateRandomVerse = await getRandomVerse(buttonRandomVerse.value)

    showVerses.value = `Livro: ${btnGenerateRandomVerse.book.name}\nCapítulo: ${btnGenerateRandomVerse.chapter}\n Versículo: ${btnGenerateRandomVerse.number}\n Texto: ${btnGenerateRandomVerse.text}`
}

buttonRandomVerse.addEventListener('click', showRandomVerse)
/**   **/


/** Pesquisa por livro **/
const inputPesquisar = document.getElementById('pesquisar')

const getBooks = async function (books) {
    const url = `https://www.abibliadigital.com.br/api/books/${books}`
    const response = await fetch(url)
    const returnBook = await response.json()
    return returnBook
}

const showBooks = async function () {
    const showBooks = document.getElementById('aparecer-versiculo')
    const books = await getBooks(inputPesquisar.value)

    showBooks.value = `Livro: ${books.name}\n Abreviação: ${books.abbrev.pt}\nAutor: ${books.author}\nCapítulos: ${books.chapters}\n${books.testament}\nGrupo: ${books.group}\n${books.comment}`
}

inputPesquisar.addEventListener('keypress', (event) => {
    if (event.code === 'Enter') {
        showBooks()
    }
})
/**   **/


/** Pesquisa - livro + capítulo **/
const getChapter = async function (chapter) {
    const gChapter = chapter.split(" ", 2);
    const url = `https://www.abibliadigital.com.br/api/verses/nvi/${gChapter[0]}/${gChapter[1]}`;
    const response = await fetch(url);
    const returnChapter = await response.json();
    return returnChapter; 
}

const showChapter = async function () {
    const inputPesquisarCapitulo = document.getElementById('capitulo').value;
    const showChapterElement = document.getElementById('aparecer-versiculo');
    
    const chapter = await getChapter(inputPesquisarCapitulo);
    showChapterElement.value = `Livro: ${chapter.book.name}\n Capítulo: ${chapter.chapter.number}\n`;
}

const inputPesquisarCapitulo = document.getElementById('capitulo');

inputPesquisarCapitulo.addEventListener('keypress', (event) => {
    if (event.code === 'Enter') {
        showChapter()
    }
})

// inputPesquisarCapitulo.addEventListener('blur', showChapter);
