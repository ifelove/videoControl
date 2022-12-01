const video=document.querySelector(".video-container")
const btn=document.querySelector(".switch-button")
const preload=document.querySelector("section")



btn.addEventListener("click",()=>{
    console.log("pessed")

 
if(!btn.classList.contains("slide")){
    btn.classList.add("slide")
    video.pause()
}
else{btn.classList.remove("slide")
video.play()}
})

 window.addEventListener("load",()=>{
preload.style.display="none"
btn.style.opacity="1"
})