const transactionForm = document.getElementById("transactionForm")
const transactionList = document.getElementById("transactionList")

const totalBalance = document.getElementById("totalBalance")
const totalIncome = document.getElementById("totalIncome")
const totalExpepnse = document.getElementById("totalExpense")

function updateList(type, amount, date, category) {
    const itemEl = document.createElement("li")
    const iconEl = document.createElement("div")
    const detailsEl = document.createElement("div")
    const nameEl = document.createElement("div")
    const dateEl = document.createElement("div")
    const amountEl = document.createElement("div")
    const deleteEl = document.createElement("button")
}

transactionForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const type = event.target.type.value;
    const amount = event.target.amount.value;
    const date = event.target.date.value;
    const category = event.target.category.value;

    console.log(type, amount, date, category)
})