import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {
  alumnos: any;
  cantidadDeAlumnos: number;

  constructor(private http: HttpClient) { 
    let alumnos$ = this.http.get('https://demo3744158.mockable.io/alumnos');

    alumnos$.subscribe(
      value =>  {
        this.alumnos = value;
      }
    );

   
  }

  ngOnInit() {
    
  }

}
