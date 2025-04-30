import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-receita',
  imports: [FormsModule],
  templateUrl: './cadastro-receita.component.html',
  styleUrl: './cadastro-receita.component.css'
})
export class CadastroReceitaComponent {

  nome: string = "";
  valor: number = 0;
  receitas: Array<string> = [];

  salvarReceita(){
    this.receitas.push(this.nome);
    alert(this.nome);
  }
}
