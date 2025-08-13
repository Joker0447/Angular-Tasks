import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action',
  standalone: true,
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent {
  @Input() icon = '';
  @Input() label = '';
}
