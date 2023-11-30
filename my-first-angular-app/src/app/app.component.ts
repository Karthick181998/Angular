import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  // multistyle css files-> styleUrls:['1','2']
  styles: [`
  h1{
    color:blue;
  }
  `]
})
export class AppComponent {
}
