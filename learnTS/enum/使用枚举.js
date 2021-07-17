"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 2] = "Up";
    Direction[Direction["Down"] = 3] = "Down";
    Direction[Direction["Left"] = 4] = "Left";
    Direction[Direction["Right"] = 5] = "Right";
})(Direction || (Direction = {}));
function respond(word, message) {
    console.log(word + message);
}
respond('hello,world', Direction.Left);
