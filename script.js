const btn = document.querySelector('#navBtn');
const menu = document.querySelector('.nav');

btn.onclick = () => {
    menu.classList.toggle('active');
};
