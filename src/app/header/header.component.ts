import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private routes:Router
  ){}
  
  mainPage(){
    this.routes.navigate([""]);
  }

  OnlyWithBackEnd()
  {
    alert("Funcionalidade disponível apenas com o back-end, baixe nos links do header")
  }
}
