import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gen-ed',
  templateUrl: './gen-ed.page.html',
  styleUrls: ['./gen-ed.page.scss'],
})
export class GenEdPage implements OnInit {
  corAns:number;

  constructor() { }

  getAns(event,valval:number){
    console.log(event.detail.value);
    console.log(valval);

    this.checkAns(event.detail.value,valval);

  }

  checkAns(val:string,qnum:number){
    if(val == "curiosity" && qnum == 1){
      this.corAns=+1;
      alert(this.corAns);
      }
      
      
      else if(val == "For" && qnum == 2){
      this.corAns=+1;
      }
      
      
      else if(val == "reserved" && qnum == 3){
      this.corAns=+1;
      }
      
      
      else if(val == " families with boarders in addition to the family members" && qnum == 4){
      this.corAns=+1;
      }
      
      
      else if(val == "report" && qnum == 5){
      this.corAns=+1;
      }
      
      
      else if(val == "to identelse ify threats of human rights" && qnum == 6){
      this.corAns+=1;
      }
      
      
      else if(val == "primaries" && qnum == 7){
      this.corAns+=1;
      }
      
      
      else if(val == "over" && qnum == 8){
      this.corAns+=1;
      }
      
      
      else if(val == "meristems in the root tip" && qnum == 9){
      this.corAns+=1;
      }
      
      
      else if(val == " 5–√ is a rational number" && qnum == 10){
      this.corAns+=1;
      }
      
      
      else if(val == "With the use" && qnum == 11){
      this.corAns+=1;
      }
      
      
      else if(val == "Important" && qnum == 12){
      this.corAns+=1;
      }
      
      
      else if(val == "Friendliness" && qnum == 13){
      this.corAns+=1;
      }
      
      
      else if(val == "Mercy is only for deserving" && qnum == 14){
      this.corAns+=1;
      }
      
      
      else if(val == "Juan Luna" && qnum == 15){
      this.corAns+=1;
      }
      
      
      else if(val == "The passerine birds will thrive" && qnum == 16){
      this.corAns+=1;
      }
      
      
      else if(val == "Bottoms-up" && qnum == 17){
      this.corAns+=1;
      }
      
      
      else if(val == "Make the threat and reinforce with warning" && qnum == 18){
      this.corAns+=1;
      }
      
      
      else if(val == "Doubtful" && qnum == 19){
      this.corAns+=1;
      }
      
      
      else if(val == "Impresyonista" && qnum == 20){
      this.corAns+=1;
      }
      
      
      else if(val == "simile" && qnum == 21){
      this.corAns+=1;
      }
      
      
      else if(val == "simile" && qnum == 22){
      this.corAns+=1;
      }
      
      
      else if(val == "ellipsis" && qnum == 23){
      this.corAns+=1;
      }
      
      
      else if(val == "Si" && qnum == 24){
      this.corAns+=1;
      }
      
      
      else if(val == "Dalhin" && qnum == 25){
      this.corAns+=1;
      }
      
      
      else if(val == "Maliban" && qnum == 26){
      this.corAns+=1;
      }
      
      
      else if(val == "To protect the prisoner from further harassment" && qnum == 27){
      this.corAns+=1;
      }
      
      
      else if(val == "A tainted with malice" && qnum == 28){
      this.corAns+=1;
      }
      
      
      else if(val == "Opium" && qnum == 29){
      this.corAns+=1;
      }
      
      
      else if(val == "Right of family to family living wage" && qnum == 30){
      this.corAns+=1;
      }
      
      
      else if(val == "The confession was without due consultan" && qnum == 31){
      this.corAns+=1;
      }
      
      
      else if(val == "Science will help make the world a better place to live in." && qnum == 32){
      this.corAns+=1;
      }
      
      
      else if(val == "designing for a need " && qnum == 33){
      this.corAns+=1;
      }
      
      
      else if(val == "designing for a need " && qnum == 34){
      this.corAns+=1;
      }
      
      
      else if(val == "Tungsten has a high melting point" && qnum == 35){
      this.corAns+=1;
      }
      
      
      else if(val == "beaker" && qnum == 36){
      this.corAns+=1;
      }
      
      
      else if(val == "Demands" && qnum == 37){
      this.corAns+=1;
      }
      
      
      else if(val == "repair" && qnum == 38){
      this.corAns+=1;
      }
      
      
      else if(val == "Frustrating" && qnum == 39){
      this.corAns+=1;
      }
      
      
      else if(val == "embarrassing" && qnum == 40){
      this.corAns+=1;
      }
      
      
      else if(val == "dispute" && qnum == 41){
      this.corAns+=1;
      }
      
      
      else if(val == "effective" && qnum == 42){
      this.corAns+=1;
      }
      
      
      else if(val == "specelse ify" && qnum == 43){
      this.corAns+=1;
      }
      
      
      else if(val == "remove" && qnum == 44){
      this.corAns+=1;
      }
      
      
      else if(val == "magnelse ificent" && qnum == 45){
      this.corAns+=1;
      }
      
      
      else if(val == "appealing" && qnum == 46){
      this.corAns+=1;
      }
      
      
      else if(val == "Right to just treatment" && qnum == 47){
      this.corAns+=1;
      }
      
      
      else if(val == "In the event" && qnum == 48){
      this.corAns+=1;
      }
      
      
      else if(val == "Adjectives" && qnum == 49){
      this.corAns+=1;
      }
      
      
      else if(val == "Adjectives" && qnum == 50){
      this.corAns+=1;
      }   
  }
  ngOnInit() {
  }

}
