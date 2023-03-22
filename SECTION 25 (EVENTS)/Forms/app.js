const form = document.querySelector('#former');
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");
form.addEventListener("submit",function(e){
    e.preventDefault();
    const catName = input.value;
    const newLI = document.createElement("LI");
    newLI.innerText = catName;
    console.log(newLI);
    list.append(newLI);
})

