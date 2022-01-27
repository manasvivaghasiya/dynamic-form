import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pluse',
  templateUrl: './pluse.component.html',
  styleUrls: ['./pluse.component.css']
})
export class PluseComponent implements OnInit {
  user:FormGroup;  

  constructor(private formBuilder:FormBuilder) { 
    this.user = this.formBuilder.group({
          collagename:['',Validators.required],
          departmentName:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

   onSubmit(){
     
   }
}
