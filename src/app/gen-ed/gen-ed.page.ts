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
  answerSelected = false;
  
  checkAns(val:string,qnum:number){
    if(val === "For" && qnum == 1){
      this.answerSelected = true;
      this.corAns++;
      }
      
      
      else if(val === "reserved" && qnum == 2){
      this.corAns++;
      }
      
      
      else if(val === " families with boarders in addition to the family members" && qnum == 3){
      this.corAns++;
      }
      
      
      else if(val === "report" && qnum == 4){
      this.corAns++;
      }
      
      
      else if(val === "to identify threats of human rights" && qnum == 5){
      this.corAns++;
      }
      
      
      else if(val === "primaries" && qnum == 6){
      this.corAns++;
      }
      
      
      else if(val === "over" && qnum == 7){
      this.corAns++;
      }
      
      
      else if(val === "meristems in the root tip" && qnum == 8){
      this.corAns++;
      }
      
      
      else if(val === " 5–√ is a rational number" && qnum == 9){
      this.corAns++;
      }
      
      
      else if(val === "With the use" && qnum == 10){
      this.corAns++;
      }
      
      
      else if(val === "Important" && qnum == 11){
      this.corAns++;
      }
      
      
      else if(val === "Friendliness" && qnum == 12){
      this.corAns++;
      }
      
      
      else if(val === "Mercy is only for deserving" && qnum == 13){
      this.corAns++;
      }
      
      
      else if(val === "Juan Luna" && qnum == 14){
      this.corAns++;
      }
      
      
      else if(val === "The passerine birds will thrive" && qnum == 15){
      this.corAns++;
      }
      
      
      else if(val === "Bottoms-up" && qnum == 16){
      this.corAns++;
      }
      
      
      else if(val === "Make the threat and reinforce with warning" && qnum == 17){
      this.corAns++;
      }
      
      
      else if(val === "Doubtful" && qnum == 18){
      this.corAns++;
      }
      
      
      else if(val === "Impresyonista" && qnum == 19){
      this.corAns++;
      }
      
      
      else if(val === "simile" && qnum == 20){
      this.corAns++;
      }
      
      
      else if(val === "simile" && qnum == 21){
      this.corAns++;
      }
      
      
      else if(val === "ellipsis" && qnum == 22){
      this.corAns++;
      }
      
      
      else if(val === "Si" && qnum == 23){
      this.corAns++;
      }
      
      
      else if(val === "Dalhin" && qnum == 24){
      this.corAns++;
      }
      
      
      else if(val === "Maliban" && qnum == 25){
      this.corAns++;
      }
      
      
      else if(val === "To protect the prisoner from further harassment" && qnum == 26){
      this.corAns++;
      }
      
      
      else if(val === "A tainted with malice" && qnum == 27){
      this.corAns++;
      }
      
      
      else if(val === "Opium" && qnum == 28){
      this.corAns++;
      }
      
      
      else if(val === "Right of family to family living wage" && qnum == 29){
      this.corAns++;
      }
      
      
      else if(val === "The confession was without due consultan" && qnum == 30){
      this.corAns++;
      }
      
      
      else if(val === "Science will help make the world a better place to live in." && qnum == 31){
      this.corAns++;
      }
      
      
      else if(val === "designing for a need " && qnum == 32){
      this.corAns++;
      }
      
      
      else if(val === "designing for a need " && qnum == 33){
      this.corAns++;
      }
      
      
      else if(val === "Tungsten has a high melting point" && qnum == 34){
      this.corAns++;
      }
      
      
      else if(val === "beaker" && qnum == 35){
      this.corAns++;
      }
      
      
      else if(val === "Demands" && qnum == 36){
      this.corAns++;
      }
      
      
      else if(val === "repair" && qnum == 37){
      this.corAns++;
      }
      
      
      else if(val === "Frustrating" && qnum == 38){
      this.corAns++;
      }
      
      
      else if(val === "embarrassing" && qnum == 39){
      this.corAns++;
      }
      
      
      else if(val === "dispute" && qnum == 40){
      this.corAns++;
      }
      
      
      else if(val === "effective" && qnum == 41){
      this.corAns++;
      }
      
      
      else if(val === "specify" && qnum == 42){
      this.corAns++;
      }
      
      
      else if(val === "remove" && qnum == 43){
      this.corAns++;
      }
      
      
      else if(val === "magnificent" && qnum == 44){
      this.corAns++;
      }
      
      
      else if(val === "curiosity" && qnum == 45){
      this.corAns++;
      }
      
      
      else if(val === "appealing" && qnum == 46){
      this.corAns++;
      }
      
      
      else if(val === "Right to just treatment" && qnum == 47){
      this.corAns++;
      }
      
      
      else if(val === "In the event" && qnum == 48){
      this.corAns++;
      }
      
      
      else if(val === "Adjectives" && qnum == 49){
      this.corAns++;
      }
      

      else if(val === "With the use" && qnum == 10){
        this.corAns++;
      }
      
      console.log(this.corAns);
      
      
  }
  ngOnInit() {
  }

}
