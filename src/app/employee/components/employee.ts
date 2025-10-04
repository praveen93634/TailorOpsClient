import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { employeeService } from '../../create-employee/service/employee';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-employee',
  imports: [CommonModule, RouterModule,HttpClientModule],
  templateUrl: './employee.html',
  styleUrl: './employee.scss',
  providers: [employeeService]
})
export class Employee implements OnInit{
  ngOnInit(): void {
      this.getAllEmployee()
  }
  tableHeaders= [
  { lable: 'id', label: 'ID', sortable: true },
  { lable: 'name', label: 'Name', sortable: true },
  { lable: 'email', label: 'Email', sortable: true },
  { lable: 'role', label: 'Role', sortable: true },
  { lable: 'status', label: 'Status', sortable: false }
]
public employeeList:any=[];

constructor(private employeeservice:employeeService){}

    getAllEmployee(){
        this.employeeservice.getAllEmployee().subscribe((res:any)=>{
          this.employeeList=res;
          console.log(res)
        },(err)=>{
          console.log(err.message)
        })
    }

}
