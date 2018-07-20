import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get("http://localhost:3000/student/students");
  }




  addStudent(student) {
    var headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.post("http://localhost:3000/student/api/createStudent",(student), {headers: headers});
  }





  deleteStudent(studentid) {
    return this.http.delete(`http://localhost:3000/student/${studentid}`);
  }
}
