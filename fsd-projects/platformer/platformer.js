$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms

createPlatform(0, 600, 200, 25, "#ebb8a3");
createPlatform(400, 500, 200, 25, "#ebb8a3");
createPlatform(600, 400, 200, 25, "#576c78");
createPlatform(900, 500, 200, 25, "#ebb8a3");
createPlatform(1200, 600, 200, 25, "#576c78");
createPlatform(420, 300, 105, 25, "#ebb8a3");
createPlatform(150, 200, 200, 25, "#576c78");
createPlatform(650, 200, 100, 25, "#576c78");
createPlatform(900, 200, 200, 25, "#ebb8a3");
createPlatform(1200, 300, 200, 25, "#576c78");
createPlatform(600, 625, 300, 25, "#576c78");
createPlatform(0, 450, 200, 25, "#576c78");
createBadPlatform(1300, 100, 100, 20, "#ebb8a3")
createBadPlatform(0, 725, 1400, 20, "#ebb8a3")
    // TODO 3 - Create Collectables
createCollectable("books", 750, 550, 0.5, 0.7);
createCollectable("books", 1250, 170, 0.5, 0.7);
createCollectable("books", 200, 150, 0.5, 0.7);
createCollectable("flower", 700, 150, 0.5, 0.7);
createCollectable("flower", 500, 450, 0.5, 0.7);
createCollectable("flower", 1300, 550, 0.5, 0.7);
createCollectable("flower", 100, 550, 0.5, 0.7);

    // TODO 4 - Create Cannons
createCannon("top", 300, 2500);
createCannon("right", 300, 2000);
createCannon("right", 540, 3500);
createCannon("top", 1000, 2000);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
