# Nodes
There are some unit tests to showcase testing of the various angular building blocks.
e2e tests and integration haven't been developed due to limited time.

# Manage users

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

## Run application
Run `./run-app.sh` to start both the back-end service and the front-end service. The application runs in the following address `http://localhost` for the UI side and `http://localhost:3000` on the back-end service.
## Development server
Start with the mock back-end service `npm run start-mock-server` which is json-server.
Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Troubleshooting
If you run `./run-app.sh` make sure that the ports `3000 & 80` haven't already been used.
If you want to develop and run the app on the `4200` check if this port is available.
For more details open a terminal and run the `docker ps -a` command.

## Missing bits
The delete button has been moved to the right side of the page. On the edit user page
