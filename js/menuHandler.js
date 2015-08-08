function MenuHandler() {

	this.windowTop = $('#window-top');
	this.windowTopOffsetY = 0;

	MenuHandler.prototype.update = function() {
		this.windowTopOffsetY += 1;
		this.windowTop.css('bottom', this.windowTopOffsetY);
	} // END update()
}