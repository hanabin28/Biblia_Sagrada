'use strict'

const openMenuBtn = document.getElementById('open-menu-btn')
const closeMenuBtn = document.getElementById('close-menu-btn')
const menu = document.getElementById('menu')

const openMenu = function(){
    menu.classList.add('active')    
}

const closeMenu = function(){
    menu.classList.remove('active')
}

openMenuBtn.addEventListener('click', openMenu)
closeMenuBtn.addEventListener('click', closeMenu)


const buttonRandomVerse = document.getElementById('btn-generate-random-verse')
const inputPesquisar = document.getElementById('pesquisar')
