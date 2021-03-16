import Vec2 from './Vec2.mjs';

export default class Note {
	constructor(x, y) {
		this.isSharp = false;
		this.isFlat = false;
		this.pos = new Vec2(x, y);
		// Drawing Variables
		this.horizontal_radius = 5;
		this.vertical_radius = this.horizontal_radius * (4/5);
		this.line_length = 40;
	}

	draw() {
		// Main Circle
		noStroke();
		fill(0, 0, 0);
		ellipse(this.pos.x, this.pos.y, 2 * this.horizontal_radius, 2 * this.vertical_radius);
		// Line
		strokeWeight(2);
		stroke(0);
		line(this.pos.x + this.horizontal_radius, this.pos.y, this.pos.x + this.horizontal_radius, this.pos.y - this.line_length);
	}

	setFlat(isFlat) {
		this.isFlat = isFlat;
	}

	setSharp(isSharp) {
		this.isSharp = isSharp;
	}
}