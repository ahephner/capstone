import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div>
        <nav class='navbar navbar-default' style="background-color: #FF7575">
            <div class='container-fluid'>
                <a class='navbar-brand'style="color: white">{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']" style="color: white">Home</a></li>
                    <li><a [routerLink]="['/signup']"style="color: white">Sign Up</a></li>
                    <li><a [routerLink]="['/products']"style="color: white">Menu</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
    `
})
export class AppComponent {
  pageTitle: string = 'Food Delivery';
}
//<li><a> above = these routerLink assign route pay attention to syntax