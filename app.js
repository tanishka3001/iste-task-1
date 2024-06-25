const bars= document.getElementById('bars');
const menu= document.getElementById('menu');
const close=document.getElementById('close');
function openmenu(){
    menu.classList.remove('hidden');
    menu.classList.add('visible');
    bars.classList.add('hidden');
    close.classList.remove('hidden');
    close.classList.add('visible');
}
function closemenu(){
    menu.classList.remove('visible');
    menu.classList.add('hidden');
    bars.classList.remove('hidden');
    bars.classList.add('visible');
    close.classList.remove('visible');
    close.classList.add('hidden');
}
bars.addEventListener('click',openmenu);
close.addEventListener('click',closemenu);