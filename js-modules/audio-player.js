import { musicData } from './data.js';

export const audioPlayer = () => {
  const audioPlayer = document.querySelector('.audio-player');
  const audio = new Audio(musicData[0].trackUrl);

  console.log(audio);

  audio.addEventListener(
    'loadeddata',
    () => {
      audio.volume = 0.75;
    },
    false
  );

  //click on timeline to skip around
  const timeline = audioPlayer.querySelector('.timeline');
  timeline.addEventListener(
    'click',
    e => {
      const timelineWidth = window.getComputedStyle(timeline).width;
      const timeToSeek = (e.offsetX / parseInt(timelineWidth)) * audio.duration;
      audio.currentTime = timeToSeek;
    },
    false
  );

  //check audio percentage and update time accordingly
  setInterval(() => {
    const progressBar = audioPlayer.querySelector('.progress');
    progressBar.style.width = (audio.currentTime / audio.duration) * 100 + '%';
  }, 200);

  //toggle between playing and pausing on button click
  const playBtn = audioPlayer.querySelector('.controls .toggle-play');
  playBtn.addEventListener(
    'click',
    () => {
      if (audio.paused) {
        playBtn.classList.remove('play');
        playBtn.classList.add('pause');
        audio.play();
      } else {
        playBtn.classList.remove('pause');
        playBtn.classList.add('play');
        audio.pause();
      }
    },
    false
  );
};
