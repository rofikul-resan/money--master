
document.getElementById("totalBalance").addEventListener("click", function () {
    const income = getValue("income")
    const food = getValue("Food");
    const rent = getValue("Rent");
    const clothes = getValue("Clothes");

    // validation check 
    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)) {
        let errorMassage = "";
        if (isNaN(income)) {
            errorMassage = "Please input a number in income filled";
            setValue("error-Massage", errorMassage);
        } else if (isNaN(food)) {
            errorMassage = "Please input a number in food filled";
            setValue("error-Massage", errorMassage);
        } else if (isNaN(rent)) {
            errorMassage = "Please input a number in rent filled";
            setValue("error-Massage", errorMassage);
        } else {
            errorMassage = "Please input a number in clothe filled";
            setValue("error-Massage", errorMassage);
        }
    } else {
        const totalExpenses = food + rent + clothes;
        const balance = income - totalExpenses;
        if (income < totalExpenses) {
            errorMassage = "Don't Expenses like this. Other as soon as you become a beggar ";
            setValue("error-Massage", errorMassage);
            setValue("TotalExpenses", totalExpenses);
        } else {
            mainIncome = balance;
            setValue("TotalExpenses", totalExpenses);
            setValue("Balance", balance);
            document.getElementById("error-Massage").classList.add("hidden")
        }
    }

})

document.getElementById("save").addEventListener("click", function () {
    const parseintValue = getValue("parseint-Value");
    let totalSave = ((mainIncome / 100) * parseintValue).toFixed(2);
    if (mainIncome < totalSave || mainIncome === 0) {
        alert("You don't have enough money for saving")
    } else {
        let remainBalance =(mainIncome - totalSave).toFixed(2);
        setValue("SavingAmount", totalSave);
        setValue("RemainingBalance", remainBalance);
        document.getElementById("parseint-Value").value = "";
    }
})
