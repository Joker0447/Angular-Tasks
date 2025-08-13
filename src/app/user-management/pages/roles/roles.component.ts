import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface RoleNode {
  label: string;
  children?: RoleNode[];
  expanded?: boolean;
}

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {
  roles: RoleNode[] = [
    {
      label: 'Organization',
      expanded: true,
      children: [
        {
          label: 'CEO',
          expanded: true,
          children: [
            {
              label: 'Vice President',
              children: [
                {
                  label: 'Sales Manager',
                  children: [
                    { label: 'Sales Person' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  toggle(node: RoleNode) {
    node.expanded = !node.expanded;
  }
}



