import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME_KEY = 'videoplayer-current-time';
const savedCurrentTime = localStorage.getItem(CURRENT_TIME_KEY);

const onCurrentTimePlay = function (data) {
  console.log(data.seconds);
  const currentTimeValue = data.seconds;
  localStorage.setItem(CURRENT_TIME_KEY, currentTimeValue);
};

player.on('timeupdate', throttle(onCurrentTimePlay, 1000));

player
  .setCurrentTime(savedCurrentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
