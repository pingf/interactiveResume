import {resume} from '../../index';

var bp = 0;

export default function(that, bmd, color, fHeight,triggerX){

      return function(){

        bmd.context.lineJoin = "round";
        bmd.context.lineWidth = this.radius;

        if(this.charge.x > triggerX){
           if (fHeight >= bp) {

               bmd.context.strokeRect(this.radius/2,  bmd.height-10,this.radius,-bp);
               bmd.context.strokeStyle = color;
               bmd.dirty = true;
             bp += resume.time.elapsedMS*(fHeight/2000);
             }
           }
      };
}
