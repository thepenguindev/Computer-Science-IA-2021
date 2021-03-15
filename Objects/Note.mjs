import Vec2 from './Vec2.mjs';

export default class Note {
	constructor(x, y) {
		this.isSharp = false;
		this.isFlat = false;
		this.pos = new Vec2(x, y);
	}

	draw() {

	}
}