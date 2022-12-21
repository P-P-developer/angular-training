import { Component, Input } from '@angular/core';

@Component({
  selector: 'st-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss'],
})
export class ArrowComponent {
  @Input() propertyToCheck: number = 0;
}