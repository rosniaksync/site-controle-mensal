const form = document.querySelector("form")

form.addEventListener("submit", (evento) => {
    event.preventDefault()
    console.log(event.target.amount.value)
    console.log(event.target.date.value)
    console.log(event.target.category.value)

})