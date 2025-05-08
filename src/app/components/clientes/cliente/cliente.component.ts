import { Component } from '@angular/core';
import { ClienteCadastroComponent } from '../cliente-cadastro/cliente-cadastro.component';
import { Cliente } from '../../../models/cliente';


@Component({
  selector: 'app-cliente',
  imports: [],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  clientes: Array<Cliente> = [];
  idAtual: number = 0;

  cliente: Cliente;

  constructor(){
    this.cliente = new Cliente();
  }

  ngOnInit(){
    this.carregarClientesDoLocalStorage();
  }

  registrarClienteSalvo(){
    if (this.cliente.id === 0)
      this.cadastrar();
    else
      this.editar();


    this.salvarEmLocalStorage();
  }

  private editar(){
    let indiceCliente = this.clientes.findIndex(x => x.id == this.cliente.id);
    this.clientes[indiceCliente].nome = this.cliente.nome;

  }

  private cadastrar() {
    this.idAtual++;

    this.cliente.id = this.idAtual;

    this.clientes.push(this.cliente);
  }

  salvarEmLocalStorage(){

    const clientesString = JSON.stringify(this.clientes);

    localStorage.setItem("clientes", clientesString);
  }

  carregarClientesDoLocalStorage(){
    const clientesString = localStorage.getItem("clientes");
    if (clientesString === null)
      return;
    this.clientes = JSON.parse(clientesString);

    Array.from(this.clientes).forEach(cliente => {
      if (cliente.id > this.idAtual){
        this.idAtual = cliente.id
      }
    });
  }

  apagar(cliente: Cliente){
    let confirmacao = confirm(`Deseja realmente apagar o cliente'${cliente.nome}'?`);
    if (confirmacao !== true)
      return;

    let indiceCliente = this.clientes.findIndex(x => x.id == cliente.id);
    this.clientes.slice(indiceCliente, 1);

    this.salvarEmLocalStorage();
  }

  preencherCamposParaEditar(cliente: Cliente){
    this.cliente = cliente;
  }
}
