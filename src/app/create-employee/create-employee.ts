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
  constructor(private employeeService:employeeService,private router:Router){}
  showPassword?:Boolean
  employee: Employee=new Employee();

   onsubmit(){
      this.employeeService.creatEmployee(this.employee).subscribe((result:any)=>{
        console.log(result); 
        this.router.navigateByUrl('/employee')
      },(error:any)=>{
        console.log(error);
        
      })
   }
   togglePassword(){
      this.showPassword = !this.showPassword;
      this.employee.passWord
   }

}
