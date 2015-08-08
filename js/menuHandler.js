function MenuHandler() {
	this.windowTop = $('#window-top');
	this.windowBottom = $('#window-bottom');
	this.windowTopOffsetY = 0;
	this.windowTopGoal = 0;
	this.windowBottomOffsetY = 0;
	this.windowBottomGoal = 0;
	this.navAbout = document.getElementById("about");
	this.navPortfolio = document.getElementById("portfolio");
	this.dropdownTab = document.getElementById("dropdown-tab");
	this.navAbout.addEventListener("click", this.aboutEvent.bind(this));
	this.navPortfolio.addEventListener("click", this.portfolioEvent.bind(this));
	this.dropdownTab.addEventListener("click", this.openMenu.bind(this));
	this.state = "home";
};

MenuHandler.prototype.update = function() {
	// interpolate positions
	this.windowBottomOffsetY = interpolate(this.windowBottomOffsetY,
		this.windowBottomGoal, 0, 0.08);
	this.windowTopOffsetY = interpolate(this.windowTopOffsetY,
		this.windowTopGoal, 0, 0.08);

	this.windowTop.css('bottom', this.windowTopOffsetY);
	this.windowBottom.css('top', this.windowBottomOffsetY);
}; // END update()

MenuHandler.prototype.aboutEvent = function() {
	this.dropdownTab.style.display = "block";
	this.state = "about";
	this.windowTopGoal = 400;
	this.windowBottomGoal = 400;
}

MenuHandler.prototype.portfolioEvent = function() {
	this.dropdownTab.style.display = "block";
	this.state = "portfolio";
	this.windowTopGoal = 400;
	this.windowBottomGoal = 400;
};

MenuHandler.prototype.openMenu = function() {
	this.dropdownTab.style.display = "none";
	this.state = "home";
	this.windowTopGoal = 0;
	this.windowBottomGoal = 0;
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