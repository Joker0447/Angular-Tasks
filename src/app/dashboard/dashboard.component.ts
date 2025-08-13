import { Component } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';
import { ActionComponent } from '../action/action.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [WidgetComponent, ActionComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {}
