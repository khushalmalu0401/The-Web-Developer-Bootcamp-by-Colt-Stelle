const btn = document.querySelector('#v2')

btn.onclick = function(){
    console.log("You Clicked Me!!")
}

function scream(){
    console.log("You Clicked me!!");
}

//When i hover on button in console it gives me message you clicked me
btn.onmouseenter = scream;


const btn3 = document.querySelector("#v3");
btn3.addEventListener('Click',function() {
    alert("Clicked")
})