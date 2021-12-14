# SpotiMatchFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
## Keycloak server

To use the app you've got to have a keycloak server running, downoload https://www.keycloak.org/downloads, unpack and run
standalone.bat located in the \bin directory (JRE required).

Then proceed to http://localhost:8080 and create an admin user

Enter the admin panell and create a new realm from realm-exort.json file

The last thing to do is creating a new user and setting up permament credentials for him

Shit should work
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
