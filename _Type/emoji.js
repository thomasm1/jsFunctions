var Emoji = /** @class */ (function () {
    // icon: string;
    function Emoji(icon) {
        this.icon = icon;
    }
    return Emoji;
}());
var sun = new Emoji('sss');
sun.icon = 'kaka';
console.log('should be ..Emoji {icon: \'kaka\'}', sun); //Emoji {icon: 'kaka'}
/// Private
var EmojiPrivate = /** @class */ (function () {
    function EmojiPrivate(_icon) {
        this._icon = _icon;
    }
    Object.defineProperty(EmojiPrivate.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        enumerable: true,
        configurable: true
    });
    return EmojiPrivate;
}());
var sunPrivate = new EmojiPrivate('ss_ss');
console.log('shouldbe private ... ', sunPrivate.icon);
/// Toggle
var EmojiState = /** @class */ (function () {
    function EmojiState(_icon) {
        this._icon = _icon;
    }
    Object.defineProperty(EmojiState.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmojiState.prototype, "prev", {
        get: function () {
            return this._prev;
        },
        enumerable: true,
        configurable: true
    });
    EmojiState.prototype.change = function (val) {
        this._prev = this._icon;
        this._icon = val;
    };
    return EmojiState;
}());
var emojiSt = new EmojiState('ssSSss');
console.log('should be ... ssSSs undefined: ', emojiSt.icon, emojiSt.prev); // ssSSs undefined
emojiSt.change('thTHth');
emojiSt.change('monKEY');
console.log('should be ... monKEY, thTHth: ', emojiSt.icon, emojiSt.prev); // monKEY, thTHth
/// Static methods
var EmojiMethod = /** @class */ (function () {
    function EmojiMethod() {
    }
    EmojiMethod.addOneTo = function (val) {
        return 1 + val;
    };
    return EmojiMethod;
}());
EmojiMethod.addOneTo(3);
console.log('static method, 3 + 1 = ', EmojiMethod.addOneTo(3));
