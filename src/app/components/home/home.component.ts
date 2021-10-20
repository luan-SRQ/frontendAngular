import { IProduto } from './../../model/IProduto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //produto: IProduto[]= []

  nomeProduto: string = `Curso de Angular`;
  anuncio: string = `O ${this.nomeProduto} está em promoção`;
  idProduto: number = 3;
  precoProduto: number = 2.59;
  promocao: boolean = false;
  foto: string = 'https://neilpatel.com/wp-content/uploads/2019/08/fotos-de-aventura-parao-instagram.jpeg';
  dataValidade: string = "2021-10-13";

  constructor() {
    // variaveis de string com concatenação

    // this.anuncio = 'O '+ this.nomeProduto + 'está em promoção!';
    console.log('Nome do Produto: ', this.nomeProduto);
    console.log('Anuncio: ', this.anuncio);
    console.log('id Produto: ', this.idProduto);
    console.log('Preço do Produto: ', this.precoProduto);
    console.log('Promoção: ', this.promocao);
    console.log('Validade: ', this.dataValidade);
  }




  ngOnInit(): void {
  }

}
