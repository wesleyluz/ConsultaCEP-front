import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { CEP } from '../cep';
import { PesquisarService } from '../pesquisar.service';


@Component({
  selector: 'app-pesquisaruf',
  templateUrl: './pesquisaruf.component.html',
  styleUrls: ['./pesquisaruf.component.css']
})
export class PesquisarufComponent {

  //Arrays de consulta
  Listofceps:CEP[] = [];
  Anyarray: any =[];

  //Controles de paginação
  numOfPage: number  = 0;
  itensInPage: number = 2;
  currentPage: number = 0;
  totalOfpages: number = 0;
  canNext:boolean = true;
  canPrev: boolean = false;


  constructor(
    private fb:FormBuilder,
    private pesquisaService:PesquisarService
    ){}
  formSearch = this.fb.group(
    {
      UF:["",[
        Validators.required,
        Validators.maxLength(2)
      ]],
      selectOptions:[""]
    }
  );

  //Retorna uma lista com todos os ceps da UF escolhida sem paginação (JAVA)
  PesquisaporUF()
  {
    this.formSearch.value.UF = this.formSearch.value.UF?.toLocaleUpperCase(); 
    this.pesquisaService.buscarListaCEPUf(this.formSearch.value.UF!)?.subscribe(cepsList =>{
      this.Listofceps = cepsList;
      this.validaCEPs();
    });
  }


  //Faz uma busca paginada de todos os Ceps da uf escolhida (JAVA)
  PesquisaporUfPaged()
  {
    this.formSearch.value.UF = this.formSearch.value.UF?.toLocaleUpperCase();
    this.pesquisaService.buscarPagedCEPUf(this.formSearch.value.UF!,this.numOfPage,this.itensInPage).subscribe(pageds =>
      {
        this.Anyarray = pageds;
        this.Listofceps = this.Anyarray[this.formSearch.value.UF!];
        this.currentPage = this.Anyarray["currentPage"];
        this.totalOfpages = this.Anyarray["totalPages"];
        if((this.currentPage+1) < this.totalOfpages){
          this.canNext = true;
          this.canPrev = true;
        }else{
          this.canNext = false;
        }
        if(this.currentPage == 0)
        {
          this.canPrev = false;
        }
      });
  }
  //Faz uma busca paginada de todos os Ceps da uf escolhida (C#)
  PesquisaporUfPagedCSharp()
  {
    this.formSearch.value.UF = this.formSearch.value.UF?.toLocaleUpperCase();
    this.pesquisaService.buscarPagedCEPUfCSharp(this.formSearch.value.UF!,this.numOfPage,this.itensInPage,"asc").subscribe(pageds =>
      {
        this.Anyarray = pageds;
        this.Listofceps = this.Anyarray["list"];
        this.currentPage = this.Anyarray["currentPage"];
        this.totalOfpages = this.Anyarray["totalPages"];
        if((this.currentPage+1) < this.totalOfpages){
          this.canNext = true;
          this.canPrev = true;
        }else{
          this.canNext = false;
        }
        if(this.currentPage == 0)
        {
          this.canPrev = false;
        }
      });
  }

  //Controle das paginas
  NavigatePage(prevOrNex :boolean)
  {
    switch(prevOrNex)
    {
      case true:
        this.numOfPage++;
        //JAVA
        this.PesquisaporUfPaged();

        //C#
        //this.PesquisaporUfPagedCSharp();
        break;
      case false:
        this.numOfPage --;
        //JAVA
        this.PesquisaporUfPaged();

        //C#
        //this.PesquisaporUfPagedCSharp();
    }
  }
  //Validação se o cep informado existe
  validaCEPs()
  {
    if(this.Listofceps.length<=0)
    {
      alert("Uf não consta no banco");
    }
  }
  selectChange(newValue:any)
  {
    this.itensInPage = newValue;
    //Atualiza o valor (JAVA)
    this.PesquisaporUfPaged();
    
    //Atualiza o valor (C#)
    //this.PesquisaporUfPagedCSharp();
  }

}
