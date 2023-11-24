const el = document.querySelectorAll(".products");
const focusel = document.querySelectorAll(".focused-item");

el.forEach((value, i)=>{
  value.addEventListener('click', ()=>{
    focusel[i].classList.add('active');
    for(let j=0; j< focusel.length; j++){
      if(j === i){
        continue;
      }
      focusel[j].classList.remove('active');
    }
  });
});

const titlePageProductEl = document.querySelector('.product-title>h1');

let htmlTag = '';
let x = 1.5;
for(let i=0; i< 18; i++){
  htmlTag += `<span style="position: absolute; width: 1vmax; height: 100%; background-color: #a5233d; top: 0; right:-${x}vmax; transform: skew(20deg);"></span>`
  x += 2;
}

titlePageProductEl.innerHTML ="Products"+ htmlTag;