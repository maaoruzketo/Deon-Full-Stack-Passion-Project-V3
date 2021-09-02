import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  registerForm: FormGroup;
  signUpCreds = {
    UserName: '',
    Password: ''
  };

   // A quick way to reference fields from the html side
   get UserName() { return this.registerForm.get('UserName'); }
   get Password() { return this.registerForm.get('Password'); }

  constructor(private formBuilder: FormBuilder,
    private dService: DataService,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      UserName: ['', Validators.required],
      Password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submitForm() {
    if (this.registerForm.invalid) {
      alert('Fix errors on form');
      // or you can just return
    } else {
      console.log(this.registerForm.value);
      this.signUpCreds.UserName = this.registerForm.value.UserName;
      this.signUpCreds.Password = this.registerForm.value.Password;
      console.log(this.signUpCreds.UserName);
      // this.dService.favoritesUserId = this.signUpCreds;
      this.dService.AddUser(this.registerForm.value);
      // Know that we need to do proper validation - this will be in another lecture
      alert('You have successfully created an account!');
      this.registerForm.reset();
      this.router.navigate(['pages/manga-home']);
    }
  }

}
