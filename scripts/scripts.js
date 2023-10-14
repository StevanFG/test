
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    console.log(header)
    if(window.scrollY > 1){
       header.classList.remove('transparent') 
    } else{
        header.classList.add('transparent')
    }
})