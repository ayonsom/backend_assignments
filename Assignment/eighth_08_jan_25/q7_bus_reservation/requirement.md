Bus Reservation System
Submission Instructions:
Please submit the Masai Repo Link.

Description:
You are tasked with building a Bus Reservation System using Mongoose and MongoDB. The system will manage bus operators, routes, buses, passengers, and reservations, allowing for various operations on these entities. The system should support advanced querying, relationships, and validation.

Instructions
Operator Schema:

Define an Operator schema with the following fields:
name: A string that is required and must be unique across all operators.
contact_info: A string representing the contact information of the operator.
buses: An array of ObjectIDs that reference the Bus schema. This represents the buses operated by this operator.
Route Schema:

Define a Route schema with the following fields:
start_location: A string representing the starting location of the route. This field is required.
end_location: A string representing the end location of the route. This field is required.
distance: A number indicating the distance of the route in kilometers. This field is required.
buses: An array of ObjectIDs that reference the Bus schema. This represents the buses assigned to this route.
Bus Schema:

Define a Bus schema with the following fields:
bus_number: A string that is required and must be unique across all buses.
capacity: A number representing the seating capacity of the bus. This field is required.
operator: An ObjectID that references the Operator schema. This field is required and represents the operator of the bus.
route: An ObjectID that references the Route schema. This field is required and represents the route assigned to the bus.
reservations: An array of ObjectIDs that reference the Reservation schema. This represents the reservations made for this bus.
Passenger Schema:

Define a Passenger schema with the following fields:
name: A string that is required and represents the name of the passenger.
email: A string that is required and must be unique. This field represents the email address of the passenger.
phone: A string representing the phone number of the passenger.
reservations: An array of ObjectIDs that reference the Reservation schema. This represents the reservations made by the passenger.
Reservation Schema:

Define a Reservation schema with the following fields:
bus: An ObjectID that references the Bus schema. This field is required and represents the bus for which the reservation is made.
passenger: An ObjectID that references the Passenger schema. This field is required and represents the passenger making the reservation.
seat_number: A number representing the seat number reserved. This field is required.
reservation_date: A date field representing the date the reservation was made. The default value should be the current date.
Functionality:

Create:
Implement a function to add a new operator. Ensure that the operator name is unique.
Implement a function to add a new route. Ensure that the start and end locations are provided, and the distance is a positive number.
Implement a function to add a new bus to a specific operator and route. Ensure that the bus number is unique.
Implement a function to add a new passenger. Ensure that the email is unique.
Implement a function to make a new reservation for a bus. Ensure that the seat number is within the bus capacity.
Read:
Implement a function to list all buses operated by a specific operator.
Implement a function to get all buses assigned to a specific route.
Implement a function to retrieve detailed information about a specific reservation, including the bus and passenger details.
Implement a function to get all reservations made by a specific passenger.
Update:
Implement a function to update the information of a specific operator, such as contact information.
Implement a function to update a route's information, such as start and end locations.
Implement a function to update a bus's details, such as capacity or assigned route.
Implement a function to update a reservation's seat number or other details.
Delete:
Implement a function to remove a bus from an operator. Ensure that the bus is also removed from the route's assigned buses.
Implement a function to delete a route. When a route is deleted, ensure that all associated buses are either reassigned or removed.
Implement a function to cancel a reservation. Ensure that the seat number becomes available for other reservations.
Implement a function to delete an operator. When an operator is deleted, ensure that all associated buses and reservations are handled accordingly.
Create the routes/endpoints accordingly