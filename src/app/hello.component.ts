import { Component, Input } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'hello',
  template: `<h1>[{{user.id}}, {{user.name}} , {{user.email}}][{{user1.id}}, {{user1.name}} , {{user1.email}} ]</h1>`,
  styles: [`h1 { background-color: white;}`]
})
export class HelloComponent  {
  @Input() name: string;
   user = new User(1,"sathy","sathya@123"); 
   user1 = new User(2,"moorthi","moorthi@123");  
}
