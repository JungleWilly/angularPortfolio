import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  myForm: FormGroup;
  subscription: Subscription;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      phone: [''],
      email: ['', Validators.required],
      comment: [],
    });

    this.subscription = this.myForm.statusChanges.subscribe(() =>
      this.changeStatusForm()
    );
  }

  changeStatusForm() {
    if (!this.myForm) {
      return;
    }
    const form = this.myForm;

    for (const field in this.errorsForm) {
      this.errorsForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && control.invalid) {
        const messages = this.messageErrors[field];
        for (const key in control.errors) {
          console.log(control.errors);
          this.errorsForm[field] += messages[key] + ' ';
        }
      }
    }
  }

  errorsForm = {
    name: '',
    email: '',
  };

  messageErrors = {
    name: {
      required: 'Ce champ est requis.',
      minlength: 'Vos nom et prénom doivent faire au moins 4 caractères.',
    },
    email: {
      required: 'Entrez un email.',
      invalid: 'Rentrez une adresse email valide.',
    },
  };
}
