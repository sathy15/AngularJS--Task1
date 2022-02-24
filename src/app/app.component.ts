import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name1 = 'Angular' + VERSION.major;
  isshow = false;
}
