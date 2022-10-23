const galleryItem = document.querySelectorAll('.grid-items__item'),
    closseButtons = document.querySelectorAll('.close'),
    opacityButtons = document.querySelectorAll('.opacity'),
    popup = document.querySelector('.popup'),
    galleryName = document.querySelectorAll('.name'),
    btnPopapSave = document.querySelector('.popup__btn-save'),
    btnPopapClose = document.querySelector('.popup__btn-cancellation'),
    popupInput = document.querySelector('.popup__input'),
    sizeMinus = document.querySelectorAll('.size-minus'),
    sizePluse = document.querySelectorAll('.size-pluse');
let nameGange = null;
galleryItem.forEach((e)=> {
    e.addEventListener('mouseover', ()=>{
        e.classList.add('gallery-item')
    })
    e.addEventListener('mouseout', ()=>{
        e.classList.remove('gallery-item')
    })
});
closseButtons.forEach((e)=> {
    e.addEventListener('click', ()=>{
        e.parentElement.parentElement.remove()
    });
});
opacityButtons.forEach((e)=> {
    e.addEventListener('click', ()=>{
        if(e.classList.contains('button-activity')){
            e.classList.remove('button-activity')
            e.parentElement.parentElement.querySelector('.grid-items__img').style.opacity = '1'
        }else{
            e.classList.add('button-activity')
            e.parentElement.parentElement.querySelector('.grid-items__img').style.opacity = '0'
        }
        
    });
});
function openPopup(){
    popup.classList.toggle('popup-open')
};
galleryName.forEach((e)=>{
    e.addEventListener('click',()=>{
        nameGange = e
        openPopup()
    })
});
btnPopapSave.addEventListener('click',()=>{
    nameGange.textContent = popupInput.value
    openPopup()
});
btnPopapClose.addEventListener('click',()=>{
    openPopup()
});
sizePluse.forEach(e => {
    e.addEventListener('click',()=>{
        const element = e.parentElement.parentElement
        const elementWidth = element.clientWidth;
        const elementHeight = element.clientHeight;
        element.style.zIndex = '4';
        element.style.height = Number(elementHeight) + 250 + 'px';
        element.style.width = Number(elementWidth) + 250 + 'px';
    });
});
sizeMinus.forEach(e => {
    e.addEventListener('click',()=>{
        const element = e.parentElement.parentElement
        const elementWidth = element.clientWidth;
        const elementHeight = element.clientHeight;
        element.style.height = Number(elementHeight) - 200 + 'px';
        element.style.width = Number(elementWidth) - 200 + 'px';
        console.log(elementWidth);
    });
});