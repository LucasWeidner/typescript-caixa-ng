import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../../models/cliente';

@Component({
  selector: 'app-cliente-cadastro',
  imports: [FormsModule],
  templateUrl: './cliente-cadastro.component.html',
  styleUrl: './cliente-cadastro.component.css'
})
export class ClienteCadastroComponent {
  
  @Output() salvarEvento = new EventEmitter<string>();

  @Input() cliente?: Cliente;

  nome: string ="";

  salvar() {
    this.salvarEvento.emit(this.nome);
  }

}
