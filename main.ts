/**************************************************************************
 *                            STRUCTURAL TYPING                           *
 **************************************************************************/

// Structural typing in TypeScript is a way of determining if two types are compatible based on their structure, 
// rather than their explicit declarations. This means that two objects are considered to be of the same type if they 
// have the same properties and methods, even if they are not explicitly defined as the same type.

type Rectangle = {
    width: number;
    height: number;
};

type Box = {
    width: number;
    height: number;
    colour: string
};

let rectangle : Rectangle = {
    width: 9,
    height: 4
};

let box: Box = {
    width: 11,
    height: 6,
    colour: "Brown"
};

rectangle = box;
// box = rectangle // Error: Property 'colour' is missing in type 'Rectangle' but required in type 'Box'.

type User = {
    name: string;
    age: number;
};

type Admin = {
    name: string;
    age: number;
    role: string;
};

let user: User = {
    name: "Hafsa",
    age: 20
};

let admin: Admin = {
    name: "Umm-e-Hani",
    age: 21,
    role: "Manager"
};

user = admin;
// admin = user // Error: Property 'role' is missing in type 'User' but required in type 'Admin'.
