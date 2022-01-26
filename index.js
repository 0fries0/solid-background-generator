const btn = document.querySelector("button");

btn.addEventListener('click', ()=>{
    console.log("ih");
    btn.parentElement.style.backgroundColor = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
})

function getRandom(){
    return Math.floor(Math.random() * 289);
}