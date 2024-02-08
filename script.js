const noPhrase = [
    "Khum cóa đâu 👿",
    "Bạn chắc chứ? 😞",
    "Bạn phải lì xì tui chứ! 😣",
    "Pleaseeee! 😭",
    "Lì xì đi mà 😢",
    "Cóa đê 😠",
];

const noButton = document.getElementById("no-button");
const audioButton = document.getElementById("audio-button");
const audioIcon = document.getElementById("audio-icon");
const audio = document.getElementById("audio");
const yesButton = document.getElementById("yes-button");
const yesText = document.getElementById("yes-text");
const tpbankImage = document.getElementById("tpbank-image");
const video = document.getElementById("video");
const catImage = document.getElementById("cat-image");

let noCount = 0;
let isAudioPlaying = true;

function handleNoPointerOver() {
    noCount++;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    let newX = Math.random() * (windowWidth - buttonWidth);
    let newY = Math.random() * (windowHeight - buttonHeight);

    if (newX < 0) {
        newX = 0;
    } else if (newX + buttonWidth > windowWidth) {
        newX = windowWidth - buttonWidth;
    }

    if (newY < 0) {
        newY = 0;
    } else if (newY + buttonHeight > windowHeight) {
        newY = windowHeight - buttonHeight;
    }

    noButton.style.left = newX + "px";
    noButton.style.top = newY + "px";
    noButton.textContent = getNoButtonText();
}

function toggleAudio() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
    isAudioPlaying = !audio.paused;
    audioIcon.src = isAudioPlaying ? "./items/speaker.png" : "./items/mute.png";
}

function getNoButtonText() {
    return noPhrase[Math.min(noCount, noPhrase.length - 1)];
}

function nextPage() {
    window.location.href = "./yes.html";
}

toggleAudio()

noButton.textContent = getNoButtonText();
noButton.addEventListener("mouseover", handleNoPointerOver);
noButton.addEventListener("click", handleNoPointerOver);
audioButton.addEventListener("click", toggleAudio);
