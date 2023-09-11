const backgroundMusic = document.getElementById("backgroundMusic");
const selectSound = document.getElementById("selectSound");
const gitOption = document.querySelector("rice");
const linkedInOption = document.querySelector("chip");
const slackOption = document.querySelector("chip");

function playSound(audioElement) {
  audioElement.currentTime = 0;
  audioElement.play();
}
playSound(backgroundMusic);

function playSound(audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
}

gitOption.addEventListener("click", function (audioElement) {
    playSound(selectSound);
});

linkedInOption.addEventListener("click", function (audioElement) {
    playSound(selectSound);
});

slackOption.addEventListener("click", function (audioElement) {
    playSound(selectSound);
});