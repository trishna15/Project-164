AFRAME.registerComponent("player-movement", {
  init: function () {
    this.walk();
  },
  walk: function () {
    window.addEventListener("keydown", (e) => {

      if (
        e.key === "ArrowUp" ||
        e.key === "ArrowRight" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowDown"
        ) {

          var sound2 = document.querySelector("#sound2");

          sound2.components.sound.playSound();
        
      }
    });
  },
});

