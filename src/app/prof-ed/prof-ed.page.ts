import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prof-ed',
  templateUrl: './prof-ed.page.html',
  styleUrls: ['./prof-ed.page.scss'],
})
export class ProfEdPage implements OnInit {

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
    if(localStorage.getItem("ProfEdScore")===null){
      var data = {Score : this.corAns};
      localStorage.setItem('ProfEdScore',JSON.stringify(data));
    }
    var datas = JSON.parse(localStorage.getItem('ProfEdScore'));
    datas.Score = this.corAns;
    localStorage.setItem('ProfEdScore',JSON.stringify(datas));
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
  
      if(val === "Administer a diagnostic test." && qnum == 1){
      this.corAns++;
      }
      else if(val === "norm-referenced test" && qnum == 2){
      this.corAns++;
      }
      else if(val === "Valid" && qnum == 3){
      this.corAns++;
      }
      else if(val === "active participation" && qnum == 4){
      this.corAns++;
      }
      else if(val === "sketching/illustrating events" && qnum == 5){
      this.corAns++;
      }
      else if(val === "voluntary accreditation" && qnum == 6){
      this.corAns++;
      }
      else if(val === "face" && qnum == 7){
      this.corAns++;
      }
      else if(val === "Learning is defined as a change in the learner's observable performance" && qnum == 8){
      this.corAns++;
      }
      else if(val === "Table of Specifications" && qnum == 9){
      this.corAns++;
      }
      else if(val === "pormaover substance" && qnum == 10){
      this.corAns++;
      }
      else if(val === "Use the objectives for the units as guide in your test construction." && qnum == 11){
      this.corAns++;
      }
      else if(val === "Computation" && qnum == 12){
      this.corAns++;
      }
      else if(val === "Archeology" && qnum == 13){
      this.corAns++;
      }
      else if(val === "operant conditioning theory" && qnum == 14){
      this.corAns++;
      }
      else if(val === "You will not object when your students daydream in class." && qnum == 15){
      this.corAns++;
      }
      else if(val === "independent thinking" && qnum == 16){
      this.corAns++;
      }
      else if(val === "I, II, and III" && qnum == 17){
      this.corAns++;
      }
      else if(val === "project " && qnum == 18){
      this.corAns++;
      }
      else if(val === "II and III" && qnum == 19){
      this.corAns++;
      }
      else if(val === "I and II" && qnum == 20){
      this.corAns++;
      }
      else if(val === "Existentialism" && qnum == 21){
      this.corAns++;
      }
      else if(val === "Constructivism" && qnum == 22){
      this.corAns++;
      }
      else if(val === "Progressivism" && qnum == 23){
      this.corAns++;
      }
      else if(val === "Existentialism" && qnum == 24){
      this.corAns++;
      }
      else if(val === "Progressivism" && qnum == 25){
      this.corAns++;
      }
      else if(val === "A process of individual growth and social development" && qnum == 26){
      this.corAns++;
      }
      else if(val === "Widely read" && qnum == 27){
      this.corAns++;
      }
      else if(val === "Acquaint her with principles of moral behavior, conduct and relationship in the practice of profession" && qnum == 28){
      this.corAns++;
      }
      else if(val === "Leading children to acquire about his environment" && qnum == 29){
      this.corAns++;
      }
      else if(val === "Revealing confidential information to authorities concerned" && qnum == 30){
      this.corAns++;
      }
      else if(val === "local situations and community" && qnum == 31){
      this.corAns++;
      }
      else if(val === "Criterion of interest" && qnum == 32){
      this.corAns++;
      }
      else if(val === "rearranging or adding lesson content to provide task-relevant prior knowledge" && qnum == 33){
      this.corAns++;
      }
      else if(val === "knowledge of concepts" && qnum == 34){
      this.corAns++;
      }
      else if(val === "Lesson planning is a systematic process" && qnum == 35){
      this.corAns++;
      }
      else if(val === "The incorporation of local and national economies into a worldwide global economy" && qnum == 36){
      this.corAns++;
      }
      else if(val === "Tension between the global and the local" && qnum == 37){
      this.corAns++;
      }
      else if(val === "Lifelong education for all" && qnum == 38){
      this.corAns++;
      }
      else if(val === "Functionality and meaningfulness" && qnum == 39){
      this.corAns++;
      }
      else if(val === "The exploration of concepts of cultural diversity, similarities and prejudices to promote cultural understanding." && qnum == 40){
      this.corAns++;
      }
      else if(val === "Moral Education" && qnum == 41){
      this.corAns++;
      }
      else if(val === "Bilingual Education" && qnum == 42){
      this.corAns++;
      }
      else if(val === "Social reconstructionism" && qnum == 43){
      this.corAns++;
      }
      else if(val === "Progressivism" && qnum == 44){
      this.corAns++;
      }
      else if(val === "The teacher has students whose parents want their children to obtain higher grades than what they are capable of getting" && qnum == 45){
      this.corAns++;
      }
      else if(val === "They are administered differently" && qnum == 46){
      this.corAns++;
      }
      else if(val === "reliability" && qnum == 47){
      this.corAns++;
      }
      else if(val === "has a lower validity" && qnum == 48){
      this.corAns++;
      }
      else if(val === "indirect instruction" && qnum == 49){
      this.corAns++;
      }
      else if(val === ". concept mapping" && qnum == 50){
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
totalAverage = 0;

  computeAve(){
    if(this.lev==="Elem"){
      this.estat = true;
      var datas = JSON.parse(localStorage.getItem('ProfEdScore'));
      var data = JSON.parse(localStorage.getItem('GenEdScore'));

      this.totalGeScore = data.Score;
      this.totalPEScore = datas.Score;
      this.totalAverage = Math.floor((((this.totalGeScore/50)*0.4)*100) + (((this.totalPEScore/50)*0.6)*100));
    }
  }
 

  ngOnInit() {
  }

}
