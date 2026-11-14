const video = document.getElementById("intro_vid");
const background = document.querySelector(".bg-fade");
const overlay = document.querySelector(".video-overlay");

video.addEventListener("timeupdate", () => {
  if (video.currentTime >= 4) {
    background.classList.add("show");

    video.classList.add("fade-out");
    overlay.style.display = "none";
  }
  if (video.currentTime >= 8) {
    video.pause();
  }
});