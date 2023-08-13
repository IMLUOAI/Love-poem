const initialCards = [
  {
    name: "花與",
    link: "閒雲.jpg",
  },
  {
    name: "人間",
    link: "惜花.jpg",
  },
  {
    name: "事一同",
    link: "月下思.jpg",
  },
];
console.log(initialCards);

const audioElement = document.querySelector("#music");
const playPauseButton = document.querySelector("#playPauseButton");
let isPlaying = false;

playPauseButton.addEventListener("click", () => {
  if (!isPlaying) {
    audioElement.play();
    playPauseButton.textContent = "Pause";
    isPlaying = true;
  } else {
    if (!audioElement.paused) {
      audioElement.pause();
      playPauseButton.textContent = "Play";
    } else {
      audioElement.currentTime = 0;
      audioElement.play();
    }
  }
});
