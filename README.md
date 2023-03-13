# ConsultaFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Índice 

[Índice](#índice)

[Descrição do Projeto](#descrição-do-projeto)

[Funcionalidades](#funcionalidades)

[Acesso ao Projeto](#acesso-ao-projeto)

## Descrição do Projeto
  Projeto front-end para consulta de CEP, consumindo informações do webservice ViaCEP de mandeira online ou pode ser alterado para consumir um dos back-ends feitos para esse projeto, os links podem ser encontrados no header ou acessados diretamento por aqui: 
-  [Back-end Java](https://github.com/wesleyluz/Consultar_CEP_S)  
-  [Back-end C#](https://github.com/wesleyluz/Consultar_CEP_CSharp)

## Funcionalidades
-   Consultar CEP: consulta o cep inserido através de requisições httpget.
-   Salva o CEP: disponível apenas com o Back-end, salva o cep na base de dados.
-   Buscar por uf: disponível apenas com Back-end, mostra uma lista de todos os ceps salvos na base ao consultar pela UF.

## Acesso ao projeto

Para acessar o projeto, basta fazer download desse [repositório](https://github.com/wesleyluz/ConsultaCEP-front).

## 🛠️ Abrir e rodar o projeto
Esse é um projeto Angular como descrito acima, para acessar o projeto, basta abri-lo na sua IDE favorita, acessar o terminal e rodar os comandos `ng server` ou `ng s`

Ao abrir o projeto, verifique o arquivo [src/app/pesquisar.service.ts](https://github.com/wesleyluz/ConsultaCEP-front/blob/main/src/app/pesquisar.service.ts) na função:
```
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
```
retire o comentário do Back-end que você estiver utilizando e comente a parte do GithubPages, assim as funcionalidades de salvar e acessar o banco estarão disponíveis.
Ainda nesse arquivo, você encontrará as funções de buscas de cada back-end.

Para habilitar as buscas pela UF, basta acessar [src/app/header/header.component.html](https://github.com/wesleyluz/ConsultaCEP-front/blob/main/src/app/header/header.component.html) no link:
```
      <li>
          <a routerLink="**"> UF </a>
          <!-- <a routerLink="/pesquisaruf">
             UF
          </a> -->
      </li>
```
Remova a tag a routerLink="**"> UF </a> e retire o comentário da outra habilitando assim a função de pesquisar por UF.

Em [src/app/pesquisaruf/pesquisaruf.component.html] (https://github.com/wesleyluz/ConsultaCEP-front/blob/main/src/app/pesquisaruf/pesquisaruf.component.html) no form:
```
<section class="search__container">
    <form class="search-form" [formGroup]="formSearch" (submit)="PesquisaporUfPaged()">
```
Escolha a função correspondente para o back-end que você estiver utilizando  as funções são encontradas em [src/app/pesquisaruf/pesquisaruf.component.ts](https://github.com/wesleyluz/ConsultaCEP-front/blob/main/src/app/pesquisaruf/pesquisaruf.component.ts) e estão sinalizadas sobre qual back-end pertencem.
