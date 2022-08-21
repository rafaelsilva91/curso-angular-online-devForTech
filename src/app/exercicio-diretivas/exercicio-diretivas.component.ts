import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent implements OnInit {

  deveExibir = false;

  listaFrutas=[
    'maçã', 
    'pera', 
    'laranja',
    'mamão'
  ]

  carrosLista = [
    {
      placa: 'JND-9696',
      cor: 'Preto'
    },
    {
      placa: 'JNO-9667',
      cor: 'Amarelo'
    },
    {
      placa: 'RTT-0690',
      cor: 'BRANCO'
    },
    {
      placa: 'QWE-6548',
      cor: 'Preto'
    },
    {
      placa: 'HUI-7888',
      cor: 'Vermelho'
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

  trocarValor(){
    this.deveExibir = !this.deveExibir ;
  }

  soma(n1, n2){
    return n1+n2;
  }
  

}
