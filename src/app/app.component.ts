import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-primera-app'; // no tiene visibilidad -> es pública y puede verla el template
  public valorPadre: string = "Dato a pasar";
}
