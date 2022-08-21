import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

  @Input() palavra: string;
  @Input() color: string;

  imageURL = 'https://www.infomoney.com.br/wp-content/uploads/2022/05/carros-de-luxo-e1653484670585.jpg?quality=70'
  initialValue = 'Informe aqui o valor inicial'
  isDisabled = true
  accessibilitiTest = 'Um outro texto qualquer a ser lido pelo leitor de tela';
  
  constructor() {
    setTimeout(() => {
      this.isDisabled = false
      console.log('isDisabled',this.isDisabled)
    }, 5000);
   }

  ngOnInit(): void {
  }

  getImageURL(){
    return this.imageURL;
  }

 

}
