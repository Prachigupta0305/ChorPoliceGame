score:0;
cross=true;
audio=new Audio('running.mp3');
audiogo=new Audio('over.wav');
setTimeout(() => {
    audio.play();
    
}, 1000);
document.onkeydown=function(e){
    console.log(e.keyCode);
    if(e.keyCode==38){ /*for upper arrowkey*/
        chorjs=document.querySelector('.chor');
        chorjs.classList.add('animateChor');
    
    setTimeout(() => {
        chorjs.classList.remove('animateChor');
    }, 700); //700 ms baad hata do aur jump ko undo kar do
    }
    if(e.keyCode==37){ /*for left arrowkey*/
        chorjs=document.querySelector('.chor');
        chorX=parseInt(window.getComputedStyle(chorjs,null).getPropertyValue('right'));
        chorjs.style.right=chorX+112+"px";
    }
    if(e.keyCode==39){ /*for right arrowkey*/
        chorjs=document.querySelector('.chor');
        chorX=parseInt(window.getComputedStyle(chorjs,null).getPropertyValue('right'));
        chorjs.style.right=chorX-112+"px";
    }

    
}
setInterval(() => {
    chorjs=document.querySelector('.chor');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');
    cx =parseInt(window.getComputedStyle(chorjs,null).getPropertyValue('right'));
    cy =parseInt(window.getComputedStyle(chorjs,null).getPropertyValue('top'));
    ox =parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('right'));
    oy =parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    offsetX = Math.abs(cx - ox);
    offsetY = Math.abs(cy - oy);
    if(offsetX <100 && offsetY < 52) {
        audio.pause();
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
           
        }, 3000);
    }
    else if(offsetX >144 && cross) {
        score=score+1;
        updateScore(score);
        cross=false;
    }
    setTimeout(() => {
        cross = true;
    }, 1000);
    /*setTimeout(() => {
        aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.1;
        obstacle.style.animationDuration = newDur + 's';
        console.log('New animation duration: ', newDur)
    }, 500);*/
}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}
