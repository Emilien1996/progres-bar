const progress = document.querySelector(".progress-done")
let time = 20
let jam
setTimeout(()=>{
   jam = setInterval(update,2000)
  progress.style.opacity = 1  
},1000)
function update(){
    progress.style.width = `${time}%`
    progress.textContent = `${time}%`
    time ++
    if (time > 30){
        alert("download end")
        clearInterval(jam)
    }
}

