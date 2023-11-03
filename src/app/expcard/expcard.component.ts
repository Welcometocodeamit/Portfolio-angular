import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expcard',
  templateUrl: './expcard.component.html',
  styleUrls: ['./expcard.component.css']
})
export class ExpcardComponent {
  @Input() company!: string;

  @Input() expHeading!:string

  @Input() expData1!:string;
  @Input() expData2!:string;
  @Input() expData3!:string;
  @Input() expData4!:string;

  @Input() date!:string;

}
