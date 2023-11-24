const backBtn = document.querySelector('.back');
const forBtn = document.querySelector('.forward');
const sliderEl = document.querySelector('#slider-home');
const bannerEl = document.querySelectorAll('.banner-section');

console.log(sliderEl);
let imgCount = 1;

backBtn.addEventListener('click', ()=>{
  imgCount--;
  updateMove();
});
forBtn.addEventListener('click', ()=>{
  imgCount++;
  updateMove();
  
});

function updateMove(){
  if(imgCount < 1){
    imgCount = bannerEl.length;
  }else if(imgCount > bannerEl.length){
    imgCount = 1;
  }
  sliderEl.style.transform = `translateX(-${(imgCount-1)*100}vw)`;
}