import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { PesquisarService } from '../pesquisar.service';
import { CEP } from '../cep';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-pesquisacep',
  templateUrl: './pesquisacep.component.html',
  styleUrls: ['./pesquisacep.component.css']
})
export class PesquisacepComponent implements OnInit{
  
  ceps:CEP = new CEP();
  
  IframeUrl!: SafeResourceUrl;
  displayIframe = false;
  
  ngOnInit(): void {
  }
  formSearch = this.fb.group(
    {
      CEP: ["",[
        Validators.minLength(8),
        Validators.required
      ]],
      logradouro:[""],
      complemento:[""],
      bairro:[""],
      UF:["",[
        Validators.maxLength(2)
      ]],
      unidade:[""]
    }
  );
  constructor(
    private fb:FormBuilder,
    public pesquisaService:PesquisarService,
    private sanitizer:DomSanitizer
  ){}
    
  async pesquisarCEP()
  {
    this.pesquisaService.buscarCEP(this.formSearch.value.CEP!).subscribe(cep =>{
    this.ceps = cep; 
    this.validateInfos();
    
   });
   
  
  }

  validateInfos()
  {
    if(this.ceps.uf != (undefined || null)){
      this.IframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.google.com.br/maps?q=${this.ceps.cep},%20Brasil&output=embed`);
      this.displayIframe = true;
      return;
    }
    else
    {
      this.displayIframe = false;
      alert("Cep inválido");
    }
  }
  
}
