// SHOW MENU //
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

const navLink = document.querySelectorAll('.nav_link');
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// BACKGROUND HEADER //
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 100) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader)

// VIDEO //
const videoFile = document.getElementById('video-file'),
    videoButton = document.getElementById('video-button'),
    videoIcon = document.getElementById('video-icon')

function playPause() {
    if (videoFile.paused) {
        videoFile.play()
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    } else{
        videoFile.pause()
        videoIcon.classList.add('ri-play-line')
        videoIcon.classList.remove('ri-pause-line')
    }
}
videoButton.addEventListener('click',playPause);

function finalVideo(){
    videoIcon.classList.add('ri-play-line')
    videoIcon.classList.remove('ri-pause-line')
}
videoFile.addEventListener('ended',finalVideo);