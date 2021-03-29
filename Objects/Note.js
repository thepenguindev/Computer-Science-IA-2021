class Note {
	constructor(x, y) {
		this.isSharp = false;
		this.sharp_image;
		this.isFlat = false;
		this.flat_image;
		this.isNatural = false;
		this.natural_image;
		this.note_value = undefined;

		this.line_through = false;
		this.line_under_over = false;

		this.pos = new Vec2(x, y);
		// Drawing Variables
		this.horizontal_radius = 5;
		this.vertical_radius = this.horizontal_radius * (4/5);
		this.line_length = this.vertical_radius * 7;
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
		// Extra Lines
		if (this.line_under_over) {
			line(this.pos.x - 6, this.pos.y - this.vertical_radius, this.pos.x + 6, this.pos.y - this.vertical_radius);
			line(this.pos.x - 6, this.pos.y + this.vertical_radius, this.pos.x + 6, this.pos.y + this.vertical_radius);
		}
		else if (this.line_through) {
			line(this.pos.x - 6, this.pos.y, this.pos.x + 6, this.pos.y);
		}
	}

	highlight(r, g, b) {
		let rectWidth = 20;
		let rectHeight = 40;

		noStroke();
		fill(r, g, b, 100);
		rect(this.pos.x - (rectWidth / 2), this.pos.y - (rectHeight / 2) + 10, rectWidth, rectHeight);
	}

	displayImage(_image) {
		let image_pos = new Vec2(this.pos.x - (2.7 * this.horizontal_radius), this.pos.y);
		image(_image, image_pos.x, image_pos.y);
		_image.resize(350, 0);
		return this;
	}

	getImages(images) {
		this.sharp_image = images.sharp_image;
		this.flat_image = images.flat_image;
		this.natural_image = images.natural_image;
		return this;
	}

	setLineThrough(lineThrough) {
		this.line_through = lineThrough;
		return this;
	}

	setLineOverUnder(lineOverUnder) {
		this.line_under_over = lineOverUnder;
		return this;
	}

	setFlat(isFlat) {
		this.isFlat = isFlat;
		return this;
	}

	setSharp(isSharp) {
		this.isSharp = isSharp;
		return this;
	}

	setNatural(isNatural) {
		this.isNatural = isNatural;
		return this;
	}

	setNoteValue(value) {
		this.note_value = value;
		return this;
	}

	changePos(pos, x, y) {
		pos.x += x;
		pos.y += y;
		return this;
	}
}