import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  imports: [CommonModule],
  templateUrl: './employee.html',
  styleUrl: './employee.scss'
})
export class Employee {
  tableHeaders= [
  { lable: 'id', label: 'ID', sortable: true },
  { lable: 'name', label: 'Name', sortable: true },
  { lable: 'email', label: 'Email', sortable: true },
  { lable: 'role', label: 'Role', sortable: true },
  { lable: 'status', label: 'Status', sortable: false }
]
public employeeList:any=[];

}
