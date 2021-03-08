import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css']
})
export class RendererComponent implements OnInit {

  alumnos: Array<any>;
  clearElement: HTMLElement;

  constructor( private ren:Renderer2) {


    this.alumnos = [
      {nombre: "David", id:1},
      {nombre: "El pesao que no hace más que hablar", id:2},
      {nombre: "Otro", id:3},
    ]

   }

  ngOnInit(): void {
  }

  activeMethod(element: HTMLElement){
    
    if(this.clearElement){
      this.ren.removeClass(this.clearElement, 'miclase');
    }

    this.ren.addClass(element, 'miclase')
    
    this.clearElement = element; 

  }
}
