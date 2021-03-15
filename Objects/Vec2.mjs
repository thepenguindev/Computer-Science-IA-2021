export default class Vec2 {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	add(vec) {
		this.x += vec.x;
		this.y += vec.y;
	}

	equals(vec) {
		return this.x == vec.x && this.y == vec.y;
	}
}