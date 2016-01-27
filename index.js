import init from './src/modules/init';
import preload from './src/modules/preload';
import create from './src/modules/create';
import update from './src/modules/update';
import render from './src/modules/render';



// initalize variables scoped to modules
var Resume = function(){
  this.pathBMD = null;
  this.charge = null;
  this.cursors = null;
  this.xi = 100;
  this.yi = 100;
  this.points = {
    'x': [ this.xi, 100,1000,2000,3000,4000, 4900, 4900  ],
    'y': [ this.yi, 750,750,750,750,750,     750,  2000  ]
  };
  this.pos = 0;
  this.path = [];
  this.worldWidth = 1920*4;
  this.worldHeight= 1080*2;

};


// Create Methods in prototype
Resume.prototype = {
  init : init,
  preload : preload,
  create : create,
  update : update,
  render : render,
};



export var resume = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'resume');
resume.state.add('State', Resume, true);
