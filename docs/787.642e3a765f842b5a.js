"use strict";(self.webpackChunkconsulta_front=self.webpackChunkconsulta_front||[]).push([[787],{787:(x,l,o)=>{o.r(l),o.d(l,{PesquisarufModule:()=>r});var g=o(6895),f=o(6773),s=o(433),t=o(8256),h=o(3421);function d(a,n){if(1&a&&(t.TgZ(0,"li")(1,"strong"),t._uU(2,"CEP:"),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA(),t.TgZ(5,"strong"),t._uU(6,"Logradouro: "),t.qZA(),t.TgZ(7,"p"),t._uU(8),t.qZA(),t.TgZ(9,"strong"),t._uU(10,"Complemento: "),t.qZA(),t.TgZ(11,"p"),t._uU(12),t.qZA(),t.TgZ(13,"strong"),t._uU(14,"Bairro: "),t.qZA(),t.TgZ(15,"p"),t._uU(16),t.qZA(),t.TgZ(17,"strong"),t._uU(18,"Localidade: "),t.qZA(),t.TgZ(19,"p"),t._uU(20),t.qZA(),t.TgZ(21,"strong"),t._uU(22,"UF: "),t.qZA(),t.TgZ(23,"p"),t._uU(24),t.qZA(),t.TgZ(25,"strong"),t._uU(26,"Unidade: "),t.qZA(),t.TgZ(27,"p"),t._uU(28),t.qZA()()),2&a){const e=n.$implicit;t.xp6(4),t.Oqu(e.cep),t.xp6(4),t.Oqu(e.logradouro),t.xp6(4),t.Oqu(e.complemento),t.xp6(4),t.Oqu(e.bairro),t.xp6(4),t.Oqu(e.localidade),t.xp6(4),t.Oqu(e.uf),t.xp6(4),t.Oqu(e.unidade)}}function _(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"div",6)(1,"span"),t._uU(2),t.qZA(),t.TgZ(3,"select",7),t.NdJ("ngModelChange",function(u){t.CHM(e);const m=t.oxw();return t.KtG(m.selectChange(u))}),t.TgZ(4,"option",8),t._uU(5,"Qnt por pagina"),t.qZA(),t.TgZ(6,"option",9),t._uU(7," 05 "),t.qZA(),t.TgZ(8,"option",9),t._uU(9," 10 "),t.qZA(),t.TgZ(10,"option",9),t._uU(11," 20 "),t.qZA(),t.TgZ(12,"option",9),t._uU(13," 50 "),t.qZA()(),t.TgZ(14,"ul"),t.YNc(15,d,29,7,"li",10),t.qZA(),t.TgZ(16,"div",11)(17,"button",12),t.NdJ("click",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.NavigatePage(!1))}),t._UZ(18,"i",13),t.qZA(),t.TgZ(19,"strong"),t._uU(20),t.qZA(),t.TgZ(21,"button",12),t.NdJ("click",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.NavigatePage(!0))}),t._UZ(22,"i",14),t.qZA()()()}if(2&a){const e=t.oxw();t.xp6(2),t.hij("Todos os CEPs da UF ",e.Listofceps[0].uf,", na base de dados:"),t.xp6(4),t.Q6J("ngValue",5),t.xp6(2),t.Q6J("ngValue",10),t.xp6(2),t.Q6J("ngValue",20),t.xp6(2),t.Q6J("ngValue",50),t.xp6(3),t.Q6J("ngForOf",e.Listofceps),t.xp6(2),t.Q6J("disabled",!e.canPrev),t.xp6(3),t.AsE("",e.currentPage+1," de ",e.totalOfpages,""),t.xp6(1),t.Q6J("disabled",!e.canNext)}}class c{constructor(n,e){this.fb=n,this.pesquisaService=e,this.Listofceps=[],this.Anyarray=[],this.numOfPage=0,this.itensInPage=2,this.currentPage=0,this.totalOfpages=0,this.canNext=!0,this.canPrev=!1,this.formSearch=this.fb.group({UF:["",[s.kI.required,s.kI.maxLength(2)]],selectOptions:[""]})}PesquisaporUF(){this.formSearch.value.UF=this.formSearch.value.UF?.toLocaleUpperCase(),this.pesquisaService.buscarListaCEPUf(this.formSearch.value.UF)?.subscribe(n=>{this.Listofceps=n,this.validaCEPs()})}PesquisaporUfPaged(){this.formSearch.value.UF=this.formSearch.value.UF?.toLocaleUpperCase(),this.pesquisaService.buscarPagedCEPUf(this.formSearch.value.UF,this.numOfPage,this.itensInPage).subscribe(n=>{this.Anyarray=n,this.Listofceps=this.Anyarray[this.formSearch.value.UF],this.currentPage=this.Anyarray.currentPage,this.totalOfpages=this.Anyarray.totalPages,this.currentPage+1<this.totalOfpages?(this.canNext=!0,this.canPrev=!0):this.canNext=!1,0==this.currentPage&&(this.canPrev=!1)})}PesquisaporUfPagedCSharp(){this.formSearch.value.UF=this.formSearch.value.UF?.toLocaleUpperCase(),this.pesquisaService.buscarPagedCEPUfCSharp(this.formSearch.value.UF,this.numOfPage,this.itensInPage,"asc").subscribe(n=>{this.Anyarray=n,this.Listofceps=this.Anyarray.list,this.currentPage=this.Anyarray.currentPage,this.totalOfpages=this.Anyarray.totalPages,this.currentPage+1<this.totalOfpages?(this.canNext=!0,this.canPrev=!0):this.canNext=!1,0==this.currentPage&&(this.canPrev=!1)})}NavigatePage(n){switch(n){case!0:this.numOfPage++,this.PesquisaporUfPaged();break;case!1:this.numOfPage--,this.PesquisaporUfPaged()}}validaCEPs(){this.Listofceps.length<=0&&alert("Uf n\xe3o consta no banco")}selectChange(n){this.itensInPage=n,this.PesquisaporUfPaged()}}c.\u0275fac=function(n){return new(n||c)(t.Y36(s.qu),t.Y36(h.U))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-pesquisaruf"]],decls:8,vars:3,consts:[[1,"search__title"],[1,"search__container"],[1,"search-form",3,"formGroup","submit"],["type","text","placeholder","UF","formControlName","UF","maxlength","2"],["type","submit",1,"Button",3,"disabled"],["class","itens__container",4,"ngIf"],[1,"itens__container"],["formControlName","selectOptions",3,"ngModelChange"],["value","","disabled","","selected","","hidden",""],[3,"ngValue"],[4,"ngFor","ngForOf"],[1,"navButtons"],[3,"disabled","click"],[1,"fa-solid","fa-arrow-left"],[1,"fa-solid","fa-arrow-right"]],template:function(n,e){1&n&&(t.TgZ(0,"h2",0),t._uU(1," Buscar por UF"),t.qZA(),t.TgZ(2,"section",1)(3,"form",2),t.NdJ("submit",function(){return e.PesquisaporUfPaged()}),t._UZ(4,"input",3),t.TgZ(5,"button",4),t._uU(6,"Pesquisar"),t.qZA(),t.YNc(7,_,23,10,"div",5),t.qZA()()),2&n&&(t.xp6(3),t.Q6J("formGroup",e.formSearch),t.xp6(2),t.Q6J("disabled",e.formSearch.invalid),t.xp6(2),t.Q6J("ngIf",e.Listofceps.length>0))},dependencies:[g.sg,g.O5,s._Y,s.YN,s.Kr,s.Fj,s.EJ,s.JJ,s.JL,s.nD,s.sg,s.u],styles:[".search__title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}.search-form[_ngcontent-%COMP%]{display:flow-root;flex:1;row-gap:20px;margin-bottom:50px;min-width:300px}.search-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin:0 30px 0 10px;height:14px}.search__container[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:20px;padding:20px 0}.itens__container[_ngcontent-%COMP%]{width:100%;max-width:1180px;padding:10px 30px;margin:32px auto;background-color:#57555780}.itens__container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;margin:0 0 15px;font-size:1.5em;font-weight:500;text-align:center;color:var(--blue)}.itens__container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{display:block;margin:0 0 15px}.itens__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:20px;list-style:none}.itens__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:#ffffff;padding:15px;border-radius:8px;position:relative}.itens__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;margin-bottom:10px;color:#41414d}.itens__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] + strong[_ngcontent-%COMP%]{margin-top:12px}.itens__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#737380;line-height:21px;font-size:16px}.navButtons[_ngcontent-%COMP%]{display:block;text-align:center;margin:10px auto;padding:10px;width:auto}.navButtons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 10px;height:30px;width:40px;padding:5px 10px;font-size:1em}.navButtons[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{margin:0 auto;border:5px solid;border-color:#fff;background-color:#fff}"]});const P=[{path:"",component:c}];class i{}i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[f.Bz.forChild(P),f.Bz]});class r{}r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[g.ez,s.UX,i]})}}]);