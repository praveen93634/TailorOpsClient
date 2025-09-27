import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class employeeService {
    private url=environment.apiUrl+'api/v1/user'
    constructor(private http:HttpClient){}
    public createuser(data:any){
     return this.http.post((this.url+'/create'),data)
    }
    public getAllEmployee(){
      return this.http.get(this.url+'/getAllEmployee')
    }
}
