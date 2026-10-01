let allTransactions = [];
const transactionForm = document.getElementById("transactionForm");
const transactionList = document.getElementById("transactionList");

const totalBalance = document.getElementById("totalBalance");
const totalIncome = document.getElementById("totalIncome");
const totalExpense = document.getElementById("totalExpense");

function updateList(type, amount, date, category) {
    const itemEl = document.createElement("li");
    const iconEl = document.createElement("div");
    const detailsEl = document.createElement("div");
    const nameEl = document.createElement("div");
    const dateEl = document.createElement("div");
    const amountEl = document.createElement("div");
    const deleteEl = document.createElement("button");

    itemEl.classList.add("transaction-item");
    iconEl.classList.add("transaction-icon");
    detailsEl.classList.add("transaction-details");
    nameEl.classList.add("transaction-name");
    dateEl.classList.add("transaction-date");
    amountEl.classList.add("transaction-amount");
    deleteEl.classList.add("transaction-delete");
    
    iconEl.innerText = type === "Income" ? "↑" : "↓";
    iconEl.classList.add(type === "Income" ? "income" : "expense");

    nameEl.innerText = category;
    dateEl.innerText = new Date(date).toLocaleDateString("pt-br", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    amountEl.innerText = (type === "Income" ? "+" : "-") + "$" + amount;
    amountEl.classList.add(type === "Income" ? "income" : "expense");

    deleteEl.innerText = "✘";
    deleteEl.addEventListener("click", deleteTransaction);

    detailsEl.appendChild(nameEl);
    detailsEl.appendChild(dateEl);
    itemEl.appendChild(iconEl);
    itemEl.appendChild(detailsEl);
    itemEl.appendChild(amountEl);
    itemEl.appendChild(deleteEl);

    transactionList.prepend(itemEl);
}

function deleteTransaction(event) {
    const btn = event.currentTarget;
    const itemEl = btn.closest(".transaction-item");

    const index = Array.from(transactionList.children).indexOf(itemEl);
    allTransactions.splice(index, 1);
    updateBalance();

    itemEl.remove();
}

function updateBalance() {
    let income = 0;
    let expense = 0;
    let balance = 0;

    allTransactions.forEach((transaction) => {
        if (transaction.type === "Income") {
            income += parseFloat(transaction.amount);
            balance += parseFloat(transaction.amount);
        } else {
            expense += parseFloat(transaction.amount);
            balance -= parseFloat(transaction.amount);
        }
    });

    totalBalance.innerText = "$" + balance;
    totalIncome.innerText = "$" + income;
    totalExpense.innerText = "$" + expense;
}

transactionForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const type = event.target.type.value;
    const amount = event.target.amount.value;
    const date = event.target.date.value;
    const category = event.target.category.value;

    updateList(type, amount, date, category);
    allTransactions.unshift({ type, amount, date, category });
    updateBalance();

    transactionForm.reset();
});