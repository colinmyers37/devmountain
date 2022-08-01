import express, { json, response } from 'express';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());

import { faker } from '@faker-js/faker';

class User{
    constructor() {
        this.userId = faker.datatype.uuid() 
        this.userName = faker.internet.userName()
    }
}

class Company{
constructor() {
    this.address = faker.address.city()
    this.company = faker.company.companyName()
}
}
let newUser = new User();
let newCompany = new Company();

// We will be using faker to create random endpoints. above I have some code to help you get started in the assignment
// I want you to make this file into a server file and create me 3 endpoints

// Create an api route "/api/users/new" that returns a new user 

// Create an api route "/api/companies/new" that returns a new company

// Create an api route "/api/user/company" that returns both a new user and a new company


app.get("/api/users/new", (req, res) => {
 res.status(200).json({message: "new user added", user: newUser})
});

app.get("/api/companies/new", (req, res) => {
    res.status(200).json({message: "new company added", company: newCompany})
   });

app.get("/api/user/company", (req, res) => {uupiiiupup
    res.status(200).json({message: "new user and company added", user: newUser, company: newCompany})
})

app.listen(4000, () => console.log("server is running on port 4000"));