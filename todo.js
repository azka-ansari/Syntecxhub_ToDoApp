console.log("JavaScript is working");
let add = document.querySelector("#add");
let list = document.querySelector("#addList");
let error = document.querySelector("#error");
let input = document.querySelector("input");
let totalCount = document.querySelector("#totalCount");

let count = 0;

function updateCount() {
    totalCount.innerText = count;
}

add.addEventListener("click", function () {
    if (input.value.trim() === "") {
        error.innerText = "Please enter student name";
        input.focus();
    } else {
        error.innerText = "";

        const newEle = document.createElement("h3");
        newEle.textContent = input.value.trim();
        list.appendChild(newEle);

        input.value = "";

        const delet = document.createElement("button");
        delet.innerText = "Delete";
        delet.classList.add("delete");
        list.appendChild(delet);

        count++;
        updateCount();

        delet.addEventListener("click", function () {
            newEle.remove();
            delet.remove();

            count--;
            updateCount();
        });
    }
});