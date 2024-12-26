import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {
  deptObj : any = {
    "departmentId":0,
    "departmentName":'',
    'departmentLogo':""
  }

  http = inject(HttpClient);

  ngOnInit(): void {
      this.getDepartment();
  }

  onSave(){
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.deptObj).subscribe((res: any)=>{
      debugger;
      if(res.result){
        alert("Department created successfully");
        this.getDepartment();
      }
      else{
        alert(res.message);
      }
    })
  }

  departmentList : any[]=[]; 
  getDepartment(){
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((result : any )=>{
      this.departmentList = result.data;
    })
  }
}
