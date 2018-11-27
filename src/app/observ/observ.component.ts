import {filter, map} from 'rxjs/internal/operators';
import {Subject, pipe,  of,   Observable} from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observ',
  templateUrl: './observ.component.html',
  styleUrls: ['./observ.component.css']
})
export class ObservComponent implements OnInit {

  constructor() { 
    // subscriber son hasta 3 parámetros, que son los callback next, error y complete
    // Cada instancia observable se debe a un solo subcriber
    // El signo $ es una convención para definir que es un observable
    var observable$ = new Observable(subscriber => {
      let array = [1,2,3,4,5]; // Stream de datos, lo obtenemos a través del tiempo.
    
    array.forEach( (element) => {
      subscriber.next( element );
    });
    
    subscriber.next(' next antes de un error');
    subscriber.error('Ocurrió un error X.'); // se corta el stream
    subscriber.next(' next después de un error');

    subscriber.next(' next antes de un complete');
    subscriber.complete(); // se corta el stream
    subscriber.next(' next después de un complete');

  });

  console.log("####### Observables #######");
  // El observable recién comienza a ejecutar su código cuando alguien se suscribe.
  var subscription = observable$.subscribe(
    // subscriber
    ( value ) => console.log('Valor: ' + value), // next
    ( error ) => console.log( 'error: ' + error), // error
    () => console.log('Completed') // complete
  )

  // Operators (funciones de orden superior)
  // Hay 100 operators que vienen con angular, pero podemos crear propios.
  console.log("###### Operators #######");
  // Operators
  let doubler = map( (value:number) => value*2);
  let mayorADiez = filter( (value:number) => value > 10);

  let source$ = of(1,2,3,4,5,6,7);
  let doubled$ = doubler(source$);
  let mayoresADiez$ = mayorADiez(doubled$);
  
  doubled$.subscribe( value => console.log(value));
  console.log(" Mayores a 10 ");
  mayoresADiez$.subscribe( value => console.log(value));

  console.log("Mayores a 10 con pipe: ")
  let piped$ = source$.pipe(
    doubler,
    mayorADiez
  )
  piped$.subscribe(value => console.log(value));
  

  /*
   * Subjects
   * 
   */
  console.log("####### SUBJECT ########")
  let subject$ = new Subject();
  //subject$.next('hola');
  subject$.next(value => console.log(value));

  // FIXME Revisar
  let observable2$ = of(1,2,3,4,5);
  observable2$.subscribe( subject$ );

  subject$.subscribe( value => console.log(value));


  // Conviene hacerlo en ngOnDestroy()
  subscription.unsubscribe();
  
  }

  ngOnInit() {
  }

}

