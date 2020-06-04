###Angular 9.1.9

	Angular is a Frame work and development platform for creating efficient and sophisticated single-page apps.

######Assumptions

	These docs assume that you are already familiar with HTML, CSS, JavaScript, and some of the tools from the latest standards, such as classes and modules. The code samples are written using TypeScript. Most Angular code can be written with just the latest JavaScript, using types for dependency injection, and using decorators for metadata.
	
	https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML
	https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript
	https://www.typescriptlang.org/docs/home.html
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
	
######Node.js
	
	Node js for Package and Angular CLI using npm
	
######Steps:

	1.npm install -g @angular/cli - install angular cli globally
	2.ng new my-app create workspae and initial application
	3.cd my-app
	  ng serve --open to run 
	  
	Each of these subjects is introduced in more detail in the following pages.
		1.Introduction to Modules
		2.Introduction to Components
		3.Templates and views
		4.Component metadata (@Component() decerator)
		5.Service to reusable component (@Injectable())
		6.Router (Angular router is a @NgModule)
		5.Data binding
			1.Event Binding
			2.Property Binding
			3.String Interpolition
			4.Two way Binding (Event Binding+Property Binding)
		6.Directives @Directive
			There are three kinds of directives in Angular:
				1.Components— directives with a template				
				2.Structural directives—change the DOM layout by adding and removing DOM elements. (*ngif,*ngFor,*ngSwitchCase)
				3.Attribute directives—change the appearance or behavior of an element, component,or another directive.
		7.Pipes
		8.Observables in Angular
				Angular makes use of observables as an interface to handle a variety of common asynchronous operations
						1. You can define custom events that send observable output data from a child to a parent component.
						2. The HTTP module uses observables to handle AJAX requests and responses.
						3. The Router and Forms modules use observables to listen for and respond to user-input events.
		9.Transmitting data between components (Event Emiters)
						1.@OutPut
						2.@InPut
		
						

######Modules

	Module is simply class @NgModule (NgModules provide a compilation context for their components)
	To Root Application  Module called AppModule is class and decerated with @NgModule decerator
	
	Diff types of modules
	-Feature Modules (Employee feature,Login Feature,Report Feture)
	-RootModule
	-Core Module (http services,)
	-Share Module
	-Routing Modules
	===============================
	Uses:-
	1. Better code org
	2. Code Reuse
	3. Code Maintenance
	4. Performance
	
	
	================================
	
	Ex:-
	
	import { NgModule }      from '@angular/core';

	import { BrowserModule } from '@angular/platform-browser';
	@NgModule({
		imports:      [ BrowserModule ],
		providers:    [ Logger ],
		declarations: [ AppComponent ],
		exports:      [ AppComponent ],
		bootstrap:    [ AppComponent ]
				})
	export class AppModule { }
	
