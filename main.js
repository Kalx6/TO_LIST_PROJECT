const userInput = document.getElementById("userInput");
const listContainer = document.getElementById("listContainer");

function add() {
    if (userInput.value === "") {
        alert("You have to write something")
    } else {
        let li = document.createElement("li");
        li.innerHTML = userInput.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.className = "cancel";
        li.appendChild(span);
        
    }
    userInput.value = "";
    

}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }



}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();