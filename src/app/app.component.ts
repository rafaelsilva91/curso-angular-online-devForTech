import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  palavras = 'CARRO';
  favoriteColor = 'Verde';
  titleHeader = 'Titulo dinamico';

  constructor (){}

  eventoRecebido($event){
    console.log('AppComponent: Evento Recebido...',$event);
  }



}
