var buttonBmd, text;

export default function(that, resume, color,label,url,x,y){
  buttonBmd = that.add.bitmapData(140, 70);
  buttonBmd.shadow('rgba(0, 0, 0, 0.2)', 0.0001, 0.0001, 0.0001);
  buttonBmd.copy(color);
  resume.add.button(x, y,buttonBmd, animate, this);
  text =that.add.text( x+buttonBmd.width/2-53 ,y+buttonBmd.height/2-22 , label, {font : '20px lintelregular', fill: 'white'});

  var i = 0;
  function animate () {
    var arr = [ 0.0001, 1,2,3,4,4,3,2,1, 0.0001 ];
    setTimeout(function () {
                console.log(arr[i]);
      i++;

      buttonBmd.clear();
      buttonBmd.copy(color);
      buttonBmd.shadow('rgba(0, 0, 0, 0.2)', arr[i], 0.0001, arr[i]);

      if (i < arr.length) {
         animate();
      }else{
        i = 1;
        buttonBmd.shadow('rgba(0, 0, 0, 0.2)', 0.0001, 0.0001, 0.0001);
        // (function () {
        //     window.open(
        //       "http://www.facebook.com/sharer.php?s=100&p[url]=" + url);
        //   })();
        }
     }, 80);

  }


}
