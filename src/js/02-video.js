// import Player from '@vimeo/player/dist/player.esm.js';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
const iframe = document.querySelector('#vimeo-player');
console.log(iframe);
const player = new Player(iframe);

// Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
// Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
// const onPlay = function ({ seconds }) {
//   localStorage.setItem('videoplayer-current-time', `${seconds}`);
// };

// player.on('timeupdate', throttle(onPlay, 1000));

const onTimeUpdate = throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000);
  
  player.on('timeupdate', onTimeUpdate);

// const currentTime = Number(localStorage.getItem('videoplayer-current-time'));
const currentTime = localStorage.getItem("videoplayer-current-time");

// Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
player.setCurrentTime(currentTime);