import { musicData } from './data.js';

export const audioPlayer = () => {
  const createAudioPlayer = (trackUrl, trackName) => {
    const audioPlayerTemplate = `
      <div class="audio-player">
        <div class="timeline">
          <div class="progress"></div>
        </div>
        <div class="controls">
          <div class="play-container">
            <div class="toggle-play play"></div>
          </div>
          <div class="name">${trackName}</div>
        </div>
      </div>
    `;

    const musicGrid = document.querySelector('.music__grid');
    const playerContainer = document.createElement('div');
    playerContainer.innerHTML = audioPlayerTemplate;
    musicGrid.appendChild(playerContainer);

    const audioPlayer = playerContainer.querySelector('.audio-player');
    const audio = new Audio(trackUrl);

    audio.addEventListener('loadeddata', () => {
      audio.volume = 0.75;
    });

    const timeline = audioPlayer.querySelector('.timeline');
    timeline.addEventListener('click', e => {
      const timelineWidth = window.getComputedStyle(timeline).width;
      const timeToSeek = (e.offsetX / parseInt(timelineWidth)) * audio.duration;
      audio.currentTime = timeToSeek;
    });

    setInterval(() => {
      const progressBar = audioPlayer.querySelector('.progress');
      progressBar.style.width = (audio.currentTime / audio.duration) * 100 + '%';
    }, 200);

    let activeAudio = null;

    const playBtn = audioPlayer.querySelector('.controls .toggle-play');
    playBtn.addEventListener('click', () => {
      if (activeAudio && activeAudio !== audio) {
        activeAudio.pause();
        const activePlayBtn = activeAudio.parentNode.querySelector('.toggle-play');
        activePlayBtn.classList.remove('pause');
        activePlayBtn.classList.add('play');
      }

      if (audio.paused) {
        playBtn.classList.remove('play');
        playBtn.classList.add('pause');
        audio.play();
        activeAudio = audio;
      } else {
        playBtn.classList.remove('pause');
        playBtn.classList.add('play');
        audio.pause();
        activeAudio = null;
      }
    });
  };

  musicData.forEach(track => {
    createAudioPlayer(track.trackUrl, track.trackName);
  });
};
