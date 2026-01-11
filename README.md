# Boilerexams Application Project

## What is it?
A proof of concept build for a Boilerexams question page. It connects to Boilerexams' API & can handle any "regular" multiple choice question (i.e., one without code, single select, etc.). It can also handle any question id; simply insert a valid question ID into the text field at the top of the page.

## To Run
- Clone the git repository. 
- Run: ```npm install```
- Run: ```npx vercel dev```. Answer "y" to all of the yes/no questions that follow.
- Visit the server on: ```http://localhost:3000/```.

## AI Use
Generative AI tools were used in moderation when creating this project. Specifically, I used Github Copilot to fill in certain lines of code, nearly always predicting exactly what I was planning to type anyways. I also used ChatGPT to provide some debugging assistance that I was having with React state issues as well as CORS issues with the Boilerexams API (it gave me the suggestion to create a serverless server that would call the Boilerexams API). All AI code was reviewed before it was used in production.

## Deployment Link
https://boilerexams-eight.vercel.app/
