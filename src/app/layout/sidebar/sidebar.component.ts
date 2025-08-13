import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isCollapsed = false;
  expandedMenus: { [key: string]: boolean } = {
    marketing: false,
    sales: false,
    inventory: false,
    support: false,
    projects: false,
    tools: false,
    settings: false,
  };

  otherMenus = [
    { key: 'inventory', label: 'INVENTORY', icon: 'inventory_2' },
    { key: 'support', label: 'SUPPORT', icon: 'support_agent' },
    { key: 'projects', label: 'PROJECTS', icon: 'folder' },
    { key: 'tools', label: 'TOOLS', icon: 'build' },
    { key: 'settings', label: 'SETTINGS', icon: 'settings' },
  ];

  staticItems = [
    { label: 'Mail Manager', icon: 'email' },
    { label: 'Extension Store', icon: 'store' },
  ];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      Object.keys(this.expandedMenus).forEach((key) => {
        this.expandedMenus[key] = false;
      });
    }
  }

  toggleMenu(menuKey: string) {
    if (!this.isCollapsed) {
      this.expandedMenus[menuKey] = !this.expandedMenus[menuKey];
    }
  }

  isMenuExpanded(menuKey: string): boolean {
    return this.expandedMenus[menuKey] && !this.isCollapsed;
  }
}
