import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-ngclass',
  templateUrl: './exercicio-ngclass.component.html',
  styleUrls: ['./exercicio-ngclass.component.scss']
})
export class ExercicioNgclassComponent implements OnInit {

  deveSerVerde = false;

  status =  true;
  strStatus = 'Desligar';

  str: String;

  constructor() { }

  ngOnInit(): void {
  }

  tornarVerde(){
    this.deveSerVerde = true;
  }

  ligaDesliga(){
    if(this.status){
      this.status = false;
      this.strStatus = 'Ligar';
      this.str = 'Desligado';
    }else{
      this.status = true;
      this.strStatus = 'Desligar';
      this.str = 'Ligado';
    }  
  }

}
