
// AUG 10th
// app name lets-go-shopping for now 
require('dotenv').config()
const pg = require('pg-promise')();
const dbConfig = {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    database: process.env.DB_NAME

};
const db = pg(dbConfig);

class Customer{
    constructor(name, email, addr, password){
        this.db = pg(dbConfig);
        this.name = name;
        this.email = email;
        this.address = addr;
        this.password = password;
    }
    save(){
        return db.query(`
            INSERT INTO customers 
            (name, email, address, password)
            values
            ('${this.name}','${this.email}','${this.address}','${this.password}');
        `);
    }
}

module.exports = Customer;
// var db = require('db')
// db.connect({
//   host: process.env.DB_HOST,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS
// })

// express AUG 9th
// const express = require('express');
// const app = express();

// app.get('/',(req, res) =>{
//     res.send('Hello Word');
// });

// app.listen(3000,() => {
//     console.log('web app is listening! on port 3000');
// });

//go to chrome and goto localhost:3000 for a sweet hello world message



