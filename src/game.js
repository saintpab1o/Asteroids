const Asteroid = require("./asteroid");
const Util = require("./utils");


function Game (){
    this.asteroids = [];

    this.addAsteroids()
};

Game.DIM_X = 900;
Game.DIM_Y = 500;
Game.NUM_ASTEROIDS = 8;


Game.prototype.addAsteroids = function (){
    let pos = [];
    let i = 0;

    while(i < Game.NUM_ASTEROIDS) {
    // for(let i = 0; i < Game.NUM_ASTEROIDS; i++) {
        pos = this.randomPosition()
        if (this.asteroids.includes(pos)){
        } else{
            this.asteroids.push(pos)
            i ++;
        }
    }
}

Game.prototype.randomPosition = function randomPosition() {
    let x = Game.DIM_X * Math.random();
    let y =Game.DIM_Y * Math.random();
    return [x,y];
};