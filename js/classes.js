let aside = document.getElementById('aside');
let drawerHandler = document.getElementById('drawerHandler');
let mainContainer = document.getElementById('main');
drawerHandler.addEventListener('click', toggleDrawer);

function toggleDrawer(){
    aside.classList.toggle('close');
    mainContainer.classList.toggle('expand');
}