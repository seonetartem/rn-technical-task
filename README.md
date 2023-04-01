# Techincal task

## How to use

- Install packages with `yarn` or `npm install`.
- Run `yarn start` or `npm run start` to start the bundler.
- Open the project on an Android or iOS simulator.

## Taks summary

Create a simple app with two screens using **only the libraries provided in package.json**. The user should be able to navigate between the two screens using a navigation bar at the top. The screens are described below:

- **Screen 1.** This screen should make a request to `https://dog.ceo/api/breeds/image/random` and show the image in the response on screen along with a text input to name the dog. There should be two buttons:
  - One button requests a new picture and clears the input.
  - The other button stores the url and name somewhere that is accessible to any other screen/component in the app. Make your state management solution scalable.
- **Screen 2.** Displays a very simple horizontal carousel which displays each dog's image and name along with a button to delete it from the state. On tapping the delete button:
  - A sheet should slide from the bottom of the screen and overlapping part of the content. This sheet should ask for confirmation to delete the dog from the state. It should contain two buttons to either confirm or reject the operation.

**Note:** Use reusable components where possible and add type safety.
