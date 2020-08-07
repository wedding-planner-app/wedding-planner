# Wedding Planner

  <div align="center">
  <br>
  <img src="readme\imgs\logo.png" alt="wedding planner logo" width="400px">
  </div>

<br>

### Table of Contents

- [Value Proposal](#value-proposal)
- [User Stories](#user-stories)
- [Concept](#concept)
  - [Actions Diagram](#actions-diagram)
  - [Design](#design)
    - [Architecture](#architecture)
    - [Whiteboards](#whiteboards)
    - [Wireframes](#wireframes)
    - [ER Diagram](#er-diagram)
    - [APIs Docs](#apis-docs)
  - [MVP](#mvp)
- [Technology](#technology)
- [Future Development](#future-development)
- [Team Members](#team-members)
- [Project Board](https://github.com/wedding-planner-app/wedding-planner/projects/1)
- [Github Link](https://github.com/wedding-planner-app/wedding-planner)
- [Hosted App Url](https://wedding-planner-platform.herokuapp.com/)

---

## Value Proposal

**Summer weddings** are in full swing!! To help make wedding planning easier, we would like to develop a _wedding planner web application_ that will help any wedding planner easily plan and organize all the details surrounding the big day. This proposed application will allow users to create a profile under which they can create **one** or **more** wedding plans.

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

Design features basic functionality and style for multiple features.

#### Architecture

This project is based on **MVC** (_model-view-control_) **design** that separates bussiness logics, UI design and user interaction.

<img src="readme\imgs\architecture-diagram.png" width = "800px">

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

  <p>Signup webpage wireframe</p>
  <img src="readme\imgs\wireframe-signup.png" width = "600px">

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

  <p>Invitation wireframe</p>
  <img src="readme\imgs\wireframe-invitations.png" width = "600px">

  <p>Media wireframe</p>
  <img src="readme\imgs\wireframe-media.png" width = "600px">
  
</details>

##### ER Diagram

<details>
<summary>Click to expand!</summary>
<img src="readme\imgs\schema.png" width = "600px">
</details>

#### APIs Docs

A simple **wedding planner APIs** to manage events.

<img src="readme\imgs\postman.png" width = "300px">

Following the [APIs Documentation](https://documenter.getpostman.com/view/11452429/T1LHHA3X) section details the first steps users need to start using the **APIs**.

Consider including a _Run_ in _Postman_ button. (Postman is a REST API GUI client) If you have your API endpoints integrated with Postman, you can export your Postman collections as a widget to embed in an HTML page.

<details>
<summary> Click to expand</summary>
<img src="readme\imgs\p.png" width = "500px">
</details>

## Developing

#### MVP

- The user can register and login to the platform using **Auth0**.
- The user can see his/her **profile**.
- The user can list, create, edit and delete **wedding events**.
- The user can **search venues** and assign to wedding event.
- The user can send **invitations**.
- The guests can **RSVP**.
- The user can **logout** .

---

## Technology

- Model-View-Controller (**MVC**) framework as an architectural pattern.
- Node.
- Express server.
- React.js.
- MySQL database with a Sequelize ORM.
- Postgres in production.
- Deploy web app using Heroku.
- User authentication and secure API with Auth0.

---

## Future Development

If time `allows`, we would like to incorporate the feature `enhancements` to our web application:

- Add actual wedding data such as picture and video.
- Generate guests friendly interface with memories of the event.
- Allow capability to order memorabilia items based on data of the event.
- Develop corresponding mobile app.

## Team Members

- [Frazer Hughes](https://github.com/Frazerhughes)
- [Krystal Duran](https://github.com/KEDuran)
- [Stephen Guzman](https://github.com/steveo9219)
- [Vanessa Taylor](https://github.com/vantaylo)
- [Yadira Tamarit](https://github.com/ystamaritq)

---

[Table of Contents](#table-of-contents)
