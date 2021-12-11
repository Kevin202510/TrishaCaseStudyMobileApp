import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-english',
  templateUrl: './english.page.html',
  styleUrls: ['./english.page.scss'],
})
export class EnglishPage implements OnInit {
  lev:string;
  estat = false;
  
  constructor() { 
    var dat = JSON.parse(localStorage.getItem('Level'));
    this.lev = dat.Level;
  }

  checkAnswer(event,valval:number){
    this.checkAns(event.detail.value,valval);
    // console.log(event.detail.value);
  }

  saveScoreAndGo(){
    if(localStorage.getItem("EngScore")===null){
      var data = {Score : this.corAns};
      localStorage.setItem('EngScore',JSON.stringify(data));
    }
    var datas = JSON.parse(localStorage.getItem('EngScore'));
    datas.Score = this.corAns;
    localStorage.setItem('EngScore',JSON.stringify(datas));
  }

  corAns:number = 0;
  answerSelected1 = false;
answerSelected2 = false;
answerSelected3 = false;
answerSelected4 = false;
answerSelected5 = false;
answerSelected6 = false;
answerSelected7 = false;
answerSelected8 = false;
answerSelected9 = false;
answerSelected10 = false;
answerSelected11 = false;
answerSelected12 = false;
answerSelected13 = false;
answerSelected14 = false;
answerSelected15 = false;
answerSelected16 = false;
answerSelected17 = false;
answerSelected18 = false;
answerSelected19 = false;
answerSelected20 = false;
answerSelected21 = false;
answerSelected22 = false;
answerSelected23 = false;
answerSelected24 = false;
answerSelected25 = false;
answerSelected26 = false;
answerSelected27 = false;
answerSelected28 = false;
answerSelected29 = false;
answerSelected30 = false;
answerSelected31 = false;
answerSelected32 = false;
answerSelected33 = false;
answerSelected34 = false;
answerSelected35 = false;
answerSelected36 = false;
answerSelected37 = false;
answerSelected38 = false;
answerSelected39 = false;
answerSelected40 = false;
answerSelected41 = false;
answerSelected42 = false;
answerSelected43 = false;
answerSelected44 = false;
answerSelected45 = false;
answerSelected46 = false;
answerSelected47 = false;
answerSelected48 = false;
answerSelected49 = false;
answerSelected50 = false;


  checkAns(val:string,qnum:number){
  
      if(val === "Romeo and Juliet" && qnum == 1){
      this.corAns++;
      }
      else if(val === "Song to Celia" && qnum == 2){
      this.corAns++;
      }
      else if(val === "The World is Too Much With Us" && qnum == 3){
      this.corAns++;
      }
      else if(val === "Jose Garcia Villa" && qnum == 4){
      this.corAns++;
      }
      else if(val === "A PSALM OF LIFE" && qnum == 5){
      this.corAns++;
      }
      else if(val === "To observe confidentiality" && qnum == 6){
      this.corAns++;
      }
      else if(val === "Constructivist" && qnum == 7){
      this.corAns++;
      }
      else if(val === "Blend" && qnum == 8){
      this.corAns++;
      }
      else if(val === "Is looking" && qnum == 9){
      this.corAns++;
      }
      else if(val === "Constructivist" && qnum == 10){
      this.corAns++;
      }
      else if(val === "Interactive" && qnum == 11){
      this.corAns++;
      }
      else if(val === "Writing" && qnum == 12){
      this.corAns++;
      }
      else if(val === "Study" && qnum == 13){
      this.corAns++;
      }
      else if(val === "Knowledge Recognition" && qnum == 14){
      this.corAns++;
      }
      else if(val === "Thomas Paine" && qnum == 15){
      this.corAns++;
      }
      else if(val === "Turgenew" && qnum == 16){
      this.corAns++;
      }
      else if(val === "MECHANT OF VENICE" && qnum == 17){
      this.corAns++;
      }
      else if(val === "John F. Kennedy" && qnum == 18){
      this.corAns++;
      }
      else if(val === "Syntactic" && qnum == 19){
      this.corAns++;
      }
      else if(val === "Motion" && qnum == 20){
      this.corAns++;
      }
      else if(val === "What are the figurative language and sound techniques used?" && qnum == 21){
      this.corAns++;
      }
      else if(val === "What is meant by the comparison under the skin/ our skull rise /to the surface/ like rocks in the bed/ of a drying stream”?" && qnum == 22){
      this.corAns++;
      }
      else if(val === "Who attended the 25th high school reunion?" && qnum == 23){
      this.corAns++;
      }
      else if(val === "literal comprehension" && qnum == 24){
      this.corAns++;
      }
      else if(val === "Critical evaluation" && qnum == 25){
      this.corAns++;
      }
      else if(val === "alliteration" && qnum == 26){
      this.corAns++;
      }
      else if(val === "visual" && qnum == 27){
      this.corAns++;
      }
      else if(val === "twinge of sadness" && qnum == 28){
      this.corAns++;
      }
      else if(val === "personification" && qnum == 29){
      this.corAns++;
      }
      else if(val === "insight" && qnum == 30){
      this.corAns++;
      }
      else if(val === "reverence for nature" && qnum == 31){
      this.corAns++;
      }
      else if(val === "that he be a child once again" && qnum == 32){
      this.corAns++;
      }
      else if(val === "paradox" && qnum == 33){
      this.corAns++;
      }
      else if(val === "verbal irony" && qnum == 34){
      this.corAns++;
      }
      else if(val === "to appreciate even the smallest of things" && qnum == 35){
      this.corAns++;
      }
      else if(val === "It can both wipe out and maintain life." && qnum == 36){
      this.corAns++;
      }
      else if(val === "incensed" && qnum == 37){
      this.corAns++;
      }
      else if(val === "sinning of Adam and Eve" && qnum == 38){
      this.corAns++;
      }
      else if(val === "Let’s be true to our love, and we will be joined in eternity" && qnum == 39){
      this.corAns++;
      }
      else if(val === "Lord of the Rings" && qnum == 40){
      this.corAns++;
      }
      else if(val === "life and freedom" && qnum == 41){
      this.corAns++;
      }
      else if(val === "People have different roles to play in life" && qnum == 42){
      this.corAns++;
      }
      else if(val === "People search for their meaning" && qnum == 43){
      this.corAns++;
      }
      else if(val === "alienation from the society" && qnum == 44){
      this.corAns++;
      }
      else if(val === "Abraham Lincoln" && qnum == 45){
      this.corAns++;
      }
      else if(val === "He finds them so different from the rest of society" && qnum == 46){
      this.corAns++;
      }
      else if(val === "Pessimistic" && qnum == 47){
      this.corAns++;
      }
      else if(val === "They closely represent the real social life of the times" && qnum == 48){
      this.corAns++;
      }
      else if(val === "Life is short." && qnum == 49){
      this.corAns++;
      }
      else if(val === "Anybody can be a hero." && qnum == 50){
      this.corAns++;
      }

      if(qnum == 1){
      this.answerSelected1 = true;
      }
      if(qnum == 2){
      this.answerSelected2 = true;
      }
      if(qnum == 3){
      this.answerSelected3 = true;
      }
      if(qnum == 4){
      this.answerSelected4 = true;
      }
      if(qnum == 5){
      this.answerSelected5 = true;
      }
      if(qnum == 6){
      this.answerSelected6 = true;
      }
      if(qnum == 7){
      this.answerSelected7 = true;
      }
      if(qnum == 8){
      this.answerSelected8 = true;
      }
      if(qnum == 9){
      this.answerSelected9 = true;
      }
      if(qnum == 10){
      this.answerSelected10 = true;
      }
      if(qnum == 11){
      this.answerSelected11 = true;
      }
      if(qnum == 12){
      this.answerSelected12 = true;
      }
      if(qnum == 13){
      this.answerSelected13 = true;
      }
      if(qnum == 14){
      this.answerSelected14 = true;
      }
      if(qnum == 15){
      this.answerSelected15 = true;
      }
      if(qnum == 16){
      this.answerSelected16 = true;
      }
      if(qnum == 17){
      this.answerSelected17 = true;
      }
      if(qnum == 18){
      this.answerSelected18 = true;
      }
      if(qnum == 19){
      this.answerSelected19 = true;
      }
      if(qnum == 20){
      this.answerSelected20 = true;
      }
      if(qnum == 21){
      this.answerSelected21 = true;
      }
      if(qnum == 22){
      this.answerSelected22 = true;
      }
      if(qnum == 23){
      this.answerSelected23 = true;
      }
      if(qnum == 24){
      this.answerSelected24 = true;
      }
      if(qnum == 25){
      this.answerSelected25 = true;
      }
      if(qnum == 26){
      this.answerSelected26 = true;
      }
      if(qnum == 27){
      this.answerSelected27 = true;
      }
      if(qnum == 28){
      this.answerSelected28 = true;
      }
      if(qnum == 29){
      this.answerSelected29 = true;
      }
      if(qnum == 30){
      this.answerSelected30 = true;
      }
      if(qnum == 31){
      this.answerSelected31 = true;
      }
      if(qnum == 32){
      this.answerSelected32 = true;
      }
      if(qnum == 33){
      this.answerSelected33 = true;
      }
      if(qnum == 34){
      this.answerSelected34 = true;
      }
      if(qnum == 35){
      this.answerSelected35 = true;
      }
      if(qnum == 36){
      this.answerSelected36 = true;
      }
      if(qnum == 37){
      this.answerSelected37 = true;
      }
      if(qnum == 38){
      this.answerSelected38 = true;
      }
      if(qnum == 39){
      this.answerSelected39 = true;
      }
      if(qnum == 40){
      this.answerSelected40 = true;
      }
      if(qnum == 41){
      this.answerSelected41 = true;
      }
      if(qnum == 42){
      this.answerSelected42 = true;
      }
      if(qnum == 43){
      this.answerSelected43 = true;
      }
      if(qnum == 44){
      this.answerSelected44 = true;
      }
      if(qnum == 45){
      this.answerSelected45 = true;
      }
      if(qnum == 46){
      this.answerSelected46 = true;
      }
      if(qnum == 47){
      this.answerSelected47 = true;
      }
      if(qnum == 48){
      this.answerSelected48 = true;
      }
      if(qnum == 49){
      this.answerSelected49 = true;
      }
      if(qnum == 50){
      this.answerSelected50 = true;
      this.saveScoreAndGo();
      this.computeAve();
      }

      console.log(this.corAns);
      

      
  }

totalGeScore = 0;
totalPEScore = 0;
totalEngScore = 0;
totalAverage = 0;

  computeAve(){
    if(this.lev==="Sec"){
      this.estat = true;
      // alert(this.estat);
      var datas = JSON.parse(localStorage.getItem('ProfEdScore'));
      var data = JSON.parse(localStorage.getItem('GenEdScore'));
      var datass = JSON.parse(localStorage.getItem('EngScore'));

      this.totalGeScore = data.Score;
      this.totalPEScore = datas.Score;
      this.totalEngScore = datass.Score;
      this.totalAverage = Math.floor((((this.totalGeScore/50)*0.2)*100) + (((this.totalPEScore/50)*0.4)*100) + (((this.totalEngScore/50)*0.4)*100));
    }
  }

  ngOnInit() {
  }

}
