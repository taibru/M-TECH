
const productEl = document.getElementById('product');
const prodImg = document.querySelector('.list>img');
const innerProduct = document.querySelector('.nav-inner-list');

const divEl = document.createElement('div');
divEl.style.position = "absolute";
divEl.style.inset = "0";
divEl.style.zIndex = "99";

console.log(divEl);
productEl.addEventListener('click', ()=>{
  
  if(innerProduct.style.display === 'none'){
    innerProduct.style.display = 'block';
    prodImg.style.transform = "rotate(-90deg)";

    const switchBig = document.body.appendChild(divEl);

    switchBig.addEventListener("click", ()=>{
      innerProduct.style.display = 'none';
      if(document.body.hasChildNodes(divEl)){
        try {
          document.body.removeChild(divEl);
        } catch (error) {
          console.log("removed");
        }
      }
      prodImg.style.transform = "rotate(90deg)";
    });

  }else{
    prodImg.style.transform = "rotate(90deg)";
    innerProduct.style.display = 'none';

  }
});

//=========================================

const innerCatEl = document.querySelectorAll('.inner-catagory');
const innerAct = document.querySelectorAll('.inner-active')

const El = document.createElement('span');
El.classList.add('v-line');
const El1 = document.createElement('span');
El1.classList.add('h-line');
innerCatEl.forEach((element, i)=>{
  element.addEventListener('mouseover', ()=>{
    innerAct[i].appendChild(El);
    innerAct[i].appendChild(El1);
  });
});

//==========================================================

const headerEl = document.querySelector('#nav-section');

document.addEventListener('scroll', ()=>{
  
  if(window.scrollY > 74){
    headerEl.style.position = 'fixed';
    headerEl.style.zIndex = '1000';
    headerEl.style.right = '0';
    headerEl.style.left = '0';
    headerEl.style.top = '0';
    headerEl.style.backgroundColor = '#f5f5dc';
  }else if(window.scrollY < 200 ){
    headerEl.style.position = 'relative'
  }
  
});

//==========================================================


