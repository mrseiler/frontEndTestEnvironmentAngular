import { Component, OnInit } from '@angular/core';
import { StudentserviceService} from '../services/studentservice.service';
import { Student } from '../student';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //students: Object;
  student: Student;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  resume: string;

  students: Object[] = [];

  constructor(private studentService: StudentserviceService) {
   }

  ngOnInit() {
  }
/*
  onSubmit(): void{
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    })
  }*/
  createStudent(event): void {
    console.log(this.firstName);
    //event.preventDefault();
    console.log(event);

    var newStudent = { student: {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
      resume: this.resume
    }
    }
    console.log(newStudent.student.first_name);
    console.log(newStudent);
    this.studentService.addStudent(newStudent).subscribe(data => {
      this.students.push(data);
    });
  }
 
}
/*interface Student {
  first_name: string;
  last_name: string;
  email: number;
  password: string;
  resume: string;
}
*/