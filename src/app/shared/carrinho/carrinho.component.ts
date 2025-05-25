import { Component, OnInit } from '@angular/core';
import { CarrinhoService, Produto } from '../../services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {
  carrinho: Produto[] = [];
  total: number = 0;

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.carregarCarrinho();
  }

  carregarCarrinho(): void {
    this.carrinhoService.getItens().subscribe(itens => this.carrinho = itens);
    this.carrinhoService.getTotal().subscribe(valor => this.total = valor);
  }

  alterarQuantidade(id: number, delta: number): void {
    this.carrinhoService.alterarQuantidade(id, delta).subscribe(() => {
      this.carregarCarrinho();
    });
  }

  removerItem(id: number): void {
    this.carrinhoService.remover(id).subscribe(() => {
      this.carregarCarrinho();
    });
  }

  finalizarCompra(): void {
    alert('Compra finalizada!');
    this.carrinhoService.limparCarrinho().subscribe(() => {
      this.carregarCarrinho();
    });
  }
}
