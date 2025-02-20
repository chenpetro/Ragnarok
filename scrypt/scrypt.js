const navbarButton = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('#navbarSupportedContent');

//Modal///////////////////////////////////////////////////









//Trailer Section/////////////////////////////////////////////////////////////

// Initialize the YouTube player variable
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-iframe', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    document.getElementById('play-btn').addEventListener('click', function() {
        document.querySelector('.trailer__video').style.display = 'block'; // Show the video
        document.querySelector('.trailer__box__title').style.display = 'none'; // Hide title
        document.getElementById('play-btn').style.display = 'none'; // Hide button
        player.playVideo(); // Play the video
        console.log("Video is playing"); // Debugging
    });
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        document.querySelector('.trailer__video').style.display = 'none'; // Hide the video
        player.stopVideo(); // Stop the video instead of seeking
        document.querySelector('.trailer__box__title').style.display = 'block'; // Show title
        document.getElementById('play-btn').style.display = 'block'; // Show button
        console.log("Video has ended"); // Debugging
    }
}

// Ensure the YouTube API script is loaded before executing this
window.onload = function() {
    const script = document.createElement('script');
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);
};


// document.getElementById('play-btn').addEventListener('click', function() {
//     var video = document.getElementById('trailerVideo');
//     video.style.display = 'block'; // Show the video when the button is clicked
// });











//Swiper/////////////////////////////////////////////////////////

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });