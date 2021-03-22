class Note {
	constructor(x, y) {
		this.isSharp = false;
		this.sharp_image;
		this.isFlat = false;
		this.flat_image;
		this.isNatural = false;
		this.natural_image;

		this.pos = new Vec2(x, y);
		// Drawing Variables
		this.horizontal_radius = 5;
		this.vertical_radius = this.horizontal_radius * (4/5);
		this.line_length = this.vertical_radius * 10;
	}

	draw() {
		// Main Circle
		noStroke();
		fill(0, 0, 0);
		ellipse(this.pos.x, this.pos.y, 2 * this.horizontal_radius, 2 * this.vertical_radius);
		// Line
		strokeWeight(2);
		stroke(0);
		line(this.pos.x - this.horizontal_radius, this.pos.y, this.pos.x - this.horizontal_radius, this.pos.y + this.line_length);
		// Flat || Sharp
		if (this.isSharp) {
			this.displayImage(this.sharp_image);
		}
		else if (this.isFlat) {
			this.displayImage(this.flat_image);
		}
		else if (this.isNatural) {
			this.displayImage(this.natural_image);
		}
	}

	displayImage(_image) {
		let image_pos = new Vec2(this.pos.x - (2.7 * this.horizontal_radius), this.pos.y);
		image(_image, image_pos.x, image_pos.y);
		_image.resize(350, 0);
	}

	getImages(images) {
		this.sharp_image = images.sharp_image;
		this.flat_image = images.flat_image;
		this.natural_image = images.natural_image;
	}

	setFlat(isFlat) {
		this.isFlat = isFlat;
	}

	setSharp(isSharp) {
		this.isSharp = isSharp;
	}

	setNatural(isNatural) {
		this.isNatural = isNatural;
	}
}