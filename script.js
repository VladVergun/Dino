const dino = document.getElementById("dino")                    // создаём константу для обЪекта дино 
const cactus = document.getElementById("cactus")                // (Выделяем область памяти, обpащаемся по id)
const btn = document.getElementById("btn")
const gamestatus = document.getElementById("gamestatus")


function newgame (){
    dino.style.backgroundImage = "url(/img/dinowalk.gif)"
    cactus.style.opacity = "100"
    cactus.style.animation = "cactusmove 1s infinite linear"
    btn.style.opacity = "0"
    gamestatus.style.opacity = "0"

    document.addEventListener("keydown", function(event){           // отлавливаем событие нажатия на клавишу
        jump();                                                     // вызов функции
    })

    let isAlive = setInterval(function()  {
        let dinotop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
        let cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
    
        if (cactusleft < 50 && cactusleft > 0 && dinotop >= 41) {
            //alert("GAME OVER")
            gameover();
        }
    });
}


function gameover(){
    gamestatus.style.opacity = "100"
    btn.style.opacity = "100"
    cactus.style.opacity = "0"
    cactus.style.animation = "none"
    dino.style.backgroundImage = "url(/img/dinochill.gif)"
    
}




function jump() {
    // dino.classList.add("jump")
    if (dino.classList != "jump"){
        dino.classList.add("jump")
    }
    setTimeout(function(){
        dino.classList.remove("jump")
    },300)
}



btn.onclick = function(){
    newgame()
}