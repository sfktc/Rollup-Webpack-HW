import "./index.css";
import logo from './assets/JS.png';

console.log('Hello World!');

const h1 = document.createElement("h1")
h1.textContent = "I love JavaScript"
document.body.append(h1)

const imgJs = document.createElement("img")
imgJs.classList.add("jsImg")
imgJs.src = logo
document.body.append(imgJs)