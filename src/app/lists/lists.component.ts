// src/app/lists/lists.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [CommonModule, FormsModule, AgGridModule],
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent {
  // Add column (from dropdown)
  addColumn() {
    if (
      this.columnToAdd &&
      this.selectedColumns.length < 15 &&
      !this.selectedColumns.includes(this.columnToAdd)
    ) {
      this.selectedColumns.push(this.columnToAdd);
      this.columnToAdd = null;
      this.syncRowData();
    }
  }

  // Remove column (from chip)
  onColumnChange(remove: boolean, col: string) {
    if (!remove) {
      this.selectedColumns = this.selectedColumns.filter((c) => c !== col);
      this.syncRowData();
    }
  }

  // Add All Condition
  addAllCondition() {
    this.allConditions.push('');
  }

  // Add Any Condition
  addAnyCondition() {
    this.anyConditions.push('');
  }

  // Form submit
  onSubmit() {
    // You can handle the form submission here
    const payload = {
      listName: this.listName,
      setAsDefault: this.setAsDefault,
      listInMetrics: this.listInMetrics,
      shareList: this.shareList,
      selectedColumns: this.selectedColumns,
      allConditions: this.allConditions,
      anyConditions: this.anyConditions,
    };
    console.log('Form submitted:', payload);
  }
  // Form fields
  listName = '';
  setAsDefault = false;
  listInMetrics = false;
  shareList = false;

  // Columns (sipas screenshot – shtova edhe "Company")
  columns: string[] = [
    'First Name',
    'Last Name',
    'Primary Phone',
    'Company',
    'Lead Source',
    'Primary Email',
    'Website',
    'Assigned To',
    'City',
    'Country',
  ];

  selectedColumns: string[] = [];
  columnToAdd: string | null = null;

  // Conditions
  allConditions: string[] = [];
  anyConditions: string[] = [];

  // ——— AG Grid (opsional / i fshehur vizualisht) ———
  gridApi!: GridApi;
  columnDefs: ColDef[] = [
    { headerName: 'Column', field: 'col', rowDrag: true },
  ];
  rowData: Array<{ col: string }> = [];

  constructor() {
    // fillimisht të gjitha
    this.selectedColumns = [...this.columns];
    this.syncRowData();
  }

  get availableColumns(): string[] {
    return this.columns.filter((c) => !this.selectedColumns.includes(c));
  }

  // AG Grid
  onGridReady(e: GridReadyEvent) {
    this.gridApi = e.api;
  }
  private syncRowData() {
    this.rowData = this.selectedColumns.map((col) => ({ col }));
  }
}
