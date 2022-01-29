import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  user:FormGroup;  
  // studentData:any;
  closeResult = '';
  studentData: any = [];
  // userList: any;



  constructor(private formBuilder:FormBuilder,private modalService: NgbModal){ 
    this.user = this.formBuilder.group({
      name:['',Validators.required],
      age: ['', Validators.required],
      email:['',Validators.required],
      collageName:['',Validators.required],
      departmentName:['',Validators.required]
      })
  }
  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    return this.studentData
  }

  getUserByID(id:number){
    return this.studentData.find((x: { id: number; })=> x.id== id)
  }

  addUser(){
     this.studentData.push({
       ...this.user.value,
       id:this.studentData.length + 1
     })
     this.modalService.dismissAll();
    }


  remove(id:any){
    this.studentData = this.studentData.filter((x:any) => x.id !=id);
  }

  // removeSelectedRows(){
  //   this.studentData = this.studentData.filter((u:any) => !u.isSelected);
  // }

  onSubmit(){
    
  }
  open(content: any) {
    this.user.reset()
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}


 












 







