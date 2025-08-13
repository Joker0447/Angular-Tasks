import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget',
  standalone: true,
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent {
  @Input() title = '';
  @Input() icon = '';
  @Input() message = '';
}
