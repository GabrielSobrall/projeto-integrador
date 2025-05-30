import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../../services/carrinho.service';
import { Produto } from '../../services/types/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  carrinho: Produto[] = [];
  total$: Observable<number>;
  showPopup = false;

  constructor(private carrinhoService: CarrinhoService) {
    this.total$ = this.carrinhoService.getTotal();
  }

  ngOnInit(): void {
    this.carrinhoService.getItens().subscribe((itens: Produto[]) => {
      this.carrinho = itens;
    });
  }

  alterarQuantidade(id: number, delta: number): void {
    this.carrinhoService.alterarQuantidade(id, delta).subscribe();
  }

  removerItem(id: number): void {
    this.carrinhoService.remover(id).subscribe();
  }

  finalizarCompra(): void {
    this.carrinhoService.limparCarrinho().subscribe(() => {
      this.carrinho = [];
      this.mostrarPopup();
    });
  }

  mostrarPopup(): void {
    this.showPopup = true;
    setTimeout(() => {
      this.showPopup = false;
    }, 3000);
  }

  trackById(index: number, item: Produto): number {
    return item.id!;
=======
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
>>>>>>> 9d000a8830e2be11da7b26c03f1bf1496e449fb7
  }
}
