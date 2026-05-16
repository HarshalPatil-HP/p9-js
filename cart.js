console.log("hello");

document.addEventListener("DOMContentLoaded", () => {

    let productsList = document.querySelector(".products-list");
    let cartList = document.querySelector(".ul");
    let cartEmpty = document.querySelector(".cartempty");
    let totalSection = document.querySelector(".total");
    let checkout = document.querySelector(".checkout");

    let Products = [
        { id: 1, p_name: "Product 1", price: 39.98 },
        { id: 2, p_name: "Product 2", price: 49.98 },
        { id: 3, p_name: "Product 3", price: 19.98 },
    ];

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    Products.forEach(element => {
        let row = document.createElement("li");
        row.className = "flex justify-between items-center w-full bg-gray-800 p-2 rounded mb-2";

        let name = document.createElement("span");
        name.textContent = `${element.p_name} - ₹${element.price}`;

        let actions = document.createElement("div");
        actions.className = "flex gap-3";

        let btnadd = document.createElement("button");
        btnadd.textContent = "Add";
        btnadd.className = "bg-green-500 px-2 py-1 rounded";

        let btnrem = document.createElement("button");
        btnrem.textContent = "Remove";
        btnrem.className = "bg-red-500 px-2 py-1 rounded";

        btnadd.addEventListener("click", () => {
            cart.push(element);
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
        });

        btnrem.addEventListener("click", () => {
            let index = cart.findIndex(item => item.id === element.id);

            if (index !== -1) {
                cart.splice(index, 1);
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
        });

        actions.appendChild(btnadd);
        actions.appendChild(btnrem);

        row.appendChild(name);
        row.appendChild(actions);

        productsList.appendChild(row);
    });

    checkout.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Cart is empty");
            return;
        }

        cart.length = 0;
        localStorage.removeItem("cart");
        renderCart();
        alert("Purchase done");
    });

    function renderCart() {
        cartList.innerHTML = "";

        if (cart.length === 0) {
            cartEmpty.innerHTML = "<h4>Your cart is Empty!!</h4>";
            totalSection.innerHTML = "";
            return;
        }

        cartEmpty.innerHTML = "";

        let total = 0;

        cart.forEach(item => {
            let li = document.createElement("li");
            li.className = "flex justify-between p-2";
            li.textContent = `${item.p_name} - ₹${item.price}`;

            cartList.appendChild(li);
            total += item.price;
        });

        totalSection.innerHTML = `<h4>Total: ₹${total.toFixed(2)}</h4>`;
    }

    // ✅ Load cart on refresh
    renderCart();

});
