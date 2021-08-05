import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../../services/students.service';
import {Student} from '../../model/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(){
    this.studentService.getStudents().subscribe(
      data => {
        this.students = data;
      }
    );
  }

}
