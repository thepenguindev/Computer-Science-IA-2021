import Vec2 from './Vec2.mjs';

export default class Note {
	constructor(x, y) {
		this.isSharp = false;
		this.isFlat = false;
		this.pos = new Vec2(x, y);
		// Drawing Variables
		this.horizontal_radius = 50;
		this.vertical_radius = this.horizontal_radius * (4/5);
		this.line_length = 100;
	}

	draw() {
		// Main Circle
		ellipse(this.pos.x, this.pos.y, 2 * this.horizontal_radius, 2 * this.vertical_radius);
		line(this.pos.x + this.horizontal_radius, this.pos.y, this.pos.x + this.horizontal_radius, this.pos.y - this.line_length);
	}

	setFlat(isFlat) {
		this.isFlat = isFlat;
	}

	setSharp(isSharp) {
		this.isSharp = isSharp;
	}
}