EVENT MANAGEMENT SYSTEM

Description:
Build an Event Management System using Mongoose and MongoDB. The system will manage events, organizers, attendees, and registrations. It will allow organizers to create events, attendees to register for events, and track registrations.

Requirements:

Organizer Schema:

name: String (required).
contact_info: String.
events: Array of ObjectIDs referencing the Event schema.
Event Schema:

title: String (required, unique).
date: Date (required).
location: String.
organizer: ObjectID referencing the Organizer schema.
attendees: Array of ObjectIDs referencing the Registration schema.
Attendee Schema:

name: String (required).
email: String (required, unique).
phone: String.
registrations: Array of ObjectIDs referencing the Registration schema.
Registration Schema:

event: ObjectID referencing the Event schema.
attendee: ObjectID referencing the Attendee schema.
registration_date: Date (defaults to the current date).
Functionalities:

Add organizers, events, and attendees.
Register an attendee for an event (ensure no duplicate registrations).
List attendees of a specific event or events attended by a user.
Update event or organizer details.
Cancel a registration.
Sample Routes:

POST /register
GET /attendees/:eventId
GET /events/:attendeeId
PUT /events/:eventId
DELETE /registrations/:registrationId
