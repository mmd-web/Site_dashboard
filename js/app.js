let $ = document;

let btnDark = $.getElementById("dark-btn");
let btnLight = $.getElementById("light-btn");

btnDark.addEventListener("click" , () => {
    document.documentElement.setAttribute('data-bs-theme' , 'dark');
    localStorage.setItem('theme' , 'dark');
})
btnLight.addEventListener("click" , () => {
    document.documentElement.setAttribute('data-bs-theme' , 'light');
    localStorage.setItem('theme' , 'light');
})

window.addEventListener('load' , () => {
    let saveValueLocalStorage = localStorage.getItem('theme');
    if (saveValueLocalStorage === 'dark') {
        document.documentElement.setAttribute('data-bs-theme' , 'dark');
    }else if (saveValueLocalStorage === 'light') {
        document.documentElement.setAttribute('data-bs-theme' , 'light');
    }
})