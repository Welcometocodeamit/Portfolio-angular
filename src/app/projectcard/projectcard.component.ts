import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html',
  styleUrls: ['./projectcard.component.css']
})
export class ProjectcardComponent {

  @Input() heading!:string;
  @Input() data1p1!:string;
  @Input() data1p2!:string;
  @Input() data1p3!:string;
  @Input() skill101!:string
  @Input() skill102!:string
  @Input() skill103!:string
  @Input() skill104!:string
  @Input() github1!:string;
  @Input() link1!:string;


}
