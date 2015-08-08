function Island() {
	this.canvas = document.getElementById('canvas');
	this.canvasContext = this.canvas.getContext('2d');
	this.canvasContext.canvas.width = 960;
	this.canvasContext.canvas.height = window.innerHeight;

	this.width = this.canvas.width;
	this.height = this.canvas.height;
	this.state = "none";
}

Island.prototype.update = function() {
	//this.canvasContext.canvas.width = window.innerWidth;
	//this.canvasContext.canvas.height = window.innerHeight;
	this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Island.prototype.draw = function() {
	if (this.state == "about") {
		this.canvasContext.moveTo(this.width-100, this.height-100);
		this.canvasContext.beginPath();
	  this.canvasContext.lineTo(this.width-100, this.height-100);

	  this.canvasContext.lineTo(this.width-200, this.height-100);
	  this.canvasContext.lineTo(this.width-200, this.height-200);
	  this.canvasContext.lineTo(this.width-100, this.height-200);

	  this.canvasContext.closePath();

	  this.canvasContext.fillStyle = 'black';
	  this.canvasContext.fill();
	}
	else if (this.state == "portfolio") {

	}
	else {
		this.canvasContext.moveTo(0, 0);
		this.canvasContext.beginPath();
		this.canvasContext.lineTo(0, 0);
		this.canvasContext.lineTo(this.width, 0);
		this.canvasContext.lineTo(this.width, this.height);
		this.canvasContext.lineTo(0, this.height);
		this.canvasContext.closePath();

		this.canvasContext.fillStyle = 'black';
	  // this.canvasContext.fill();
	}
}