document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', ()=> {
    let song = document.querySelector('#input').value;

    if(song !== ''){
        let songArray = song.split('');
        playComposition(songArray);
    }
});

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let KeyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }
    
      if(KeyElement) {
          KeyElement.classList.add('active');
          KeyElement.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);


        setTimeout(()=>{
            KeyElement.classList.remove('active');
            KeyElement.style.backgroundColor = '#333';
        }, 300);
    }

}

function playComposition(songArray){
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem}`); 
        }, wait);

        wait += 250;
    }
    
}