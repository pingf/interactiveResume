export default function(that, data, colors,x,y){
  // // PIE CHARTS
  var lastPosition = 0;
  var pie = that.add.graphics(x, y);
  for (var i = 0; i < data.length; i++) {
    pie.beginFill(colors[i]);
    pie.arc( 100, 100, 135 ,lastPosition, Math.PI*2*(data[i]) + lastPosition, false);
    pie.lineTo(100,100);
    pie.endFill();
    lastPosition += Math.PI*2*(data[i]);
  }
}
