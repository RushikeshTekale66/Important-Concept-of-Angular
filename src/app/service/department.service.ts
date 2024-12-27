import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http : HttpClient) { }

  apiUrl : string = "https://projectapi.gerasim.in/api/Complaint";

  getAllDept(){
    debugger;
    return this.http.get(this.apiUrl + "/GetParentDepartment");
  }

  saveNewDep(obj : any){
    debugger;
    return this.http.post(`${this.apiUrl}/AddNewDepartment`, obj);
  }

  updateDepartment(obj : any){
    debugger ;
    return this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment", obj);
  }

  deleteDepartment(id : any){
    debugger;
    return this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" + id);
  }
}
