function MenuHandler() {
	this.windowTop = $('#window-top');
	this.windowBottom = $('#window-bottom');
	this.windowTopOffsetY = 0;
	this.windowTopGoal = 0;
	this.windowBottomOffsetY = 0;
	this.windowBottomGoal = 0;
	this.navAbout = document.getElementById("about");
	this.navAbout.addEventListener("click", this.wasClicked.bind(this));
	this.navPortfolio = document.getElementById("portfolio");
	this.navPortfolio.addEventListener("click", this.wasClicked.bind(this));
	this.state = "none";
};

MenuHandler.prototype.update = function() {
	// interpolate positions
	this.windowBottomOffsetY = interpolate(this.windowBottomOffsetY,
		this.windowBottomGoal, 0, 0.05);
	this.windowTopOffsetY = interpolate(this.windowTopOffsetY,
		this.windowTopGoal, 0, 0.05);

	this.windowTop.css('bottom', this.windowTopOffsetY);
	this.windowBottom.css('top', this.windowBottomOffsetY);
}; // END update()

MenuHandler.prototype.wasClicked = function() {
	this.state = "about";
	this.windowTopGoal = 400;
	this.windowBottomGoal = 400;
};

// linearly interpolate from part to goalPos (smooth animation effect)
function interpolate(pos, goalPos, currentLerp, lerpSpeed) {
		if (pos != goalPos) {
			currentLerp = 0;
		}

		if (currentLerp <= 1.0) {
			currentLerp += lerpSpeed;
		}

		pos = lerp(pos, currentLerp, goalPos);
    
    return pos;
}

// actual formula for linear interpolation 
function lerp(x, t, y) {
  return x * (1-t) + y*t;
}