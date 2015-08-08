function Island() {
	this.canvas = document.getElementById('canvas');
	this.canvasContext = this.canvas.getContext('2d');
	this.canvasContext.canvas.width = window.innerWidth;
	this.canvasContext.canvas.height = window.innerHeight;

	Island.prototype.update = function() {
		this.canvasContext.canvas.width = window.innerWidth;
		this.canvasContext.canvas.height = window.innerHeight;
	}
}
