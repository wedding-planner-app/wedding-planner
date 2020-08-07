# Wedding Planner

  <div align="center">
  <br>
  <img src="readme\imgs\logo.png" alt="wedding planner logo" width="400px">
  </div>

<br>

### Table of Contents

- [Project Description](#project-description)
- [Reference Links](#reference-links)
- [User Stories](#user-stories)
- [Concept](#concept)
  - [Actions Diagram](#actions-diagram)
  - [Design](#design)
    - [Architecture](#architecture)
    - [ER Diagram](#er-diagram)
    - [Whiteboards](#whiteboards)
    - [Wireframes](#wireframes)
  - [Application MVP](#application-mvp)
- [Technology](#technology)
- [Future Development](#future-development)
- [Team Members](#team-members)
- [Project Board](https://github.com/wedding-planner-app/wedding-planner/projects/1)
- [Github Link](https://github.com/wedding-planner-app/wedding-planner)
- [Hosted App Url](https://wedding-planner-platform.herokuapp.com/)

---

## Project Description

**Summer weddings** are in full swing!! To help make wedding planning easier, we would like to develop a _wedding planner web application_ that will help any wedding planner easily plan and organize all the details surrounding the big day. This proposed application will allow users to create a profile under which they can create **one** or **more** wedding plans.

---

## Reference Links

Link to Wedding Planner Applications deployed on Heroku - [Wedding Planner Application Live Link](https://wedding-planner-platform.herokuapp.com/)

Link to GitHub repo used for application development - [Wedding Planner Application Repo](https://github.com/wedding-planner-app/wedding-planner)

---

## User Stories

```
AS a wedding planner
I WANT to be able to use an online web application
SO THAT I can better plan an awesome wedding
```

---

## Concept

This platform will leverage a full stack web application that will allow `planning` and `management` of a client’s wedding. Weddings are significant events in people's lives and as such, couples are often willing to spend considerable amount of money to ensure that their weddings are well-organized. Wedding Planner allows you to keep all of your guests, invitations, and more in one place.

#### Actions Diagram

<img src="readme\imgs\uml.png" width = "600px">

#### Design

This section addresses the platforms's basic functionality and style/design utilized for the multiple features included thorughout the site.

#### Architecture

This project is based on **MVC design** (_model-view-control_) which facilitates a better orhganziation pattern for the code used to develop this web application. The MVC folder pattern helps separate the application's care back-end business logic, front-end UI design, and user interaction. The diagram included below outlines the architecture of this web application.

<img src="readme\imgs\architecture-diagram.png" width = "800px">

##### ER Diagram

The entity relationship (ER) diagram below provides a visual representation of how the data is saved inside the application's back-end database. This diagram also include demosntrates the relations between each database table.

<img src="readme\imgs\schema.png" width = "600px">

##### Whiteboards

<details>
  <summary>Click to expand!</summary>
  <p>Image 1</p>
  <img src="readme\imgs\wb1.png" width = "600px">
  <p>Image 2</p>
  <img src="readme\imgs\wb2.png" width = "600px">
</details>

##### Wireframes

<details>
  <summary>Click to expand!</summary>
  <p>Homepage webpage wireframe</p>
  <img src="readme\imgs\wireframe-homepage.png" width = "600px">

  <p>Login webpage wireframe</p>
  <img src="readme\imgs\wireframe-login.png" width = "600px">

  <p>User profile wireframe</p>
  <img src="readme\imgs\wireframe-profile.png" width = "600px">

  <p>Existing events wireframe</p>
  <img src="readme\imgs\wireframe-existingReservations.png" width = "600px">

  <p>Create event reservation wireframe</p>
  <img src="readme\imgs\wireframe-newReservation.png" width = "600px">

  <p>Venues wireframe</p>
  <img src="readme\imgs\wireframe-venues.png" width = "600px">

  <p>Guest list webpage wireframe</p>
  <img src="readme\imgs\wireframe-guestlist.png" width = "600px">

  <p>FUTURE DEVELOPMENT - Invitation wireframe</p>
  <img src="readme\imgs\wireframe-invitations.png" width = "600px">

  <p>FUTURE DEVELOPMENT - Media wireframe</p>
  <img src="readme\imgs\wireframe-media.png" width = "600px">
  
</details>

---

## Application MVP

- The user can register and login to the platform using **Auth0**.
- The user can see his/her **profile**.
- The user can list, create, edit, and delete **wedding events**.
- The user can **search venues** and assign to wedding event.
- The user can send **invitations**.
- The user can **logout** .

---

## Installation and Technology

Reference the subsections below for installation instructions and the list of technologies used for the development of this wedding planner application.

_FYI - Environment Variables:_
Please note that various environment variables are used in both `client folder` and `root directory` directory of this application, so to test in your local environment, the user will need to indivually generate the following environment variables.

### Installation Instructions

In order to successfully develop and launch this assignment, the following items must be installed and/or accessible from your working environment (i.e. laptop, computer, etc.).

- **Node.js** - Make sure Node.js is installed in your machine. If Node.js is not installed on your machine, [click here](https://nodejs.org/en/) to download the application.
- **Node Modules** - This project used various `node modules`, which are listed in the package.json files listed in both the `client folder` and `main root folder` of this application. A screenshot of dependencies listed in each package.json file are listed included below. Please run `npm install` in your terminal to install all required node modules.

Reference the section below for a list (and brief description) of core node modules and technologies used to develop this application.

#### Package.json file in Root Directory

<details>
  <summary>Click to expand!</summary>
  <p>Package.json file in Root Directory</p>
  <img src="readme/imgs/packageJsonRoot.png" width = "600px">
  
</details>

#### Package.json in Client Folder

<details>
  <summary>Click to expand!</summary>
  <p>Package.json in Client Folder</p>
  <img src="readme/imgs/packageJsonClient.png" width = "600px">
  
</details>

### Project Technologies

Here is a list of all the core technologies / core dependencies used to develop this application.

#### Core Technologies

- Model-View-Controller (**MVC**) framework as an architectural pattern
  - ![MVC Folder Patter](./readme/img/MVCfolderPattern.png)
- Node.js
- React.js
- MySQL database with a Sequelize ORM
- Postgres in production
- Deploy web app using Heroku
- User authentication and secure API with Auth0

### Core Node Dependencies

- babel-eslint
- dotenv
- express
- express-jwt
- if-env
- jwks-rsa
- jwt-decode
- morgan
- nodemailer
- pg
- react-router-dom
- request
- sequelize

---

## Future Development

For `future` development, we would like to incorporate the following feature `enhancements` into our web application:

- Enhance the overall application's UI.
- Add actual wedding data, such as picture and video.
- Generate guests friendly interface with memories of the event.
- Allow capability to order memorabilia items based on data of the event.
- Allow wedding planner to import CSV data files.
- Develop corresponding mobile app.

## Team Members

- [Krystal Duran](https://github.com/KEDuran)
- [Stephen Guzman](https://github.com/steveo9219)
- [Vanessa Taylor](https://github.com/vantaylo)
- [Yadira Tamarit](https://github.com/ystamaritq)

---

[Table of Contents](#table-of-contents)
