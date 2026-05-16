

console.log("hello")

document.addEventListener("DOMContentLoaded", () => {
    let total = []
    let nameInput = document.querySelector(".name");
    let expenseInput = document.querySelector(".expence");


    let addButton = document.querySelector(".btn-get");


    let expenseList = document.querySelector(".lists");


    let totalSection = document.querySelector(".total");


    let clearButton = document.querySelector(".clear");

    addButton.addEventListener("click", () => {

        let name = nameInput.value.trim();
        let num = parseInt(expenseInput.value.trim());
        if (name !== "" && num > 0) {

            addlistings(name, num);
            nameInput.value = ""
            expenseInput.value = ""
        } else return



    })

    clearButton.addEventListener("click",()=>{
        expenseList.innerHTML = "";
        totalSection.innerHTML=""
    })

    function addlistings(name, num) {

        let li = document.createElement("li");
        li.className = "flex w-full justify-between items-center m-4";

        let text = document.createElement("span");
        text.textContent = `${name} ₹${num}`;

        let rem = document.createElement("button");
        rem.textContent = "Remove";
        rem.className = "bg-blue-500 px-2 rounded";

        rem.addEventListener("click", () => {
            li.remove();
             total = parseInt(total=total-num);
            totals(total);
        });

        li.appendChild(text);
        li.appendChild(rem);

        expenseList.appendChild(li);
        total = parseInt(total+ num);
         console.log(typeof total);

        totals(total);
    }

   function totals(total) {

    let existingSpan = totalSection.querySelector("span");

    if (existingSpan) {
        
        existingSpan.textContent = `Total Expense: ₹${total}`;
    } else {
        
        let totalAmmount = document.createElement("span");
        totalAmmount.textContent = `Total Expense: ₹${total}`;
        totalSection.appendChild(totalAmmount);
    }
}

})