import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CEP } from './cep';

@Injectable({
  providedIn: 'root'
})
export class PesquisarService {
  
  Ceps:CEP = new CEP();
  url = "";
  constructor(
    private http:HttpClient
  ) { 

  }
   //Busca paginada do CEP pela uf (C#)
  buscarPagedCEPUfCSharp(uf:string,page:number, pageSize:number, order?:string)
  {
    this.url = "https://localhost:44314/api/CEP/";
    let queryparams = new HttpParams();
    queryparams = queryparams.append("uf",uf);
    queryparams = queryparams.append("sortDirection",order!)
    queryparams = queryparams.append("pageSize",pageSize);
    queryparams = queryparams.append("page",page);

    return this.http.get<any>(this.url,{params:queryparams});

  }
  //Busca paginada do CEP pela uf (JAVA)
  buscarPagedCEPUf(uf:string, pageNum:number,size:number)
  {
    this.url = "http://localhost:8080/ufPaged/";
    let queryparams = new HttpParams();
    queryparams = queryparams.append("uf",uf);
    queryparams = queryparams.append("pageNum",pageNum);
    queryparams = queryparams.append("size",size);

    return this.http.get<any>(this.url,{params:queryparams});

  }
  // Lista todas os ceps da UF (JAVA)
  buscarListaCEPUf(uf:string)
  {
    if(uf.length ==2)
    {
      this.url = `http://localhost:8080//uf/`;
      let queryparams = new HttpParams();
      queryparams = queryparams.append("uf",uf);
      return this.http.get<CEP[]>(this.url,{params:queryparams});
    }
    return null;
  }

  
  buscarCEP(ceps:string)
  {
   
    //Consultas no Java Back-end
    //this.url = `http://localhost:8080/cep/${ceps}`;
    
    //Consultas no C# Back-end
    //this.url = `https://localhost:44314/api/CEP/${ceps}`;
    
    //Consultas para GithubPages
    this.url = `https://viacep.com.br/ws/${ceps}/json/`;
    return this.http.get<CEP>(this.url);
  }
}
