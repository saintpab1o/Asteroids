const Util = require("./utils");
const MovingObject = require("./moving_object");



const DEFAULT = {
    COLOR: "gray",
    RADIUS: 20,
    SPEED: 5,
};

function Asteroid(options){
    options.color = options.color || DEFAULT.COLOR;
    options.radius = DEFAULT.RADIUS;
    options.vel =  options.vel || Util.randomVec(DEFAULT.SPEED);
    this.pos = options.pos;

    MovingObject.call(this, options);
};

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;

// new Asteroid({ pos: [30, 30] });