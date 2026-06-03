/**
 * Purpose: render logo wall for sponsors
 * To add/remove sponsors or change logo images, go to sponsors.js
 */

const track = document.getElementById("marquee-track");

async function loadSponsors(){
    const res = await fetch("sponsors.json");
    const sponsors = await res.json();

    // Traverses through each sponsor and displays logo
    const groupHTML = sponsors.map(s => `
        <div class="brand">
            <img src="${s.src}" alt="${s.alt}">
        </div>
    `).join("");

    track.innerHTML = `
        <div class="marquee_group">${groupHTML}</div>
        <div class="marquee_group" aria-hidden="true">${groupHTML}</div>
    `
}

loadSponsors();

