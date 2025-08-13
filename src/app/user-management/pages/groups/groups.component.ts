import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Group {
  name: string;
  description: string;
}

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent {
  groups: Group[] = [
    { name: 'Team Selling', description: 'Group Related to Sales' },
    { name: 'Marketing Group', description: 'Group Related to Marketing Activities' },
    { name: 'Support Group', description: 'Group Related to providing Support to Customers' }
  ];

  editGroup(group: Group) {
    alert(`Editing: ${group.name}`);
  }

  deleteGroup(group: Group) {
    if (confirm(`Delete group "${group.name}"?`)) {
      this.groups = this.groups.filter(g => g !== group);
    }
  }
}


