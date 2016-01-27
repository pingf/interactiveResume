import {resume} from '../../index';


export default function(){

  //charge movement




resume.camera.focusOnXY(this.charge.x+500, this.charge.y-600);

if(this.charge.x === 4900){
  resume.camera.focusOnXY(this.charge.x+500, this.charge.y-300);
}


  if(this.cursors.right.isDown){
    this.charge.x = this.path[this.pos].x;
    this.charge.y = this.path[this.pos].y;
    this.pos++;
  }else if(this.cursors.left.isDown){
    this.charge.x = this.path[this.pos].x;
    this.charge.y = this.path[this.pos].y;
    this.pos--;
  }

  if (this.pos <0){
    this.pos = 0;
  }else if (this.pos >= this.path.length) {
    this.pos = this.path.length -1;
  }



  //Intro
  var offset = moveToXY(this.charge, this.bizCard.x, this.bizCard.y, 20);
  this.bizCardBmd.clear();
  this.bizCardBmd.shadow( 'rgba(0, 0, 0, 0.4)', 100  , offset.x, offset.y+50);
  this.bizCardBmd.copy('bizcard');




  this.redBarUpdater();
  this.tealBarUpdater();
  this.yellowBarUpdater();
  this.greenBarUpdater();


  if(this.charge.x > 3600){
      this.wordByWord();
  }


}


function moveToXY(displayObject, x, y, speed) {

    var _angle = Math.atan2(y - displayObject.y, x - displayObject.x);
    var x2 = Math.cos(_angle) * speed;
    var y2 = Math.sin(_angle) * speed;
    return { x: x2, y: y2 };

}
