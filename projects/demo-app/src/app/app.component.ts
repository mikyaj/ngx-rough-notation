import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';
  annotations = {
    underline: false,
    box: false,
    circle: false,
    highlight: false,
    strikeThrough: false,
    crossedOff: false,
    group: false
  };
}
