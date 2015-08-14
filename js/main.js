// page fully loaded
window.onload = Main;


function Main() {
  // renderer
  var renderer = PIXI.autoDetectRenderer(400, 300, {antialiasing: false, transparent: false, resolution: 1});
  renderer.backgroundColor = 0x1099bb; //#FE7D0F
  renderer.view.style.position = "absolute";
  renderer.view.style.width = '100%';
  renderer.view.style.height = '100%';
  renderer.view.style.display = "block";
  renderer.autoResize = true;
  renderer.resize(window.innerWidth, window.innerHeight);

  // add renderer to the DOM
  // document.body.appendChild(renderer.view);
  document.getElementById('canvas-container').appendChild(renderer.view);

  var menuHandler = new MenuHandler();
  var stage = new PIXI.Container(); // the root object
  var world = new PIXI.Container(); // contains the game world objects

  stage.addChild(world);

  // add camera
  var camera = new Camera(1, world, renderer);
  camera.moveToX = 0;
  camera.moveToY = 0;

  // event fired when loading progress happens
  PIXI.loader.on('progress', function (loader, resources) {
      console.log('Progress:', loader.progress + '%' + ' [' + resources.name + ']');
  });

  // event fired when loading is complete
  PIXI.loader.on('complete', function (loader, resources) {

    console.log("done loading");

    animate(); // starts main loop

  });
  

  // the actual loader
  var loader = PIXI.loader
    .add('img/menu_window_texture.png')
    .load();


  function animate() {
    requestAnimationFrame(animate);

    update();

    renderer.render(stage);
  } // END animate

  function update() {

    menuHandler.update();
    // update camera's reference on move to point
    // camera.moveToX = myPlayer.sprite.x;
    // camera.moveToY = myPlayer.sprite.y;

    camera.update();

  } // END update
} // END Main
