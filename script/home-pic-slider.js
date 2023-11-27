const backBtn = document.querySelector('.back');
const forBtn = document.querySelector('.forward');
const sliderEl = document.querySelector('#slider-home');
const bannerEl = document.querySelectorAll('.banner-section');
let timeout;

console.log(sliderEl);
let imgCount = 1;

updateMove();

backBtn.addEventListener('click', ()=>{
  imgCount--;
  clearTimeout(timeout);
  updateMove();
});
forBtn.addEventListener('click', ()=>{
  imgCount++;
  clearTimeout(timeout);
  updateMove();
  
});

function updateMove(){
  if(imgCount < 1){
    imgCount = bannerEl.length;
  }else if(imgCount > bannerEl.length){
    imgCount = 1;
  }
  sliderEl.style.transform = `translateX(-${(imgCount-1)*100}vw)`;
  
  timeout = setTimeout(()=>{
    imgCount++;
    updateMove();
  }, 2000);
}
