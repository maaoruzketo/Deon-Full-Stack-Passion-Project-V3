import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-manga-home',
  templateUrl: './manga-home.page.html',
  styleUrls: ['./manga-home.page.scss'],
})
export class MangaHomePage implements OnInit {
  
  registerForm: FormGroup;
  loginCreds = {
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
      this.dService.Login(this.registerForm.value);
      this.loginCreds.UserName = this.registerForm.value.UserName;
      this.loginCreds.Password = this.registerForm.value.Password;
      console.log(this.loginCreds.UserName);
      this.dService.favoritesUserId = this.loginCreds;
      this.dService.Login(this.loginCreds);
      this.dService.AddUser
      // Know that we need to do proper validation - this will be in another lecture
      // alert('Succesful!');
      this.registerForm.reset();
      alert("You've logged in to Oden's Eye");
      this.router.navigate(['pages/manga-recommendations']);
    }
  }

  leave(){
    this.router.navigate(['sign-up']);
  }
  

  

  // logIn(UserName, Password) {
  //   if(this.dService.checkPassword(UserName,Password)) {
  //     alert('Your Logged in');
  //   } else {
  //     alert('Please try again');
  //   }
  // }
}
