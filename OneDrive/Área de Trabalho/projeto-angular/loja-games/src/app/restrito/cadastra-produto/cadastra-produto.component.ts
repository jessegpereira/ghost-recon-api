import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../models/Produto.model';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-cadastra-produto',
  templateUrl: './cadastra-produto.component.html',
  styleUrls: ['./cadastra-produto.component.css']
})
export class CadastraProdutoComponent {

  public produto: Produto = new Produto(0,"","","",0);

  constructor(private _produtoService: ProdutoService, private router: Router) { }

  cadastrar(): void{
    this._produtoService.cadastrarProduto(this.produto).subscribe(
      produto => {
        this.produto = new Produto (0,"","","",0);
        alert("Cadastro Efetuado com sucesso");
      },
      err => {
        alert("Erro ao Cadastrar");
      }
    );

    this.router.navigate(["/restrito/lista"]);
  }
}
