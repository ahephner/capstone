import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // these are the values that the form fields will be added to.
  email: string;
  password: string;
  name: string;


  constructor(
    private signupService: SignupService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onSignup() {
   // this creates an obj, that holds the data the server is looking for. (req.body)
   const userCreds = {
     email : this.email,
     password : this.password,
     name : this.name
   };

  // this is going to go the the sign up service and add the information from the signup form.
   this.signupService.signUp(userCreds)
    .then(res => {
      console.log(res);
      // after a user is signed in this redirects the user if to the product page if successful
      this.router.navigate(['/products']);
    });
    // if you want to show the error message, place it in a catch().
 };

 
}
