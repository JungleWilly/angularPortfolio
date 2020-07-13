import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import { Observable, Subscription } from 'rxjs';

import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public color: string = 'primary';

  myForm: FormGroup;
  subscription: Subscription;

  constructor(private fb: FormBuilder, private http: HttpClient) {
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

  onSubmit() {
    const body = new HttpParams()
      .set('form-name', 'contact')
      .append('name', this.myForm.value.name)
      .append('email', this.myForm.value.email)
      .append('message', this.myForm.value.comment);

    this.http
      .post('/', body.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
      .subscribe(
        (res) => {},
        (err) => {
          if (err instanceof ErrorEvent) {
            alert('Something went wrong when sending your message.');
            console.log(err.error.message);
          } else {
            if (err.status === 200) {
              alert(' Your message has been sent!');
            } else {
              alert('Something went wrong when sending your message.');
              console.log('Error status:');
              console.log(err.status);
              console.log('Error body:');
              console.log(err.error);
            }
          }
        }
      );
  }
}
