import {termText} from '../modules/create';
import {resume} from '../../index';
import * as pData from '../../professionalData';
import * as style from '../../style';


 var line = [];
 var blockText = pData.termContent.join('');


 var wordIndex = 0;
 var lineIndex = 0;

 var wordDelay = 120;
 var lineDelay = 300;



export function terminal(){
      var executed = false;
      return function () {
          if (!executed) {
              executed = true;
              nextLine();
          }
      };
}


function nextLine() {


    if (lineIndex === pData.termContent.length)
    {
        //  We're finished
        return;
    }


    //  Split the current line on spaces, so one word per array element
    line = pData.termContent[lineIndex].split(' ');

    //  Reset the word index to zero (the first word in the line)
    wordIndex = 0;

    //  Call the 'nextWord' function once for each word in the line (line.length)
    resume.time.events.repeat(wordDelay, line.length, nextWord, this);

    //  Advance to the next line
    lineIndex++;

}

function nextWord() {

    //  Add the next word onto the text string, followed by a space




    termText.text = termText.text.concat(line[wordIndex] + " ");

    //  Advance the word index to the next word in the line
    wordIndex++;


    //  Last word?
    if (wordIndex === line.length)
    {
        //  Add a carriage return
        termText.text = termText.text.concat("\n");

        //  Get the next line after the lineDelay amount of ms has elapsed
        resume.time.events.add(lineDelay, nextLine, this);
    }

}


var count = 0;
export function synHighlight(){
  for (var j = 0; j < blockText.length; j++) {
      if( blockText[j] ==='='){
          termText.addColor(style.teal[1], j);
          termText.addColor(style.green[1], j+1);
      }else if (blockText[j] ==='{') {
          termText.addColor(style.lightGrey[1], j);
          termText.addColor(style.green[1], j+1);
      }else if (blockText[j] ===':' ) {
          count++;
          termText.addColor(style.lightGrey[1], j+count);
          termText.addColor(style.green[1], j+count+1);
      }else if (blockText[j] ==='[' || blockText[j] ===']' || blockText[j] ===',') {
          termText.addColor(style.lightGrey[1], j+count);
          termText.addColor(style.green[1], j+count+1);
      }else if( blockText[j] ==='}'){
        termText.addColor(style.lightGrey[1], j+count);
      }

  }
}
