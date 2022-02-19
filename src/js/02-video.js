import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const localKey = "videoplayer-current-time";

player.on('timeupdate', throttle(saveValue, 1000));

function saveValue(event){
localStorage.setItem(localKey, JSON.stringify(event.seconds))
}


player.setCurrentTime(localStorage.getItem(localKey)).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});

