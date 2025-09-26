

for(i = 1; i <= 256; i++){
const box = document.createElement("div");
box.classList.add("box");

container.appendChild(box);
}

const hover = document.querySelectorAll(".box");

hover.forEach(box => {  
    box.addEventListener("mouseenter", () => {
    box.style.backgroundColor = "blue";
});

   box.addEventListener("mouseleave", () => {
    box.style.backgroundColor = "red";
   })



})


const btn = document.querySelector("#reset");

btn.addEventListener("click", () =>{
    let promp = prompt("Enter grid size (max 100)");

    let length = Number(promp);

    if (length > 100){
        promp = prompt("Enter grid size (max 100)");
    }

    let total = length * length;

    container.innerHTML = "";

    for(i = 1; i <= total; i++){
        const box = document.createElement("div");
        box.classList.add("box");

        box.style.flex = `0 0 ${100 / length}%`;

        container.appendChild(box);

        }

})