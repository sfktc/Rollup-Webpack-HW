import {getRandomColor} from './utils';

function initApp() {
    console.log('Hello world');
    const btn = document.createElement("button")
    btn.classList.add("button")
    btn.textContent = "Изменить цвет страницы"
    document.body.append(btn)

    const clickBtn = document.querySelector(".button");
    clickBtn.addEventListener("click", (event) => {
    if (event) {
        document.body.style.background = getRandomColor()
    }    
    });
}

export {
    initApp,
}