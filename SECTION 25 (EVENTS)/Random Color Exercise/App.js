const button = document.querySelector('button')
button.addEventListener('click', function(){
    const r =Math.floor(Math.random()*255);
    const g =Math.floor(Math.random()*255);
    const b =Math.floor(Math.random()*255);
   const newColor =  `rgb(${r},${g},${b})`
    document.body.style.backgroundColor=newColor;    
})

const buttons = document.querySelectorAll('button')
for (let button of buttons){
    button.addEventListener('click',() => {
        button.style.backgroundColor = 'pink';
        })
}