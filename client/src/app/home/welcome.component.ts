import { Component } from '@angular/core';

@Component({
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = 'A1-FoodDelivery!';

getUrl()
{
    return "url('./assets/images/chinese.jpg')";    
}
}
