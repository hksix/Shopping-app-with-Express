
// AUG 10th
// app name lets-go-shopping for now 

const db = require('./db');

class Customer{
    constructor(name, email, addr, password){
        this.name = name;
        this.email = email;
        this.address = addr;
        this.password = password;
    }
    save(){
        if(this.customer_id) {
            return db.one(`
            UPDATE customers
            SET
                name=${this.name},
                email=${this.email},
                address=${this.address}
            where customer_id=${this.customer_id}
            `);

        } else {
            return db.one(`
            INSERT INTO customers 
            (name, email, address, password)
            values
            ('${this.name}','${this.email}','${this.address}','${this.password}')
            returning customer_id;
        `);
        }
    }
    static get(id){
        return db.one(`
            select customer_id, name, email, address from customers where customer_id=${id};
        `).then((results) => {
            let c = new Customer();
            c.customer_id = results.customer_id;
            c.name = results.name;
            c.email = results.email;
            c.address = results.address;
            return c;
        })
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



