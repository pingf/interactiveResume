import {resume} from '../../index';

export default function(){
  //init fonts
  this.add.text(20, 20, '.', {font: '42px lintelregular',fill: '#fafafa'});
  // resume.renderer.renderSession.roundPixels = true;
  resume.world.setBounds(0, 0, this.worldWidth, this.worldHeight); //
  this.stage.backgroundColor = '#fafafa';
  resume.physics.startSystem(Phaser.Physics.ARCADE);


}
