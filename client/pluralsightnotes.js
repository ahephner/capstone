//application is made up of components with services
//A component is a Template with HTML view + class with properties and methods + metadata that reads more with angular
//Each app has 1 root Module and then can have multipal feature mods that feed into the root and are made up of multiple components
//http://blogs.msmvps.com/deborahk/angular-2-getting-started-problem-solver/
//https://github.com/DeborahK/Angular-GettingStarted
//https://wwww.typescriptlang.org/Playground
//https://developer.mozilla.org/en-US/docs/Web/Events  ----list of valid DOM events

//class: 

//export class AppComponent {
	//pageTitle: string = 'Acme Product Management';
//}

//export = method
//class the convention is to name the class for what function it servers
//pageTitle: property Name 
//string = data type
//"acme...." default value

//A class becomes an Angular component when we give it metadata

//import { Component } from '@angular/core';

//@Component ({
// 	selector: 'pm-root',
// 	template: 
// 			<div><h1>{{pageTitle}}</h1>
// 				<div>My First Component</div>
// 				 </div>
// })  notice no semicolon


// Decorator a function that adds metadata to a class, its members,
//or its method arguments
//Prefix @
//Angular provides built-in decorators
//@Component({pass in an object}) 

//if we plan to reference the component in any HTML specify a selector
//it defines components name which a customer html tag

//import = keyword
//{ Component } Member name
//'@angular/core'  angular library module name 


//Angular is all about components

//normal to add Compont to name appComponent
//Web apps are all about the user interface
//angular gives us data binding to html

//Route to get on page: 
//product.component and product.component.html
//take it to app.components.ts using <selector:></selector> to place on page
//take it to app.module.ts import class Name and then place under declarations

//////template-------trainging
//inline template
//Advantages easy to line up data logic in component everything is already there
//Disadvantages most html dont allow intelliance

// "<h1>{{pageTitle}}</h1>"

// with backticks new to es 15 allow it to read better: 
// `
// <div><h1>{{pageTitle}}</h1>
// <div>
// My First Component
// </div>
// </div>
// `

//best option is linked template
// './product-list.component.html' 

//Directive---------
//Custom HTML element or attribute used to power up and extend 
//html we can use angular or create our own
//Angular Built-in Directives-------
//Structural Directives:-----------notice astrix
//*ngIF: if logic
//*ngFor: for loops
//modifies the structure view by manipulating elements and their childern


//*ngIF: example-< table class='tabel' *ngIF='products && products.length'>
//is a structural directive that removes or recreates a portion
//of If the expression assigned to the ngIF evaluates to a false
//value, its childern are reinserted into the DOM.
//We use ngif on the table element and set it to products
//and products list has length, the table appears in the DOM


//*ngFor: example-<tr *ngFor='let product of products'>
//ngFor repeats a portion of the DOM tree, once for each item in an iterable
//list. So we define a block of HTML that defines how we want
//to display a single item and tell Angular to use that block
//for

//binding----------------------
//syntax always defined in the template
//Coordinates communication between the component's class and template
//ofen involves passing data reminder class has method and properties
/////////binding types///////////////////////

//Interpolation: {{pageTitle}}
//1 way traffic from class to template
// example below: 
// template-------              class
// <h2>{{pageTitle}}</h2>       export class AppComponent{
//                               pageTitle: string = 'Acme Product Mgm';
//                               }
//  this sends  string to pg title can pass string concatenationo or calculations and methods
//can use with values: <h2 innerText={{pageTitle}}></h2>
// {{text}} text = Template Expression



//Property Binding--------
//Property binding allows us to set a property of an element 
//to the value of template expression
//<img [src] = 'product.imageUrl'>
//src = element property .imageUrl = template expression
//[]-binding target inside
//''binding source

//Event Binding 
//going from client to class like a button clip
//<button (click)='toggleImage()'>
//()=target event ''=template statement



//Two-way Binding------------user input and saving
//example: 
//Template: <input [(ngModel)] = 'listFilter'>
//Class: export class ListComponent {
// 		listFilter: string = 'cart';  -this also gives intial value of cart
// }
//THIS IS HOW YOU GET INPUT INTO A BOX DISPLAY ELSEWHERE ON SCREEN
//CHECKOUT PRODUCT-LIST.COMPONENTS.HTML AND PRODUCT-LIST.COMPONENTS.TS
//WITH THIS [(ngModel)]


//Pipes------
//transform bound properties before display can help with 
//improving user friendlyness and display in right place
//Angular comes with built in pipes date, number, decimal, percent, capitalize
//Angular comes with built in pipes for objects like json, slice etc. 
//can build custom list

//example: {{product.productCode | lowercase}} - set to lower case pipe is | properity on left action on right
//example: with object <img [src]= 'product.imageURL'
// [title]='product.productName | uppercase'>

//example: chaining {{product.price | currency | lowercase}}
//some accept parameters: 
//{{product.price | currency: 'USD': true: '1.2-1'}}
//USD:true= display $ before
//'1.' at least one digit left of . 
//.2 at least two left of digit
//.-2 at no more than two digits left of . 

/////////////////7 more on components................................................
//Interface: 
//A specificaton identifying a related set of properties and methods
//A class commits to supporting the specification by implementing the interface
//This means the class includes code for each property and method
//Develpment time only ES 15 16 dont support only typescript
 
//Example: 

// export interface IProduct {
// 	productID: number;
// 	productName: string;
// 	price: code; 
// 	calculateDiscount(percent: number): number;
// }

// interface = keyword declaring interface
// IProduct = Interface name
// export = exports out
// productID = name 
// : number = data type
// calculateDiscount = method name
// list of parameteres with data types
// : number; return type

//TO use interface as a Data type: 
//export interface
//import { IProduct } into new folder
//call it below: products: IProduct[] = [...]


///Component Lifecycle: 
//Create 
//Render
//Create and render childern
//procss change
//destroy

//lifecycle hooks: 

//OnInit: perform component initialization, retrieve data work with back end
//OnChanges: perform action after change to input properties
//OnDestroy: Perform clean up

//use were we declare host ie
//export class ProductListComponent
				//implements OnInit{


//Custom pipes:
//first import at the top import {Pipe, PipeTransform } from '@angular/core';
// @Pipe({
// 	name: 'convertToSpaces'
// })
// export class convertToSpacesPipe
				// implements PipeTransform {
				// 	transfrom(value: string,
				// 			character: string): string{

				// 	}
//transform method: transforms a value and return it


// using in template: 
//<td>{{product.productCode | convertToSpaces: '-'}}</td>
//pipe: 
//transfrom(value: string, character: string): string{

////////////////Nested Component-------------------
//@Input() if a nested component wants recieve input from container
//use this decorator in export class to accept input
//works with objects
//the container component then passes data to the nested component by
//setting this property with property binding
//in Component set target in [] and then source behind
//example: <pm-star [rating]='product.starRating'></pm-star>

//@Output if nested component wants to send info back to container
//PROPERTY TYPE MUST BE AN EVENT
//Data to pass becomes event payload
//in angular an event is defined with an event emmitter object
//Example: 
//@Output() notify: EventEmitter<string> = 
// new EventEmitter<string>();
//<string>= what your gonna pass could be <string> or <integer> or <object>
//use $event to access the event payload passed from
//the nested component
//example: 
/* <td> <pm-star [rating]='product.starRating'
(ratingClicked)='onRatingClicked($event)'></pm-star></td> */}

///////9 Services and Dependency Injections---------------------------
//Dependency Injection: 
//A coding pattern in which a class receives the instances
// of objects it needs (called dependencies) from an 
// external source rather than creating them itself

////Build a service
//1: Create the service class
//Example: export class ProductService{
// 	getProducts(): IProduct[]{

// 	}
// }
//2: Define the metadata with a decorator
// @Injectable()
// export class ProductService{
// 	getProducts(): IProduct[]{
		
		// 	}
		// }


//Injectable: often used with services recommended with most service class

//3: Import what we need
// import {Injectable} from 'angular/core'

//register a service with an injector: 
// Register a Provider
// -Code that can create or return a ServiceWorker
// -Typically the service class itself

// Define in component or Angular module SVGMetadataElement

// Registered in component: 
// -Injectable to component and its childern

// Registered in Angular module: 
// -Injectable everywhere in app

// Can only inject into component and its childern its registered too
//Unless registered at teh root app

//Observables help manage asynchronous data
//like different runners finishing a race
//Comein as arrays 
//Use reactive extensions
//Allows us to use operators to manipulate math

//Routing----------11

//routing allows us to move with in site
//Nest-able components
//-define a selector
//nest in another component
//no route
//Routed components
//-no selector
//-configure routes
//-tie routes to actions to display view

//Protecting routes with guards
//CanActivate
//-Guard navigation to a route
//CanDeactivate
//-Guard navigate from a route
//Resolve
//pre-fetch data
//Can Load
//-Prevent asynchronous routing


