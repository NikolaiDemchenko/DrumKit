window.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelectorAll(".box"),
          audio = document.querySelector(".music");

    box.forEach(value => value.addEventListener("click", ()=>{
        removeAction();
        value.classList.toggle("play");
        playMusicByClick(value);
    }));

    window.addEventListener("keypress", (e) => {
        box.forEach((value) => {
            value.classList.remove("play");
            if (e.key.toUpperCase() === value.firstElementChild.textContent) {
                playMusicByKey(e,value);
            }
        });
    });

    function playMusicByClick(value) {
        if (value.firstElementChild.textContent === "A") {
            audio.src = "sounds/clap.wav"
            audio.play();
        }

        if (value.firstElementChild.textContent === "S") {
            audio.src = "sounds/hihat.wav"
            audio.play();
        }

        if (value.firstElementChild.textContent === "D") {
            audio.src = "sounds/kick.wav"
            audio.play();
        }

        if (value.firstElementChild.textContent === "F") {
            audio.src = "sounds/openhat.wav"
            audio.play();
        }

        if (value.firstElementChild.textContent === "G") {
            audio.src = "sounds/boom.wav"
            audio.play();
        }

        if (value.firstElementChild.textContent === "H") {
            audio.src = "sounds/ride.wav"
            audio.play();
        }

        if (value.firstElementChild.textContent === "J") {
            audio.src = "sounds/snare.wav"
            audio.play();
        }

        if (value.firstElementChild.textContent === "K") {
            audio.src = "sounds/tom.wav"
            audio.play();
        }

        if (value.firstElementChild.textContent === "L") {
            audio.src = "sounds/tink.wav"
            audio.play();
        }
    }

    function playMusicByKey(e, value) {
        if (e.key.toUpperCase() === "A") {
            audio.src = "sounds/clap.wav"
            audio.play();
            value.classList.toggle("play");
        }

        if (e.key.toUpperCase() === "S") {
            audio.src = "sounds/hihat.wav"
            audio.play();
            value.classList.toggle("play");
        }

        if (e.key.toUpperCase() === "D") {
            audio.src = "sounds/kick.wav"
            audio.play();
            value.classList.toggle("play");
        }

        if (e.key.toUpperCase() === "F") {
            audio.src = "sounds/openhat.wav"
            audio.play();
            value.classList.toggle("play");
        }

        if (e.key.toUpperCase() === "G") {
            audio.src = "sounds/boom.wav"
            audio.play();
            value.classList.toggle("play");
        }

        if (e.key.toUpperCase() === "H") {
            audio.src = "sounds/ride.wav"
            audio.play();
            value.classList.toggle("play");
        }

        if (e.key.toUpperCase() === "J") {
            audio.src = "sounds/snare.wav"
            audio.play();
            value.classList.toggle("play");
        }

        if (e.key.toUpperCase() === "K") {
            audio.src = "sounds/tom.wav"
            audio.play();
            value.classList.toggle("play");
        }

        if (e.key.toUpperCase() === "L") {
            audio.src = "sounds/tink.wav"
            audio.play();
            value.classList.toggle("play");
        }
    }

    function removeAction() {
        box.forEach(value => value.classList.remove("play"));
    }
});
