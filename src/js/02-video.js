import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const localKey = "videoplayer-current-time";

player.on('timeupdate', saveValue);

function saveValue(event){
localStorage.setItem(localKey, JSON.stringify(event.seconds))}



player.setCurrentTime(localStorage.getItem(localKey)).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});

