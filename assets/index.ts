import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

const video = document.querySelector('video');
const btnPlay: HTMLElement = document.getElementById('btn-play');
const btnMute: HTMLElement = document.getElementById('btn-mute');
const player = new MediaPlayer({
    element: video, 
    plugins : [new AutoPlay(), new AutoPause()]
});

btnPlay.onclick = btnPlay.onclick = () => player.togglePlay();
btnMute.onclick = btnMute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => console.log(error));
}