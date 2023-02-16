import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public common:CommonService) { }
   emplist:Employee[]
  ngOnInit(): void {
   
   this.common.getalldata().subscribe(data=>{

       this.emplist=data

   })
  }
  deletedata(id:number){

    this.common.deletedata(id).subscribe();
    window.location.reload();

  }
  editdata(emp:Employee)
  {
    this.common.e=Object.assign({},emp);
    // window.location.reload();
  }

  
}
