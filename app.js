const eventKeyText = document.getElementById("key")

const eventWhichText = document.getElementById("which")

const eventCodeText = document.getElementById("code")



document.addEventListener("keydown", (e) => {
    // let key = event.key
    // let which = e.which
    // let code = e.code

    eventKeyText.innerText = e.key
    eventWhichText.innerText = e.which
    eventCodeText.innerText = e.code
})