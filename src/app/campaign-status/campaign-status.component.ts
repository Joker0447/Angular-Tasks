import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { MatButtonModule } from '@angular/material/button';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-campaign-status',
  templateUrl: './campaign-status.component.html',
  styleUrls: ['./campaign-status.component.scss'],
  standalone: true,
  imports: [CommonModule, AgGridModule, MatButtonModule],
})
export class CampaignStatusComponent {
  rowData = [
    { status: 'Active' },
    { status: 'Paused' },
    { status: 'Completed' },
    { status: 'Draft' },
    { status: 'Archived' },
  ];

  columnDefs: ColDef[] = [
    {
      field: 'status',
      headerName: 'Campaign Status',
      flex: 1,
    },
    {
      headerName: 'Actions',
      width: 120,
      cellRenderer: (params: ICellRendererParams) => {
        // Use Material Icons for Edit and Delete with tooltips
        return `
          <button class=\"btn edit-btn\" title=\"Edit\" aria-label=\"Edit\">
            <span class=\"material-icons\" style=\"font-size:22px;vertical-align:middle;\">edit</span>
          </button>
          <button class=\"btn delete-btn\" title=\"Delete\" aria-label=\"Delete\">
            <span class=\"material-icons\" style=\"font-size:22px;vertical-align:middle;\">delete</span>
          </button>
        `;
      },
    },
  ];

  // Referencë për API-në e grid-it (nëse do ta përdorësh)
  gridApi: any;

  onGridReady(params: any) {
    this.gridApi = params.api;

    // Regjistro event click për butonat brenda rreshtave
    params.api.addEventListener('cellClicked', (event: any) => {
      if (event.colDef.headerName === 'Actions') {
        const clickedButton = event.event.target as HTMLElement;
        const rowIndex = event.rowIndex;
        if (clickedButton.classList.contains('edit-btn')) {
          this.editRow(rowIndex);
        } else if (clickedButton.classList.contains('delete-btn')) {
          this.deleteRow(rowIndex);
        }
      }
    });
  }

  addRow() {
    const newStatus = prompt('Enter new campaign status:');
    if (newStatus && newStatus.trim()) {
      this.rowData = [...this.rowData, { status: newStatus.trim() }];
    }
  }

  editRow(index: number) {
    const currentStatus = this.rowData[index].status;
    const updatedStatus = prompt('Edit campaign status:', currentStatus);
    if (updatedStatus && updatedStatus.trim()) {
      this.rowData[index].status = updatedStatus.trim();
      this.rowData = [...this.rowData]; // Për rifreskim të grid-it
    }
  }

  deleteRow(index: number) {
    if (
      confirm(
        `Are you sure you want to delete "${this.rowData[index].status}"?`
      )
    ) {
      this.rowData.splice(index, 1);
      this.rowData = [...this.rowData]; // Për rifreskim të grid-it
    }
  }
}
