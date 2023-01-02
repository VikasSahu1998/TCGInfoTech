import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  contactForm: FormGroup | any;

  constructor(private formbuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.email]),
      PhoneNumber: new FormControl('', [Validators.required, Validators.nullValidator]),
      email: new FormControl('', [Validators.required, Validators.nullValidator]),
      subject: new FormControl('', [Validators.required, Validators.nullValidator]),
      msg: new FormControl('', [Validators.required, Validators.nullValidator]),
    },
    );
  }

}
