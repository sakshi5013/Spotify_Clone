console.log("Welcom to Spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));


let song = [
    {songName: "Apna Bana Le", filePath: "songs/1.mp3", coverPath:"covers/cover1.jpeg"},
    {songName: "Dil Nu", filePath:"songs/2.mp3", coverPath:"covers/cover2.jpg"},
    {songName: "Dildara (Stand By Me)", filePath:"songs/3.mp3", coverPath:"covers/cover3.jpg"},
    {songName: "Kesriye (Bramhstra)", filePath:"songs/4.mp3", coverPath:"covers/cover4.jpg"},
    {songName: "Let Me Love You", filePath:"songs/5.mp3", coverPath:"covers/cover5.jpg"},
    {songName: "Maan Meri Jaan", filePath:"songs/6.mp3", coverPath:"covers/cover6.jpg"},
    {songName: "Night Changes", filePath:"songs/7.mp3", coverPath:"covers/cover7.jpg"},
    {songName: "Rangi Saari", filePath:"songs/8.mp3", coverPath:"covers/cover8.jpg"},
    {songName: "Shape Of You", filePath:"songs/9.mp3", coverPath:"covers/cover9.jpg"},
    {songName: "Subhanalla", filePath:"songs/10.mp3", coverPath:"covers/cover10.jpg"},
    {songName: "Zaalima", filePath:"songs/11.mp3", coverPath:"covers/cover11.jpg"}
]

songItem.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = song[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = song[i].songName;
})

// audioElement.play();
// Handle play/pause click

masterPlay.addEventListener('click', ()=>{
   if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
   }
   else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
   }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
   
     //update seekbar
     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
     myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
       

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
    
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = song[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
  })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex =0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = song[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex =0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = song[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

