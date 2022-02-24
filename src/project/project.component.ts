import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  model = new Project();
  users = [];
  deleteid = 0;
  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers() {
    this.projectService.getAllUsersService().subscribe((data: any[]) => {
      this.users = data;
       console.log(JSON.stringify(this.users));
    });
  }
  // addUser() {
  //   if (!this.model.id) {
  //     this.projectService.createUserService(this.model).subscribe((data) => {
  //       this.getAllUsers();
  //       this.model = new Project();
  //       document.getElementById('addTaskModal').click();
  //     });
  //   } else {
  //     console.log(this.model);
  //     this.projectService
  //       .updateUserService(this.model.id, this.model)
  //       .subscribe((data: any) => {
  //         this.getAllUsers();
  //         this.model = new Project();
  //         document.getElementById('editTaskModal').click();
  //       });
  //   }
  // }
  // editUser(id: string) {
  //   alert(id);
  //   this.projectService.getUserService(id).subscribe((data: any) => {
  //     this.model = data;
  //   });
  // }
  // deleteUser(id: number) {
  //   alert(id);
  //   this.deleteid = id;
  // }
}
