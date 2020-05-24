import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/Autoplay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');
const btnPlay = document.getElementById('btn-play');
const btnMute = document.getElementById('btn-mute');
const player = new MediaPlayer({
    element: video, 
    plugins : [new AutoPlay(), new AutoPause()]
});

btnPlay.onclick = btnPlay.onclick = () => player.togglePlay();
btnMute.onclick = btnMute.onclick = () => player.toggleMute();