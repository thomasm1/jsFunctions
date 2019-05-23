class Emoji {
	// icon: string;
	constructor(public icon) {}
	// constructor(icon) {
	// this.icon = icon;
	}
const sun = new Emoji('sss');
sun.icon = 'kaka';
console.log('should be ..Emoji {icon: \'kaka\'}', sun) //Emoji {icon: 'kaka'}

/// Private
class EmojiPrivate {
	constructor(private _icon) {}
	get icon() {
		return this._icon;
	}
}
const sunPrivate = new EmojiPrivate('ss_ss')
console.log('shouldbe private ... ', sunPrivate.icon);

/// Toggle
class EmojiState {
	private _prev;
	constructor(private _icon) {}
	get icon() {
		return this._icon;
	}
	get  prev() {
		return this._prev;
	}
	change(val) {
		this._prev = this._icon;
		this._icon = val;
	}	
}
const emojiSt = new EmojiState('ssSSss')
console.log('should be ... ssSSs undefined: ', emojiSt.icon, emojiSt.prev) // ssSSs undefined
emojiSt.change('thTHth');
emojiSt.change('monKEY');
console.log('should be ... monKEY, thTHth: ', emojiSt.icon, emojiSt.prev) // monKEY, thTHth

/// Static methods
class EmojiMethod {
static addOneTo(val) {
	return 1 + val;
	}
}
EmojiMethod.addOneTo(3);
console.log('static method, 3 + 1 = ', EmojiMethod.addOneTo(3));
