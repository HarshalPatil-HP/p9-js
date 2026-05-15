let inputs = document.querySelector("#inputs");
let add = document.querySelector("#add");
let ul = document.querySelector("#lists");

add.addEventListener("click", function (e) {
    e.preventDefault();

    let value = inputs.value.trim();
    if (value === "") return;

    let li = document.createElement("li");
    li.className = "flex justify-between items-center bg-gray-800 px-4 py-3 rounded-lg shadow hover:scale-[1.02] transition-all";
    
    let span = document.createElement("span");
    span.innerText = value;
    span.className = "cursor-pointer";

    span.addEventListener("click", function () {
        span.classList.toggle("line-through");
        span.classList.toggle("text-gray-400");
    });

    let del = document.createElement("button");
    del.innerText = "✕";
    del.className = "bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-sm transition-all";

    del.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(del);
    ul.appendChild(li);

    inputs.value = "";
});