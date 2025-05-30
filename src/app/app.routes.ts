import { Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { ManutencaoComponent } from './shared/manutencao/manutencao.component';
import { RegistrarComponent } from './shared/registrar/registrar.component';
<<<<<<< HEAD
import { PagamentoComponent } from './shared/pagamento/pagamento.component';
import { ProductComponent } from './components/product/product.component';
import { FavoritosComponent } from './shared/favoritos/favoritos.component';
import { ProdutostenisComponent } from './shared/produtostenis/produtostenis.component';
import { CarrinhoComponent } from './shared/carrinho/carrinho.component';
=======
import { HeaderComponent } from './shared/header/header.component';
>>>>>>> 9d000a8830e2be11da7b26c03f1bf1496e449fb7

export const routes: Routes = [
  { path: 'entrar', component: LoginComponent },
  { path: 'manutencao', component: ManutencaoComponent },
  { path: 'registrar', component: RegistrarComponent },
<<<<<<< HEAD
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'pagamento', component: PagamentoComponent },
  { path: 'produtostenis/:genero', component: ProdutostenisComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'produto', component: ProductComponent },
  
=======
  { path: 'carrinho', component: HeaderComponent},
>>>>>>> 9d000a8830e2be11da7b26c03f1bf1496e449fb7
];

