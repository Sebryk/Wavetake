import { musicData } from './data.js';

export const audioPlayer = () => {
  const playlist = musicData;

  const createAudioPlayer = (trackUrl, trackName) => {
    const audioPlayerTemplate = `
      <div class="music__player player">
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

    const musicPlayer = document.querySelector('.music__wrap');
    musicPlayer.insertAdjacentHTML('beforeend', audioPlayerTemplate);

    const audioPlayer = document.querySelector(`.music__player`);
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

    const playBtn = audioPlayer.querySelector('.controls .toggle-play');
    playBtn.addEventListener('click', e => {
      console.log(e.target);
      if (audio.paused) {
        playBtn.classList.remove('play');
        playBtn.classList.add('pause');
        audio.play();
      } else {
        playBtn.classList.remove('pause');
        playBtn.classList.add('play');
        audio.pause();
      }
    });

    return audio;
  };

  // Create the audio player for the first track in the playlist
  const currentAudio = createAudioPlayer(playlist[0].trackUrl, playlist[0].trackName);

  const musicList = document.querySelector('.music__list');
  musicList.insertAdjacentHTML(
    'beforeend',
    `
      <ul class="playlist">
        ${playlist
          .map(
            (track, index) => `
          <li class="playlist__track" data-index="${index}">
            ${track.trackName}
          </li>
        `
          )
          .join('')}
      </ul>
  `
  );

  const trackElements = document.querySelectorAll('.playlist__track');
  const playBtn = document.querySelector('.controls .toggle-play');
  trackElements.forEach((trackElement, index, array) => {
    if (index === 0) {
      trackElement.classList.add('playlist__track--active');
    }
    trackElement.addEventListener('click', e => {
      trackElement.classList.add('playlist__track--active');
      const selectedIndex = parseInt(trackElement.getAttribute('data-index'));
      const selectedTrack = playlist[selectedIndex];
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio.src = selectedTrack.trackUrl;
      currentAudio.load();
      playBtn.classList.add('pause');
      playBtn.classList.remove('play');
      currentAudio.play();

      // Update the currently playing track
      const nameElement = document.querySelector('.controls .name');
      nameElement.textContent = selectedTrack.trackName;
      trackElements.forEach(otherTrackElement => {
        if (otherTrackElement !== trackElement) {
          otherTrackElement.classList.remove('playlist__track--active');
          if (index === array.length - 1) {
            trackElement.style.borderBottomLeftRadius = '14px';
            trackElement.style.borderBottomRightRadius = '14px';
          }
        }
      });
    });

    trackElement.addEventListener('mouseenter', () => {
      trackElement.classList.add('playlist__track--hover');
      if (index === array.length - 1) {
        trackElement.style.borderBottomLeftRadius = '14px';
        trackElement.style.borderBottomRightRadius = '14px';
      }
    });
    trackElement.addEventListener('mouseleave', () => {
      trackElement.classList.remove('playlist__track--hover');
    });
  });
  return currentAudio;
};
