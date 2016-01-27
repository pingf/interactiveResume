import {resume} from '../../index';
export default function(){
  resume.debug.text(
    'x: ' + Math.round(this.charge.x) + ' y: ' + Math.round(this.charge.y)+ ', roundPixels ' + resume.renderer.renderSession.roundPixels , 32, 32,'black'
  );
}
