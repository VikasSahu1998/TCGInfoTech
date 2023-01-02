import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  contactForm: FormGroup | any;

  constructor(private formbuilder: FormBuilder, private api: ApiService,) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.nullValidator]),
      PhoneNumber: new FormControl('', [Validators.required, Validators.nullValidator]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required, Validators.nullValidator]),
      msg: new FormControl('', [Validators.required, Validators.nullValidator]),
    },
    );
  }

   adddetail() {
  
      if (this.contactForm.valid) {
        this.api.PostContact(this.contactForm.value)
          .subscribe({
            next: (res) => {
              alert("details added successfully");
              this.contactForm.reset();
            },
            error: () => {
              alert("Something went wrong ")
            }
          })
      }
    } 
}
