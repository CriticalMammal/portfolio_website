function Island() {
	this.canvas = document.getElementById('canvas');
	this.canvasContext = this.canvas.getContext('2d');
	this.canvasContext.canvas.width = 960;
	this.canvasContext.canvas.height = window.innerHeight;
	this.state = "none";
}

Island.prototype.update = function() {
	// this.canvasContext.canvas.width = window.innerWidth;
	// this.canvasContext.canvas.height = window.innerHeight;
	this.canvasContext.moveTo(10, 10);
	this.canvasContext.beginPath();
  this.canvasContext.lineTo(10, 10);

  this.canvasContext.lineTo(200, 10);
  this.canvasContext.lineTo(200, 200);
  this.canvasContext.lineTo(10, 200);

  this.canvasContext.closePath();

  this.canvasContext.fillStyle = 'black';
  this.canvasContext.fill();
  this.canvasContext.strokeStyle = "thistle";
}