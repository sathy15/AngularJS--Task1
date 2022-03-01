import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name1 = 'Angular' + VERSION.major;
  isshow = false;

  myFunc() {
    var num1 = (document.getElementById('exchageRateDate') as HTMLInputElement)
      .value;
    // console.log(num1);
    alert("your selected place is" +"  "+num1);
  }
}
