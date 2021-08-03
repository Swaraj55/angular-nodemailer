import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NodemailerMainService } from './nodemailer-main.service';

@Component({
  selector: 'app-nodemailer-main',
  templateUrl: './nodemailer-main.component.html',
  styleUrls: ['./nodemailer-main.component.scss']
})
export class NodemailerMainComponent implements OnInit {

  mailerForm: FormGroup = new FormGroup({});
  isSubmitted:boolean = false;

  constructor(private formBuilder: FormBuilder,
              private nodemailerMainService: NodemailerMainService,
              private _snackBar: MatSnackBar,
              ) { }

  ngOnInit(): void {
    this.mailerForm = this.formBuilder.group({
      username: [''],
      company: [''],
      phoneNumber: [''],
      email: [''],
      message: [''],
    })
  }

  openSnackBar(message: string, action: string, cssClass: string) {
    this._snackBar.open(message, action, {
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: cssClass,
        duration: 4000
    });
  }

  onSubmit(): void {
    this.isSubmitted = true;

    //stop here if form is invalid
    if(this.mailerForm.invalid) {
      return;
    } 

    let payload = {
      username: this.mailerForm.controls['username'].value,
      company: this.mailerForm.controls['company'].value,
      message: this.mailerForm.controls['message'].value,
      phoneNumber: this.mailerForm.controls['phoneNumber'].value,
      email: this.mailerForm.controls['email'].value,
    }
    
    
    this.nodemailerMainService.submitInfo(payload).subscribe((data: any) => {
      console.log(data.message);
      if(data.message.status === "success") {
        this.openSnackBar('Email Send Successfully', '', 'mat-snack-bar-success');
      }
    })
  }
}
