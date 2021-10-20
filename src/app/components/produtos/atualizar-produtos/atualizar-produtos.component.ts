import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from './../../../services/produtos.service';
import { IProduto } from './../../../model/IProduto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atualizar-produtos',
  templateUrl: './atualizar-produtos.component.html',
  styleUrls: ['./atualizar-produtos.component.css']
})
export class AtualizarProdutosComponent implements OnInit {

  produto = {} as IProduto;

  constructor(private produtosService: ProdutosService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.produtosService.buscarId(id).subscribe(retorno => {
      this.produto = retorno;
    })
  }

  salvarProduto(): void {
    this.produtosService.atualizar(this.produto).subscribe(retorno => {
      this.produto = retorno;
      this.produtosService.exibirMensagem(
        'SISTEMA',
        `${this.produto.nome} foi atualizado com sucesso.`,
        'toast-success'
      );
    this.router.navigate(['/produtos']);
    });

  }
}
