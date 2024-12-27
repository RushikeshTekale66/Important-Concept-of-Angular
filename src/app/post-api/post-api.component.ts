import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../service/department.service';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {
  deptObj: any = {
    "departmentId": 0,
    "departmentName": '',
    'departmentLogo': ""
  }

  //Two ways to create department service
  // 1
  http = inject(HttpClient);

  // 2
  constructor(private deptSrv: DepartmentService) { };

  ngOnInit(): void {
    this.getDepartment();
  }

  //Normal API Call
  // onSave() {
  //   this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.deptObj).subscribe((res: any) => {
  //     debugger;
  //     if (res.result) {
  //       alert("Department created successfully");
  //       this.getDepartment();
  //     }
  //     else {
  //       alert(res.message);
  //     }
  //   })
  // }

  // API Call using Service
  onSave() {
    this.deptSrv.saveNewDep(this.deptObj).subscribe((res: any) => {
      debugger;
      if (res.result) {
        alert("Department created successfully");
        this.getDepartment();
      }
      else {
        alert(res.message);
      }
    })
  }

  departmentList: any[] = [];

  //Normal Api cal
  // getDepartment() {
  //   this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((result: any) => {
  //     this.departmentList = result.data;
  //   })
  // }

  //Api call using Service
  getDepartment() {
    this.deptSrv.getAllDept().subscribe((res: any) => {
      this.departmentList = res.data;
    })
  }

  onEdit(data: any) {
    this.deptObj = data;
  }

  // Normal API call
  // onUpdate() {
  //   this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment", this.deptObj).subscribe((res: any) => {
  //     if (res.result) {
  //       alert("Department Updated Successfylly");
  //       this.getDepartment();
  //     }
  //     else {
  //       alert(res.message);
  //     }
  //   })
  // }

  // API call using service
  onUpdate() {
    this.deptSrv.updateDepartment(this.deptObj).subscribe((res: any) => {
      if (res.result) {
        alert("Department Updated Successfylly");
        this.getDepartment();
      }
      else {
        alert(res.message);
      }
    })
  }


  //Normal Api call
  // onDelete(id: number) {
  //   debugger;
  //   const isDelete = confirm("Are you want to delete record");
  //   alert(id);
  //   if (isDelete) {
  //     this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" + id).subscribe((res: any) => {
  //       if (res.result) {
  //         alert("Department Deleted Successfylly");
  //         this.getDepartment();
  //       }
  //       else {
  //         alert(res.message);
  //       }
  //     })
  //   }
  // }

  // API Call using service
  onDelete(id: number) {
    debugger;
    const isDelete = confirm("Are you want to delete record");
    if (isDelete) {
      this.deptSrv.deleteDepartment(id).subscribe((res: any) => {
        if (res.result) {
          alert("Department Deleted Successfylly");
          this.getDepartment();
        }
        else {
          alert(res.message);
        }
      })
    }
  }
}
