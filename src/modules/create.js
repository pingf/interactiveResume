import {resume} from '../../index';
import * as pData from '../../professionalData';
import * as style from '../../style';
import vertBar from '../components/vertBar';
import {terminal, synHighlight} from '../components/terminal';

export var termText;
export default function(){

  //intro
  var introLabelWidth = 370, introLabelHeight = 90, introLabelX = 510, introLabelY = 60;
  resume.add.sprite(introLabelX, introLabelY, 'banner');//.scale.setTo(0.9);
  var introLabel = resume.add.text(0, 0, pData.introLabel, style.banner);
  introLabel.setTextBounds(introLabelX, introLabelY+5, introLabelWidth, introLabelHeight);

  var cardWidth = 1000, cardHeight = 700, cardX = 200, cardY = 80;
  this.bizCardBmd = resume.add.bitmapData(cardWidth, cardHeight);
  this.bizCardBmd.shadow('rgba(0, 0, 0, 0.4)', 100  ,28,34);
  this.bizCardBmd.copy('bizcard');
  this.bizCard = resume.add.sprite(cardX ,cardY, this.bizCardBmd);

  var name = resume.add.text(0, 0, pData.name, style.name);
  name.setTextBounds(cardX, cardY-30, cardWidth, cardHeight);
  var title = resume.add.text(0, 0, pData.title, style.title);
  title.setTextBounds(cardX, cardY+50, cardWidth, cardHeight);




  //OverView
  var overviewWidth = 370, overviewHeight = 90, overviewX = 1650, overviewY = 60;
  resume.add.sprite(overviewX, overviewY, 'banner');//.scale.setTo(0.9);
  var overview = resume.add.text(0, 0, pData.overview, style.banner);
  overview.setTextBounds(overviewX, overviewY+5, overviewWidth, overviewHeight);

  var chartWidth = 667, chartHeight = 496, chartX = 1500, chartY =170;
  resume.add.sprite(chartX, chartY, 'chart');
  var chartLabels = resume.add.text(0, 0, pData.chartLabels, style.chart);
  chartLabels.setTextBounds(chartX, chartY+180, chartWidth, chartHeight);

  // Overview Bars
  this.radius = 9;   //width
  this.barHeight = {mid:135, high:275};
  this.barPosition = [1612, 1758, 1905, 2052];   //x-coordinate delta ≈ +146

  this.redBmd = this.add.bitmapData(this.radius*4, this.barHeight.mid+this.radius*2);
  this.redBar = resume.add.sprite(this.barPosition[0], 528-this.barHeight.mid, this.redBmd);
  this.redBarUpdater = vertBar(this, this.redBmd, style.red[1], this.barHeight.mid, 1300);

  this.tealBmd = this.add.bitmapData(this.radius*4, this.barHeight.high +this.radius*2);
  this.tealBar = resume.add.sprite(this.barPosition[1], 528-this.barHeight.high, this.tealBmd);
  this.tealBarUpdater = vertBar(this, this.tealBmd, style.teal[1], this.barHeight.high, 1300);

  this.yellowBmd = this.add.bitmapData(this.radius*4, this.barHeight.mid +this.radius*2);
  this.yellowBar = resume.add.sprite(this.barPosition[2], 528-this.barHeight.mid, this.yellowBmd);
  this.yellowBarUpdater = vertBar(this, this.yellowBmd, style.yellow[1], this.barHeight.mid, 1300);


  this.greenBmd = this.add.bitmapData(this.radius*4, this.barHeight.high +this.radius*2);
  this.greenBar = resume.add.sprite(this.barPosition[3], 528-this.barHeight.high, this.greenBmd);
  this.greenBarUpdater = vertBar(this, this.greenBmd, style.green[1], this.barHeight.high, 1300);


  // Value Cards
  var valuesWidth = 370, valuesHeight = 90, valuesX = 2810, valuesY = 60;
  resume.add.sprite(valuesX, valuesY, 'banner');//.scale.setTo(0.9);
  var values = resume.add.text(0, 0, pData.values, style.banner);
  values.setTextBounds(valuesX, valuesY+5, valuesWidth, valuesHeight);

  var rCardWidth = 399, rCardHeight = 229, rCardX = 2550  , rCardY =500;
  resume.add.sprite(rCardX, rCardY, 'purpleCard').scale.setTo(0.9);
  var eeH1 = resume.add.text(0,0, pData.ee.h1, style.h1);
  eeH1.setTextBounds(rCardX+35, rCardY-15, rCardWidth,rCardHeight);
  var eeH2 = resume.add.text(0,0, pData.ee.h2, style.h2);
  eeH2.setTextBounds(rCardX+35, rCardY+60, rCardWidth,rCardHeight);

  var tCardWidth = 399, tCardHeight = 229, tCardX = 3000  , tCardY =480;
  resume.add.sprite(tCardX, tCardY, 'tealCard').scale.setTo(0.9);
  var mrH1 = resume.add.text(0,0, pData.mr.h1, style.h1);
  mrH1.setTextBounds(tCardX+35, tCardY-15, tCardWidth,tCardHeight);
  var mrH2 = resume.add.text(0,0, pData.mr.h2, style.h2);
  mrH2.setTextBounds(tCardX+35, tCardY+60, tCardWidth,tCardHeight);

  var bCardWidth = 399, bCardHeight = 229, bCardX = 3100  , bCardY =300;
  resume.add.sprite(bCardX, bCardY, 'blueCard').scale.setTo(0.9);
  var agileH1 = resume.add.text(0,0, pData.agile.h1, style.h1);
  agileH1.setTextBounds(bCardX+35, bCardY, bCardWidth,bCardHeight);
  var agileH2 = resume.add.text(0,0, pData.agile.h2, style.h2);
  agileH2.setTextBounds(bCardX+35, bCardY+60, bCardWidth,bCardHeight);

  var yCardWidth = 399, yCardHeight = 229, yCardX = 2470, yCardY =330;
  resume.add.sprite(yCardX, yCardY, 'yellowCard').scale.setTo(0.9);
  var tddH1 = resume.add.text(0,0, pData.tdd.h1, style.h1);
  tddH1.setTextBounds(yCardX+35, yCardY-15, yCardWidth,yCardHeight);
  var tddH2 = resume.add.text(0,0, pData.tdd.h2, style.h2);
  tddH2.setTextBounds(yCardX+35, yCardY+60, yCardWidth,yCardHeight);


  var pCardWidth = 399, pCardHeight = 229, pCardX = 2800, pCardY =170;
  resume.add.sprite(pCardX, pCardY, 'redCard').scale.setTo(0.9);
  var lifeLearnH1 = resume.add.text(0,0, pData.lifeLearn.h1, style.h1);
  lifeLearnH1.setTextBounds(pCardX+35, pCardY-15, pCardWidth,pCardHeight);
  var lifeLearnH2 = resume.add.text(0,0, pData.lifeLearn.h2, style.h2);
  lifeLearnH2.setTextBounds(pCardX+35, pCardY+60, pCardWidth,pCardHeight);



  // Tools
  var toolsWidth = 370, toolsHeight = 90, toolsX = 4100, toolsY = 60;
  resume.add.sprite(toolsX, toolsY, 'banner');//.scale.setTo(0.9);
  var tools = resume.add.text(0, 0, pData.tools, style.banner);
  tools.setTextBounds(toolsX, toolsY+5, toolsWidth, toolsHeight);

  var terminalWidth = 759, terminalHeight = 448, terminalX = 3910, terminalY =210;
  resume.add.sprite(terminalX, terminalY, 'terminal');

  termText = resume.add.text(terminalX+60, terminalY+80, '', style.terminal);
  this.wordByWord = terminal();  //creates closure and ties it resume object so it cn be triggered in the update method
  synHighlight(); // adds syntax highlighting


  /*   ------- SKILLS ----------  */

  var skillWidth = 1000, skillHeight = 700, skillX = 5000, skillY = 80;
  this.skillBmd = resume.add.bitmapData(skillWidth, skillHeight);
  this.skillBmd.shadow('rgba(0, 0, 0, 0.4)', 100  ,28,34);
  this.skillBmd.copy('cardMarker');
  this.skillCard = resume.add.sprite(skillX ,skillY, this.skillBmd);

  var skills = resume.add.text(0, 0, 'Skills', style.skills);
  skills.setTextBounds(skillX, skillY, skillWidth, skillHeight);




  var bye = resume.add.text(5300, 1960, 'More On the Way...', {font: '30px Roboto', fill: style.red[1] } );






















  // create world, path, sprite, cursors
  this.pathBMD =this.add.bitmapData(resume.width, resume.height);
  this.pathBMD.addToWorld();
  this.charge = this.add.sprite(this.xi,this.yi, 'charge');
  this.charge.anchor.set(0.5);
  this.cursors = this.input.keyboard.createCursorKeys();
  plotPath(this);


  // resume.physics.startSystem(Phaser.Physics.ARCADE);
  // resume.physics.arcade.enable([this.charge]); // enable more bodies int his array




  // EXAMPLES
  //  resume.add.sprite(0, 100, 'skillsPanelBlue');
  // button(this, resume, 'yellowButton','Verify This','http://www.jndesigns.io/resume', 500,300);
  //  horizonBarCreate(this,resume,500,110,239);
  // pieChart(this,[0.5,0.5],[red, green],100,200);
  //   modalButton(this,resume,'http://www.jndesigns.io/resume',200,100);
  // var text = this.add.text( 100,400, 'Joe', {font : '60px lintelregular', fill: 'grey' });







}



function plotPath(that){

  var x = 1 / resume.width;
  for (var i = 0; i <= 1; i += x*6) {
    var px = resume.math.linearInterpolation(that.points.x, i);
    var py = resume.math.linearInterpolation(that.points.y, i);
    that.path.push( { x:px, y:py } );
    that.pathBMD.rect(px,py, 1,1, 'rgba(140, 140, 140, 1)');
  }

}
