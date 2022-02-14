import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', function(event) {


console.log(event.seconds)
    });

    // player.getVideoTitle().then(function(title) {
    //     console.log('title:', title);
    // });
    // "videoplayer-current-time"