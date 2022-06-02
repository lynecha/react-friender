# Friender
A single page React frontend and a RESTful API backend with full CRUD capabilities to allow users to perform CRUD operations on the images, matches, and messages routes and respond back with JSON. Built using React/Flask/Postgres. 

### Learnings
* Authentication and authorization through JWTs on Flask
* Implementing Amazon AWS S3 to store images
* Designing a chat feature using a many to many relationship

_We built the backend in a seperate repository (code can be found [here](https://github.com/lynecha/flask-friender). Pair programmed with [Michael Paglione](https://github.com/pagman77)_

## Getting Started

1. Clone this repo and the backend repo
```
git clone https://github.com/lynecha/react-jobly.git
git clone https://github.com/lynecha/flask-friender.git
```
2. cd into the "backend" directory, install required packages, create and seed database, and start the server. (Make sure that you have postgreSQL installed)
```

This will run your app on http://localhost:5001 

3. cd into the "frontend" directory, install required packages, then start the app
```
cd frontend
npm install
npm start
```
This will run your app on http://localhost:3000 

## App Information

### Routes
|Path | Component |
| :--- | :--- |
| / | Home  |
| /register  | Login  |
| /login  | Login  |
| /dashboard  | Dashboard  |
| /profile | Profile  |
```


### Functionality Overview
The current user is shown other users that are near their location.
![image](https://user-images.githubusercontent.com/31969608/171570310-be9a4a6f-b29f-45a3-a1ed-abc200f24df0.png)


