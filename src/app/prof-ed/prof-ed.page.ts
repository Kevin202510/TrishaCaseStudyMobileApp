import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prof-ed',
  templateUrl: './prof-ed.page.html',
  styleUrls: ['./prof-ed.page.scss'],
})
export class ProfEdPage implements OnInit {

  constructor() { }
  
  getAns(event,valval:number){
    this.checkAns(event.detail.value,valval);
    // console.log(event.detail.value);
  }

  corAns:number = 0;

  checkAns(val:string,qnum:number){
  
    if(val === "Archeology" && qnum == 1){
      this.corAns++;
      }
      
      
      else if(val === "operant conditioning theory" && qnum == 2){
      this.corAns++;
      }
      
      
      else if(val === "You will not object when your students daydream in class." && qnum == 3){
      this.corAns++;
      }
      
      
      else if(val === "independent thinking" && qnum == 4){
      this.corAns++;
      }
      
      
      else if(val === "I, II, and III" && qnum == 5){
      this.corAns++;
      }
      
      
      else if(val === "project " && qnum == 6){
      this.corAns++;
      }
      
      
      else if(val === "II and III" && qnum == 7){
      this.corAns++;
      }
      
      
      else if(val === "Administer a diagnostic test." && qnum == 8){
      this.corAns++;
      }
      
      
      else if(val === "norm-referenced test" && qnum == 9){
      this.corAns++;
      }
      
      
      else if(val === "Valid" && qnum == 10){
      this.corAns++;
      }
      
      
      else if(val === "active participation" && qnum == 11){
      this.corAns++;
      }
      
      
      else if(val === "sketching/illustrating events" && qnum == 12){
      this.corAns++;
      }
      
      
      else if(val === "voluntary accreditation" && qnum == 13){
      this.corAns++;
      }
      
      
      else if(val === "face" && qnum == 14){
      this.corAns++;
      }
      
      
      else if(val === "Learning is defined as a change in the learner's observable performance" && qnum == 15){
      this.corAns++;
      }
      
      
      else if(val === "Table of Specifications" && qnum == 16){
      this.corAns++;
      }
      
      
      else if(val === "pormaover substance" && qnum == 17){
      this.corAns++;
      }
      
      
      else if(val === "Use the objectives for the units as guide in your test construction." && qnum == 18){
      this.corAns++;
      }
      
      
      else if(val === "I and II" && qnum == 19){
      this.corAns++;
      }
      
      
      else if(val === "Existentialism" && qnum == 20){
      this.corAns++;
      }
      
      
      else if(val === "Constructivism" && qnum == 21){
      this.corAns++;
      }
      
      
      else if(val === "Progressivism" && qnum == 22){
      this.corAns++;
      }
      
      
      else if(val === "Existentialism" && qnum == 23){
      this.corAns++;
      }
      
      
      else if(val === "Progressivism" && qnum == 24){
      this.corAns++;
      }
      
      
      else if(val === "A process of individual growth and social development" && qnum == 25){
      this.corAns++;
      }
      
      
      else if(val === "Widely read" && qnum == 26){
      this.corAns++;
      }
      
      
      else if(val === "Acquaint her with principles of moral behavior, conduct and relationship in the practice of profession" && qnum == 27){
      this.corAns++;
      }
      
      
      else if(val === "Leading children to acquire about his environment" && qnum == 28){
      this.corAns++;
      }
      
      
      else if(val === "Revealing confidential information to authorities concerned" && qnum == 29){
      this.corAns++;
      }
      
      
      else if(val === "local situations and community" && qnum == 30){
      this.corAns++;
      }
      
      
      else if(val === "Criterion of interest" && qnum == 31){
      this.corAns++;
      }
      
      
      else if(val === "rearranging or adding lesson content to provide task-relevant prior knowledge" && qnum == 32){
      this.corAns++;
      }
      
      
      else if(val === "knowledge of concepts" && qnum == 33){
      this.corAns++;
      }
      
      
      else if(val === ". Lesson planning is a systematic process" && qnum == 34){
      this.corAns++;
      }
      
      
      else if(val === "The incorporation of local and national economies into a worldwide global economy" && qnum == 35){
      this.corAns++;
      }
      
      
      else if(val === ". Tension between the global and the local" && qnum == 36){
      this.corAns++;
      }
      
      
      else if(val === "Lifelong education for all" && qnum == 37){
      this.corAns++;
      }
      
      
      else if(val === "Functionality and meaningfulness" && qnum == 38){
      this.corAns++;
      }
      
      
      else if(val === "The exploration of concepts of cultural diversity, similarities and prejudices to promote cultural understanding." && qnum == 39){
      this.corAns++;
      }
      
      
      else if(val === ". Moral Education" && qnum == 40){
      this.corAns++;
      }
      
      
      else if(val === ". Bilingual Education" && qnum == 41){
      this.corAns++;
      }
      
      
      else if(val === "Social reconstructionism" && qnum == 42){
      this.corAns++;
      }
      
      
      else if(val === "Progressivism" && qnum == 43){
      this.corAns++;
      }
      
      
      else if(val === "The teacher has students whose parents want their children to obtain higher grades than what they are capable of getting" && qnum == 44){
      this.corAns++;
      }
      
      
      else if(val === "They are administered differently" && qnum == 45){
      this.corAns++;
      }
      
      
      else if(val === "reliability" && qnum == 46){
      this.corAns++;
      }
      
      
      else if(val === "has a lower validity" && qnum == 47){
      this.corAns++;
      }
      
      
      else if(val === "indirect instruction" && qnum == 48){
      this.corAns++;
      }
      
      
      else if(val === ". concept mapping" && qnum == 49){
      this.corAns++;
      }

      // console.log(this.corAns);
      

      
  }
 

  ngOnInit() {
  }

}
