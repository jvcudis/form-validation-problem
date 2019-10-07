# [Form validation problem](https://springload.github.io/form-validation-problem/)

The Springload form validation problem requires a developer to make sure that the given form is submitted successfully (sort of!) given the following rules on the form fields:

* `Email` must be a valid email address.
* `Password` must be longer than 8 characters.
* `Colour` must be selected.
* At least two `Animal`s must be chosen.
* If `Tiger` is one of the chosen `Animal`s then `Type of tiger` is required to be a non-empty string.
* If the form is submitted and an error occurs, the error element's parent should have a CSS `error` class added to it.

My implementation is found here:  https://www.anncudis.com/form-validation-problem

> It was fun doing this activity! :smile: Although it took me a while to get everything set up and working with the different tech stacks that I've chosen, it was really rewarding getting back to coding using React and learning more about Github Actions. 

### Local Development
This project was...
* bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
* used [Material-UI](https://material-ui.com/getting-started/installation/) as its UI framework and
* [react-hook-form](https://react-hook-form.com/get-started/) for handling form validation

To run locally, clone this repository and run `npm install` in the root directory and then an `npm start` to start the application.

> Personal Notes. <br />
> It has been a year and a few months since I've used React and since I want to implement this as fast as I can and after a few Google searches, I decided to use **Create React App** and the **react-hook-form** for validation. I've never used them before but I'm liking them. And when I looked at the UI, I thought I can make this prettier and so decided to use **Material-UI** which I've never used before. It was too late for me to realize that adding the UI framework adds a lot of complexity. :smile: But I've already started on it and I don't want to give up on it. Call it stubbornness.

### Testing
There are two tests for this project:
* **Unit Tests** - Used [enzyme](https://github.com/airbnb/enzyme) and built-in test runner [jest](https://jestjs.io/) in running tests.
* **Integration Tests** - Used [Cypress](https://www.cypress.io/).

##### Running Locally
Run the unit tests locally by using `npm test`.
Use `npm run test:integration-dev` to run the integration tests in the terminal. To view the Cypress dashboard use `./node_modules/.bin/cypress open`. Make sure to install cypress first and start the application.

##### Continuous Integration
Every pull request created will trigger the [Continuous Integration](https://github.com/jvcudis/form-validation-problem/actions?workflow=Continuous+Integration) workflow which runs both tests in parallel and reports back the result as status check to the pull request. The test results can be viewed under the **Checks** tab.

> Thoughts. <br />
> It's a bit embarrassing that I did not get all components unit tested properly but I thought it would be more valuable to setup Cypress for integration testing. Although I've setup a Cypress test in CI before, its my first time writing any Cypress test specification. :smile: It took me a while thinking on how to structure the tests which made me remember it's easier to write tests if you have a plan how to test your application.

### Deployment
[Github Actions](https://github.com/features/actions) is used to automatically deploy all code changes to a live site which lives in the `gh-pages` branch of the repository.

Any changes pushed to `master` will automatically trigger the [Build & Deploy to Github Pages](https://github.com/jvcudis/form-validation-problem/actions?workflow=Build+%26+Deploy+to+Github+Pages) workflow which executes the following:
* **Run Unit Test** - Executes the unit test.
* **Build & Deploy** - Build static files and push to `gh-pages`. Only executed when running unit tests is successfully completed.
* **Run Integration Tests** - Runs the Cypress test targetting the live URL.

Do a manual deploy by running `npm run deploy`.

> Why use Github Actions? I've been thinking of playing around with this new feature and this seems like a good opportunity to do it. :smile:

### Maintainer
Please send all question to **jvcudis@gmail.com**.
