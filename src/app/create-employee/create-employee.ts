import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Employee } from '../model/employee';
import { CommonModule } from '@angular/common';
import { employeeService } from './service/employee';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-create-employee',
  imports: [RouterModule, FormsModule,CommonModule,HttpClientModule],
  templateUrl: './create-employee.html',
  styleUrl: './create-employee.scss',
  providers: [employeeService]
})
export class CreateEmployee implements OnInit{

  ngOnInit(): void {
      
  }

  employee: Employee=new Employee();
  constructor(private employeeservice:employeeService,private router:Router){ }
   onsubmit(){
    this.employeeservice.createuser(this.employee).subscribe((x:any)=>{
      console.log(x)
      this.router.navigate(['/employee']);
    },(error:any)=>{
      console.log(error)
    })    
   }


}
