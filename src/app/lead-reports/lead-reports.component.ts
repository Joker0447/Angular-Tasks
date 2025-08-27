import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lead-reports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lead-reports.component.html',
  styleUrls: ['./lead-reports.component.scss'],
})
export class LeadReportsComponent {
  editFolderIndex: number | null = null;
  editFolderName: string = '';

  startEditFolder(index: number, folder: any): void {
    this.editFolderIndex = index;
    this.editFolderName = folder.name;
  }

  saveEditFolder(index: number): void {
    if (this.editFolderIndex !== null && this.editFolderName.trim()) {
      this.folders[index].name = this.editFolderName.trim();
      this.editFolderIndex = null;
      this.editFolderName = '';
    }
  }

  cancelEditFolder(): void {
    this.editFolderIndex = null;
    this.editFolderName = '';
  }

  deleteFolder(index: number): void {
    const confirmed = confirm('Are you sure you want to delete this folder?');
    if (confirmed) {
      this.folders.splice(index, 1);
      this.cancelEditFolder();
    }
  }
  public addFolder(): void {
    const folderName = prompt('Enter new folder name:');
    if (folderName && folderName.trim()) {
      this.folders.push({ name: folderName.trim() });
    }
  }
  folders = [
    { name: 'All Reports' },
    { name: 'Activity Reports' },
    { name: 'Campaign Reports' },
    { name: 'Email Reports' },
    { name: 'Invoice Reports' },
    { name: 'Lead Reports', active: true },
    { name: 'Shared With Me' },
  ];

  reports = [
    {
      type: 'Lead by Source',
      name: 'Lead by Source',
      module: 'Leads',
      folder: 'Lead Reports',
      owner: 'Administrator',
    },
    {
      type: 'Lead Status Report',
      name: 'Lead Status Report',
      module: 'Leads',
      folder: 'Lead Reports',
      owner: 'Administrator',
    },
  ];

  search = {
    type: '',
    name: '',
    module: '',
    folder: '',
    owner: '',
  };

  selectedFolder: string = 'Lead Reports';

  public filteredReports(): any[] {
    let filtered = this.reports;
    if (this.selectedFolder && this.selectedFolder !== 'All Reports') {
      filtered = filtered.filter((r: any) => r.folder === this.selectedFolder);
    }
    Object.keys(this.search).forEach((key) => {
      const k = key as keyof typeof this.search;
      if (this.search[k]) {
        filtered = filtered.filter(
          (r: any) =>
            r[k] && r[k].toLowerCase().includes(this.search[k]!.toLowerCase())
        );
      }
    });
    return filtered;
  }

  public selectFolder(folder: { name: string; active?: boolean }): void {
    this.folders.forEach((f: any) => (f.active = false));
    folder.active = true;
    this.selectedFolder = folder.name;
    this.search.folder = folder.name === 'All Reports' ? '' : folder.name;
  }
  public addingReport: boolean = false;
  public newReport: any = {
    type: '',
    name: '',
    module: '',
    folder: '',
    owner: '',
  };

  public addReport(): void {
    this.addingReport = true;
    this.newReport = {
      type: '',
      name: '',
      module: this.selectedFolder === 'All Reports' ? '' : this.selectedFolder,
      folder: this.selectedFolder === 'All Reports' ? '' : this.selectedFolder,
      owner: 'Administrator',
    };
  }

  public confirmAddReport(): void {
    // Validate all fields are filled
    const { type, name, module, folder, owner } = this.newReport;
    if (
      !type.trim() ||
      !name.trim() ||
      !module.trim() ||
      !folder.trim() ||
      !owner.trim()
    ) {
      alert('Please fill in all fields before adding the report.');
      return;
    }
    this.reports.push({ ...this.newReport });
    this.addingReport = false;
    this.newReport = {
      type: '',
      name: '',
      module: '',
      folder: '',
      owner: '',
    };
  }

  public cancelAddReport(): void {
    this.addingReport = false;
    this.newReport = {
      type: '',
      name: '',
      module: '',
      folder: '',
      owner: '',
    };
  }

  editIndex: number | null = null;
  editReport: any = {};

  startEdit(index: number, report: any): void {
    this.editIndex = index;
    this.editReport = { ...report };
  }

  saveEdit(index: number): void {
    if (this.editIndex !== null) {
      this.reports[index] = { ...this.editReport };
      this.editIndex = null;
      this.editReport = {};
    }
  }

  cancelEdit(): void {
    this.editIndex = null;
    this.editReport = {};
  }

  onDelete(report: any): void {
    const confirmed = confirm(
      'Are you sure you want to delete: ' + report.name + '?'
    );
    if (confirmed) {
      this.reports = this.reports.filter((r) => r !== report);
      this.cancelEdit();
    }
  }
}
