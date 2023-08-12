# Re-Write

## About

Re-Write is a paraphrasing tool being expanded upon as I delve deeper into machine learning. Developed alongside the Re-Write API, its front-end utilizes the Vue3 javascript framework, while Flask in Python drives the API. Google's Firestore underpins the database functionality.

## Prerequisites

- Node.js & npm
- Python
- Flask
- [Re-Write API setup](https://github.com/DylanHourigan/re_write_api#setup)

## To set up the project and run locally

#### *__Ensure you are running the Re-Write API as it is essential__*

```
npm install

npm run serve
```

*Note:* Currently there is no local database created for local testing as there is no data being sent to the database
The main use of the database at the moment is for authenticating the user, this is subject to change in the future as I further develop the app.

## Usage
After launching the application, you'll be prompted to input your credentials.

Once logged in, you'll access a page featuring the paraphrasing tool. Enter a sentence, press the 'paraphrase' button, and the tool will display a rephrased version below the input area. Switch between available models using the dropdown menu.

There are currently two models available: a standard model and a machine learning-driven one.

*Note:* The machine learning model is still under development and might not function optimally.