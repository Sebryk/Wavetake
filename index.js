import { scroll } from './js-modules/scroll.js';
import { burgerMenu } from './js-modules/burger.js';
import { popUp } from './js-modules/popup.js';
import { showMoreBtn } from './js-modules/showMoreBtn.js';
import { thumbnail } from './js-modules/thumbnail.js';
import { audioPlayer } from './js-modules/audioPlayer.js';
import { handleFormSubmit } from './js-modules/handleFormSubmit.js';

scroll();

/* ------------------------------- Burger Menu ------------------------------ */

burgerMenu();

/* ----------------------------- Thumbnail ----------------------------- */

thumbnail();

/* ----------------------------- Button "Show More"---------------------------- */

showMoreBtn();

/* ------------------------------ Audio Player ------------------------------ */

export const currentAudio = audioPlayer();

/* ----------------------------- Pop Up"---------------------------- */

popUp();

/* ------------------------- Firebase Configuration ------------------------- */

handleFormSubmit();
