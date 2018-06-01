import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  operators:Array<string> = ['+','-','/','*'];
  operand1:number = 0;
  operand2:number = 0;
  result: number = 0;
}
