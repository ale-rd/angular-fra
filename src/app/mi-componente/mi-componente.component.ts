import { Component, OnInit } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit, OnChanges {

  @Input() valor: string; 

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    //throw new Error("Method not implemented.");
  }

  public onButtonClick(): void {
    
  }

}
