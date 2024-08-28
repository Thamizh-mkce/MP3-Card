
const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("playPause");
const seekBar = document.getElementById("seekBar");
const currentTimeElement = document.getElementById("currentTime");
const durationElement = document.getElementById("duration");

audio.addEventListener("loadedmetadata", () => {
  durationElement.textContent = formatTime(audio.duration);
  seekBar.max = audio.duration;
});

audio.addEventListener("timeupdate", () => {
  seekBar.value = audio.currentTime;
  currentTimeElement.textContent = formatTime(audio.currentTime);
});

playPauseButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = "Pause";
  } else {
    audio.pause();
    playPauseButton.textContent = "Play";
  }
});

seekBar.addEventListener("input", () => {
  audio.currentTime = seekBar.value;
});

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}
