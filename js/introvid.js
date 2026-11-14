document.addEventListener("DOMContentLoaded", () => {
    const videos = [
        "intro_vid.mp4#t=1",
        "intro_vid_2.mov"
    ];

    const backgrounds = [
        "img/hero_backgrounds/Pink-Blue.png",
        "img/hero_backgrounds/Purple-Pink.png",
        "img/hero_backgrounds/Yellow-Red.png"
    ];

    const lastIndex_vid = parseInt(localStorage.getItem('lastVidIndex'), 10);
    let randomIndex_vid;

    const lastIndex_bg = parseInt(localStorage.getItem('lastBgIndex'), 10);
    let randomIndex_bg;

    do{
        randomIndex_vid = Math.floor(Math.random() * videos.length);
    } while (randomIndex_vid === lastIndex_vid && videos.length > 1);

    do{
        randomIndex_bg = Math.floor(Math.random() * backgrounds.length);
    } while (randomIndex_bg === lastIndex_bg && backgrounds.length > 1);

    localStorage.setItem('lastVidIndex', randomIndex_vid);
    localStorage.setItem('lastBgIndex', randomIndex_bg)
    

    const selectedVideo = videos[randomIndex_vid];
    const selectedBg = backgrounds[randomIndex_bg];

    const videoElement = document.getElementById("intro_vid");
    const bgElement = document.querySelector(".bg-fade");


    const bgURL = new URL(selectedBg, document.baseURI).href;
    bgElement.style.setProperty("--bg-image", `url("${bgURL}")`);
    

    videoElement.src = selectedVideo;
    videoElement.load();
    videoElement.play().catch(error => {
        console.log("Intro video error: ", error);
    });

});