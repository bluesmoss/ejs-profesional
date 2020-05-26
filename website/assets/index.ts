import MediaPlayer from '@bluesmoss/mediaplayer';
import AutoPlay from '@bluesmoss/mediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@bluesmoss/mediaplayer/lib/plugins/AutoPause';
import Ads from '@bluesmoss/mediaplayer/lib/plugins/Ads';

const video = document.querySelector('video');
const btnPlay: HTMLElement = document.getElementById('btn-play');
const btnMute: HTMLElement = document.getElementById('btn-mute');
const player = new MediaPlayer({
    element: video,
    plugins : [new AutoPlay(), new AutoPause(), new Ads()],
});

btnPlay.onclick = btnPlay.onclick = () => player.togglePlay();
btnMute.onclick = btnMute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => console.log(error));
}