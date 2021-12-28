import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup} from '@angular/forms'
import{Validators} from '@angular/forms'
@Component({
  selector: 'app-career-with-us',
  templateUrl: './career-with-us.component.html',
  styleUrls: ['./career-with-us.component.css']
})
export class CareerWithUsComponent implements OnInit {
  loginForm=new FormGroup({
    Fname:new FormControl(' '),
    Lname:new FormControl(' '),
    Email:new FormControl(' '),
    Mobno:new FormControl(' '),
    FatherName:new FormControl(' '),
    MotherName:new FormControl(' '),

  })

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(values:any){
    console.log(values)
  }
// get Fname(){return this.onSubmit('Fname')}
}
