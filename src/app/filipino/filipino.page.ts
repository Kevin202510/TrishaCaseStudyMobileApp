import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filipino',
  templateUrl: './filipino.page.html',
  styleUrls: ['./filipino.page.scss'],
})
export class FilipinoPage implements OnInit {
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
    if(localStorage.getItem("FilScore")===null){
      var data = {Score : this.corAns};
      localStorage.setItem('FilScore',JSON.stringify(data));
    }
    var datas = JSON.parse(localStorage.getItem('FilScore'));
    datas.Score = this.corAns;
    localStorage.setItem('FilScore',JSON.stringify(datas));
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
  
      if(val === "kabilaan" && qnum == 1){
      this.corAns++;
      }
      else if(val === "gitling" && qnum == 2){
      this.corAns++;
      }
      else if(val === "arbitraryo" && qnum == 3){
      this.corAns++;
      }
      else if(val === "Barlaan at Josaphat" && qnum == 4){
      this.corAns++;
      }
      else if(val === "Pooh-pooh" && qnum == 5){
      this.corAns++;
      }
      else if(val === "payak" && qnum == 6){
      this.corAns++;
      }
      else if(val === "Morpolohiya" && qnum == 7){
      this.corAns++;
      }
      else if(val === "Eksistensyal" && qnum == 8){
      this.corAns++;
      }
      else if(val === "diptonggo" && qnum == 9){
      this.corAns++;
      }
      else if(val === "Hapones" && qnum == 10){
      this.corAns++;
      }
      else if(val === "batas na dapat sundin ng mga mamamayan" && qnum == 11){
      this.corAns++;
      }
      else if(val === "panubog" && qnum == 12){
      this.corAns++;
      }
      else if(val === "salawikain" && qnum == 13){
      this.corAns++;
      }
      else if(val === "katiwalian ng mga Kastila" && qnum == 14){
      this.corAns++;
      }
      else if(val === "nabigyan ng pagpapahalaga ang sariling wika" && qnum == 15){
      this.corAns++;
      }
      else if(val === "magandang relasyon ng makakapatid" && qnum == 16){
      this.corAns++;
      }
      else if(val === "Patuloy ang paglipas ng panahon" && qnum == 17){
      this.corAns++;
      }
      else if(val === "pag-asa sa kalayaan at paggunita sa mga taong nagbuwis ng buhay para sa kalayaan" && qnum == 18){
      this.corAns++;
      }
      else if(val === "pabula" && qnum == 19){
      this.corAns++;
      }
      else if(val === "Ang kagandahan ay maaaring makalinlang ng tao" && qnum == 20){
      this.corAns++;
      }
      else if(val === "KPPKKPK" && qnum == 21){
      this.corAns++;
      }
      else if(val === "batas na dapat sundin ng mga mamamayan" && qnum == 22){
      this.corAns++;
      }
      else if(val === "panubog" && qnum == 23){
      this.corAns++;
      }
      else if(val === "salawikain" && qnum == 24){
      this.corAns++;
      }
      else if(val === "katiwalian ng mga Kastila" && qnum == 25){
      this.corAns++;
      }
      else if(val === " nabigyan ng pagpapahalaga ang sariling wika" && qnum == 26){
      this.corAns++;
      }
      else if(val === "pakikipagkapwa, paggalang sa magulang at pagkilala sa Diyos" && qnum == 27){
      this.corAns++;
      }
      else if(val === "Duwag" && qnum == 28){
      this.corAns++;
      }
      else if(val === "Lumayas" && qnum == 29){
      this.corAns++;
      }
      else if(val === "Pakiusap" && qnum == 30){
      this.corAns++;
      }
      else if(val === "Kunan" && qnum == 31){
      this.corAns++;
      }
      else if(val === "Katahimikan" && qnum == 32){
      this.corAns++;
      }
      else if(val === "Nahahango ang mensahe ng texto atnailalapat ito sa aktwal na buhay" && qnum == 33){
      this.corAns++;
      }
      else if(val === "Bumuo, balagkasin, pag-ugnayin" && qnum == 34){
      this.corAns++;
      }
      else if(val === "Nasusuri ang kwento ayon sa mgaelement, dulog at alituntunin" && qnum == 35){
      this.corAns++;
      }
      else if(val === "Expressive area" && qnum == 36){
      this.corAns++;
      }
      else if(val === "1, 2, 3 at 4" && qnum == 37){
      this.corAns++;
      }
      else if(val === "Delfin" && qnum == 38){
      this.corAns++;
      }
      else if(val === "Imo" && qnum == 39){
      this.corAns++;
      }
      else if(val === "kahirapan" && qnum == 40){
      this.corAns++;
      }
      else if(val === "Hindi, bagama’t pina ang binata hinggil ditto." && qnum == 41){
      this.corAns++;
      }
      else if(val === "Ang langit ay nasa puso ng isang tao, ang kabutihang loob, kapayapaan ng isisp atkalinisan ng budhi ang kaganapan nito" && qnum == 42){
      this.corAns++;
      }
      else if(val === "Libing" && qnum == 43){
      this.corAns++;
      }
      else if(val === "Trahedya" && qnum == 44){
      this.corAns++;
      }
      else if(val === "Paglilibot ng kaluluwa ng mga namamtay sa akdisdente hanggang sa araw ng talaga nilang kamatayan" && qnum == 45){
      this.corAns++;
      }
      else if(val === "Sosyolohikal" && qnum == 46){
      this.corAns++;
      }
      else if(val === "Ito ay tungkol sa yugto ng kamatayang" && qnum == 47){
      this.corAns++;
      }
      else if(val === "Nakakalap ang mahahalagang impormasyonsa pamamagitan ng pagtatala" && qnum == 48){
      this.corAns++;
      }
      else if(val === "mapanuring pakikinig" && qnum == 49){
      this.corAns++;
      }
      else if(val === "bottom-up" && qnum == 50){
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
totalFilScore = 0;
totalAverage = 0;

  computeAve(){
    if(this.lev==="Sec"){
      this.estat = true;
      var datas = JSON.parse(localStorage.getItem('ProfEdScore'));
      var data = JSON.parse(localStorage.getItem('GenEdScore'));
      var datass = JSON.parse(localStorage.getItem('FilScore'));

      this.totalGeScore = data.Score;
      this.totalPEScore = datas.Score;
      this.totalFilScore = datass.Score;
      this.totalAverage = Math.floor((((this.totalGeScore/50)*0.2)*100) + (((this.totalPEScore/50)*0.4)*100) + (((this.totalFilScore/50)*0.4)*100));
    }
  }


  ngOnInit() {
  }

}
