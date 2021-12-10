import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gen-ed',
  templateUrl: './gen-ed.page.html',
  styleUrls: ['./gen-ed.page.scss'],
})
export class GenEdPage implements OnInit {

  constructor() { }

  getAns(event,valval:number){
    this.checkAns(event.detail.value,valval);
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
  
  saveScoreAndGo(){
    if(localStorage.getItem("GenEdScore")===null){
      var data = {Score : this.corAns};
      localStorage.setItem('GenEdScore',JSON.stringify(data));
    }
    var datas = JSON.parse(localStorage.getItem('GenEdScore'));
    datas.Score = this.corAns;
    localStorage.setItem('GenEdScore',JSON.stringify(datas));
  }

  checkAns(val:string,qnum:number){
      if(val === "With" && qnum == 1){
      this.corAns++;
      }
      else if(val === "verbose" && qnum == 2){
      this.corAns++;
      }
      else if(val === " families with illegal light and water connections" && qnum == 3){
      this.corAns++;
      }
      else if(val === "proverb" && qnum == 4){
      this.corAns++;
      }
      else if(val === "to generate awareness of one’s basic rights" && qnum == 5){
      this.corAns++;
      }
      else if(val === "primary and secondary cooperatives" && qnum == 6){
      this.corAns++;
      }
      else if(val === "in" && qnum == 7){
      this.corAns++;
      }
      else if(val === "xylem in the stem" && qnum == 8){
      this.corAns++;
      }
      else if(val === "3–√ is a real number" && qnum == 9){
      this.corAns++;
      }
      else if(val === "on the use" && qnum == 10){
      this.corAns++;
      }
      else if(val === "Irrelevant" && qnum == 11){
      this.corAns++;
      }
      else if(val === "Friendliness" && qnum == 12){
      this.corAns++;
      }
      else if(val === "Mercy is limited in extent" && qnum == 13){
      this.corAns++;
      }
      else if(val === "Graciano Lopez Jaena" && qnum == 14){
      this.corAns++;
      }
      else if(val === "the passerine birds will convert to herbivores" && qnum == 15){
      this.corAns++;
      }
      else if(val === "Interactive" && qnum == 16){
      this.corAns++;
      }
      else if(val === "First a warning before the threat" && qnum == 17){
      this.corAns++;
      }
      else if(val === "on the use" && qnum == 18){
      this.corAns++;
      }
      else if(val === "Certain" && qnum == 19){
      this.corAns++;
      }
      else if(val === "Impresyonista" && qnum == 20){
      this.corAns++;
      }
      else if(val === "simile" && qnum == 21){
      this.corAns++;
      }
      else if(val === "personification" && qnum == 22){
      this.corAns++;
      }
      else if(val === "synecdoche" && qnum == 23){
      this.corAns++;
      }
      else if(val === "Si" && qnum == 24){
      this.corAns++;
      }
      else if(val === "Dalhan" && qnum == 25){
      this.corAns++;
      }
      else if(val === "Maliban" && qnum == 26){
      this.corAns++;
      }
      else if(val === "To determine the physical and mental state of the army man" && qnum == 27){
      this.corAns++;
      }
      else if(val === "Full of distorted facts" && qnum == 28){
      this.corAns++;
      }
      else if(val === "Shabu" && qnum == 29){
      this.corAns++;
      }
      else if(val === "Right of the children to work and exploitation" && qnum == 30){
      this.corAns++;
      }
      else if(val === "The confession was without due consultan" && qnum == 31){
      this.corAns++;
      }
      else if(val === "Science will help make the world a better place to live in." && qnum == 32){
      this.corAns++;
      }
      else if(val === "designing for a need " && qnum == 33){
      this.corAns++;
      }
      else if(val === "uncovering natural phenomena" && qnum == 34){
      this.corAns++;
      }
      else if(val === "Fluorescent lamps are improved through methods of manufacturing." && qnum == 35){
      this.corAns++;
      }
      else if(val === "triple beam balance" && qnum == 36){
      this.corAns++;
      }
      else if(val === "Observes" && qnum == 37){
      this.corAns++;
      }
      else if(val === "repair" && qnum == 38){
      this.corAns++;
      }
      else if(val === "happy" && qnum == 39){
      this.corAns++;
      }
      else if(val === "peaceful" && qnum == 40){
      this.corAns++;
      }
      else if(val === "dispute" && qnum == 41){
      this.corAns++;
      }
      else if(val === "expert" && qnum == 42){
      this.corAns++;
      }
      else if(val === "attach" && qnum == 43){
      this.corAns++;
      }
      else if(val === "include" && qnum == 44){
      this.corAns++;
      }
      else if(val === "ridiculous" && qnum == 45){
      this.corAns++;
      }
      else if(val === "restlessly" && qnum == 46){
      this.corAns++;
      }
      else if(val === "Right of disable to equal treatment" && qnum == 47){
      this.corAns++;
      }
      else if(val === "In the event" && qnum == 48){
      this.corAns++;
      }
      else if(val === "Verbs" && qnum == 49){
      this.corAns++;
      }
      else if(val === "Pronouns" && qnum == 50){
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
      }
      
      console.log(this.corAns);
      
      
  }
  ngOnInit() {
  }

}
