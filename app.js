let game = document.querySelector("#game")
let dinosaur = document.querySelector("#dinosaur")
let cactus = document.querySelector("#cactus")
let my_point = document.querySelector("#my-point")

let cactus_flag = false
let point = 0 

function jump_dinosaur(){
    if(!dinosaur.classList.contains("jump")){
        dinosaur.classList.add("jump")
        cactus_flag = true
        setTimeout((e)=>{
            dinosaur.classList.remove("jump")
        }, 600)
    }
}

document.addEventListener("keydown",(e)=>{
    if(e.code === "Space"){
        jump_dinosaur()
    }
})

let check_live_game = setInterval((e)=>{
    let dinosaur_top = parseInt(window.getComputedStyle(dinosaur).getPropertyValue("top"))
    let cactus_left = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if(cactus_left > 50 && cactus_left < 100 && dinosaur_top > 150){
        dinosaur.style.animationPlayState = "paused"
        cactus.style.animationPlayState = "paused"
        game.style.animationPlayState = "paused"
        clearInterval(check_live_game)
        alert("Game Over - Your point "+ point + "- Try Again")
        window.location.reload()
    }
    if(cactus_left <10 && cactus_left){
        point +=10
        cactus_flag = false
        my_point.innerHTML = point
    }

}, 10)