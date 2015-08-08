var island = new Island();
var menuHandler = new MenuHandler();

// // document loaded
// $(document).ready(function() {

// });

// page fully loaded
window.onload = main;


function main() {
	
	update();
	
  function update() {
    menuHandler.update();
    island.state = menuHandler.state;
    island.update();

    requestAnimFrame(update); // do it all again
  }
}

// animation request with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / FPS);
          };
})();
