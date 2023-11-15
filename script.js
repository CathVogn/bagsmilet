function myFunction() {
    location.reload();
 }

var typed = new Typed(".auto-type", {
    strings: ["Leif", "far", "hjemløs", "stiknarkoman", "stofmisbruger", "menneske"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})


var typed = new Typed(".auto-type1", {
    strings: ["hjemløs", "stiknarkoman", "stofmisbruger"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

AOS.init();


function toggleAudio(audioId) {
  var audio = document.getElementById(audioId);
  
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0; // Setter lyden tilbake til starten når den stoppes
  }
}

  
