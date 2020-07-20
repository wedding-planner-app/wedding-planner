# Wedding Planner

  <div align="center">
  <br>
  <img src="assets\imgs\readme\logo.png" alt="wedding planner logo" width="250">
  </div>

<br>

### Table of Contents

- [Value Proposal](#value-proposal)
- [User Stories](#user-stories)
- [Concept](#concept)
  - [UML Diagram](#uml-diagram)
  - [Design](#design)
  - [MVP](#mvp)
- [Technology](#technology)
- [Future Development](#future-development)
- [Team Members](#team-members)
- [Project Board](https://github.com/wedding-planner-app/wedding-planner/projects/1)
- [Github Link](https://github.com/wedding-planner-app/wedding-planner)

---

## Value Proposal

**Summer weddings** are in full swing!! To help make wedding planning easier, we would like to develop a _wedding planner web application_ that will help any wedding planner easily plan and organize all the details surrounding the big day. This proposed application will allow users to create a profile under which they can create **one** or **more** wedding plans.

---

## User Stories

```
AS someone having my wedding soon
I WANT to be able to have a platform to plan my event end to end
SO THAT I can plan and organize guests, venue, and other related items
```

```
AS a wedding planner
I WANT to be able to use an online web application
SO THAT I can better plan an awesome wedding
```

---

## Concept

This platform will leverage a full stack web application that will allow `planning` and `management` of a client’s wedding. Weddings are significant events in people's lives and as such, couples are often willing to spend considerable amount of money to ensure that their weddings are well-organized. Wedding Planner allows you to keep all of your guests, invitations, and more in one place.

#### UML Diagram

- The user needs to get registered by entering all the details in the registration form.
- The user can get login by entering unique username and password.
- The user can add events like the type of event, decoration, guests, invitations, budget and more.
- The user can manage the events (update or delete).
- The user can logout.

<img src="assets\imgs\readme\uml.png" width = "600px">

#### Design

Phase one design features basic functionality and style for multiple features.

**Phase One:** Wireframes.

<img src="assets\imgs\readme\wireframe1.png" width = "600px">

---

## Developing

#### MVP

- Allow user to save, edit, and compare multiple wedding times.
- Allow user to create guest list.
- Allow user to send invitations.
- Allow guests to RSVP from a link they get by email.
- Allow user to see venue address and map.
- Displays high quality images associated with the event location.

---

## Technology

- Model-View-Controller (**MVC**) framework as an architectural pattern.
- Node and Express server.
- Handlebars.js as the template engine or React.js.
- MySQL database with a Sequelize ORM.
- AJAX POST-request and AJAX GET-request for retrieving and adding new data.
- Deploy web app using Heroku (with data).
- NPM passport package to manage the access to the plataform based on _admin_, _user_ and _wedding planner_.

---

## Future Development

If time `allows`, we would like to incorporate the feature `enhancements` to our web application:

- Add actual wedding data such as picture and video.
- Generate guests friendly interface with memories of the event.
- Allow capability to order memorabilia items based on data of the event.
- Develop corresponding mobile app.

## Team Memberss

- [Yadira Tamarit](https://github.com/ystamaritq)
- [Stephen Guzman](https://github.com/steveo9219)
- [Vanessa Taylor](https://github.com/vantaylo)
- [Krystal Duran](https://github.com/KEDuran)

---

[Table of Contents](#table-of-contents)
