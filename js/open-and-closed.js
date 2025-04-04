function openMenu() {
    document.getElementById('menu').style.display = 'flex'
    document.getElementById('header').style.display = 'none'
}

function closeMenu() {
    document.getElementById('menu').style.display = 'none'
    document.getElementById('header').style.display = 'flex'
}

function openSearch() {
    document.getElementById('search').style.display = 'flex'
    document.getElementById('header').style.display = 'none'
}

function closeSearch() {
    document.getElementById('search').style.display = 'none'
    document.getElementById('header').style.display = 'flex'
}

function consultoria() {
    document.getElementById('tab-consultoria').style.display = 'flex'
    document.getElementById('tab-serviço').style.display = 'none'
}

function serviço() {
    document.getElementById('tab-serviço').style.display = 'flex'
    document.getElementById('tab-consultoria').style.display = 'none'
}

function openModal(){
    document.getElementById('modal').style.display = 'flex'
}
  
function closeModal(){
    document.getElementById('modal').style.display = 'none'
}