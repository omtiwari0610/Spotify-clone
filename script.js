songItems = Array.from(document.getElementsByClassName("items"));
audioElement = new Audio("songs/1.mp3");
myProgressBar = document.getElementById("pb");
masterPlay = document.getElementById('mainplay');
masterSongName = document.getElementById("masterSongName");

songs = [
    {songName: "Teri yaad aati hai", filePath : "songs/1.mp3", coverPath: "1.jpg"},
    {songName: "Tujhe yaad na meri aayi", filePath : "songs/2.mp3", coverPath: "2.jpg"},
    {songName: "Jaan-e-wafa hoke bekaraar", filePath : "songs/3.mp3", coverPath: "3.jpg"},
    {songName: "Tujhe bhula diya", filePath : "songs/4.mp3", coverPath: "4.jpg"},
    {songName: "Bewafa tera maasoom chehra", filePath : "songs/5.mp3", coverPath: "5.jpg"},
    {songName: "Ab to aadat si hai mujhko aise jeene me ", filePath : "songs/6.mp3", coverPath: "6.jpg"}
];

songItems.forEach((element,i) => {
    element.getElementsByClassName("name")[0].innerHTML = songs[i].songName;
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
})

const pauseothers = ()=>{
    Array.from(document.getElementsByClassName("fa-solid fa-pause fa-2xl")).forEach((element) =>{
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
    })
}

    Array.from(document.getElementsByClassName("fa-solid fa-play fa-2xl")).forEach((element,i) => {
    element.addEventListener('click', (e) => {
        pauseothers();     
        element.classList.remove("fa-play");
        element.classList.add("fa-pause");
        gif.style.opacity = 1
        songIndex = parseInt(e.target.id);
        audioElement.src = songs[i].filePath;
        masterSongName.innerHTML = songs[i].songName;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})


audioElement.addEventListener('timeupdate',() => {
    myProgressBar.value = (audioElement.currentTime/audioElement.duration)*100;
})

document.getElementById("back").addEventListener('click',()=>{
    if(songIndex == 0){
        songIndex = 5;
    }
    else{
        songIndex -=1
    }
    audioElement.src = songs[songIndex].filePath;
    audioElement.play();
    masterSongName.innerHTML = songs[songIndex].songName;
    
})

document.getElementById("forward").addEventListener('click',()=>{
    
    
    if(songIndex == 5){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    console.log(songIndex)
    audioElement.src = songs[songIndex].filePath;
    audioElement.play();
    masterSongName.innerHTML = songs[songIndex].songName;
})

masterPlay.addEventListener('click',() => {
    if(audioElement.paused){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})
