
const mainElement = document.getElementById("main");
if (mainElement) {
    mainElement.remove();
}


const newHeader = document.createElement("h1");

newHeader.id = "victory";
newHeader.innerHTML = "Gideon is the champion";


document.body.appendChild(newHeader);
