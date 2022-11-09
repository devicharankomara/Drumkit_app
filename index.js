console.log('java script is linked');
let soundlist=['sounds/tom-1.mp3','sounds/tom-2.mp3','sounds/tom-3.mp3','sounds/tom-4.mp3','sounds/crash.mp3','sounds/kick-bass.mp3','sounds/snare.mp3']
let n=document.querySelectorAll("button").length;


for(let i=0;i<n;i++){
    document.querySelectorAll('button')[i].addEventListener('click', function(){
        document.querySelectorAll('button')[i].classList.add('pressed')
        setTimeout(function(){
            document.querySelectorAll('button')[i].classList.remove('pressed')
        },100)
      let audio1 = new Audio (soundlist[i])
      audio1.play()
});
}

document.addEventListener('keydown',function(e) {
    let keystrokes = ['w','a','s','d','j','k','l']
    let a= keystrokes.indexOf(e.key)
    let audio2 = new Audio (soundlist[a])
    audio2.play()
    document.querySelector("."+ e.key).classList.add('pressed')
    setTimeout(function(){
        document.querySelector("."+ e.key).classList.remove('pressed')
    }, 100)
    

})

