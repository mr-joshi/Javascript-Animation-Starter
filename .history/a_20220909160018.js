const canvas = document.getElementById("wallpaper");
const context = canvas.getContext("2d");

const currentFrame = index => (
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
)

canvas.width=1158;
canvas.height=770;

const img = new Image()
img.src = currentFrame(1); 
img.onload=function(){
  context.drawImage(img, 0, 0);
}
window.addEventListener('scroll',()=>{
  const scrollTop=html.scrollTOp;
  const maxScrollTop=scroll
})