import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { SignupService } from '../../services/signup.service';
@Component({
  selector: 'pm-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signupService: SignupService) { }

  ngOnInit() {
   this.signupService.getTest().subscribe(data => {
     console.log(data);
   })
  }
 onSignup(form: NgForm){
   const email = form.value.email;
   const password = form.value.password; 
   const name = form.value.name; 
 }
}
