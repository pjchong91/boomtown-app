# ADP Project 1: Boomtown

- Author: P. Chong, ADP Student @ RED Academy 2018 Q3

## Description and Objective:

- For the Boomtown project, the goal was to create a multi-view, fullstack application using PostgresQL as the database, Apollo-Express as the server, and React for the presentation layer.
- The Boomtown project is built from using "Boomtown Starter @ https://github.com/redacademy/boomtown-starter" as a base

## Using:

- Backend
  - PostgresQL
  - Node.Js
  - Express
  - Apollo
  - GraphQL
  
- Frontend
  - React

## Questions Encountered and Learning Acquired:

- Database structure & Linking tables

  - We started this project by designing the database tables. We knew we wanted Users, Items, and Tags. However, we had to account for the connections that existed between these things. For example, there are many Tags and any Item can have any number of Tags. What database structure would best display data and reduce redundancies? Rather than repeating Tags on each Item it made more sense to use a 'Linking Table'. The Linking Table is used to describe the relationship between Tags and Items and queries can be made by joining the Items Table and Tags Table via a Linking Table.

- You can't ask for it unless the schema says so
  - Prior to GraphQL, developers relied largely on RESTful queries. This could result in overfetching of data or underfetching ( in which case, multiple queries would have to be made... eventually leading to overfetching). GraphQL is the query language we used and it creates one endpoint such that we can tailor a query to get exactly what we want. Except(!) that the appropriate schema must be written first. A schema is a contract between the server and the client, which defines types and fields - so for example, the schema says we may ask for a type User, who has fields: fullname, bio, and email. Without these fields, we would not be able to query for them.

## Set Up
1. Make a postgres database.... 
### Server

- Commands must be run from the `server` directory:

  - Installation

    `npm install`

  - Run

    `npm run start:dev`

### Client

- Commands must be run from the `client` directory:

  - Installation

    `npm install`

  - Run

    `npm start`

### Build

- `npm run build`

<!-- ## Goals for Future Improvement:
- Expand this later once project is complete -->
