import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  url:string="http://localhost:3000/Employee"
  constructor(private http:HttpClient) { }

  //why we create =for post method onaly 
  e:Employee={

    id:0,
    name:"",
    uname:"",
    password:""
  }
  getalldata():Observable<Employee[]>
  {
   return this.http.get<Employee[]>(this.url)

  }
  deletedata(id:number){
  
  return this.http.delete(this.url+"/"+id);
  
  }
  postdata(emp:Employee):Observable<Employee>
  {
   return this.http.post<Employee>(this.url,emp);

  }
  updatedata(emp:Employee)
  {
    return this.http.put<Employee>(this.url,emp.id)
  }

}
