import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  saveLevel(){
    if(localStorage.getItem("Level")===null){
      var data = {Level:"Elem"};
      localStorage.setItem('Level',JSON.stringify(data));
    }
    var datas = JSON.parse(localStorage.getItem('Level'));
    datas.Level = "Elem";
    localStorage.setItem('Level',JSON.stringify(datas));
  }

  saveLevels(){
    if(localStorage.getItem("Level")===null){
      var data = {Level:"Sec"};
      localStorage.setItem('Level',JSON.stringify(data));
    }
    var datas = JSON.parse(localStorage.getItem('Level'));
    datas.Level = "Sec";
    localStorage.setItem('Level',JSON.stringify(datas));
  }

}
