import './index.css';
if (localStorage.getItem('temp') === 'off') {
    const cookieDiv = document.querySelector(".cookie-consent")
    cookieDiv.classList.add("cookie-consent-hide")
}

const confBtn = document.querySelector(".cookie-consent__button")
confBtn.addEventListener("click", (event) => {
    localStorage.setItem('temp', 'off')
        console.log("dog")
        const cookieDiv = document.querySelector(".cookie-consent")
        cookieDiv.classList.add("cookie-consent-hide")
});