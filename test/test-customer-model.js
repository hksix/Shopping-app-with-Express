const expect = require('chai').expect;
const Customer = require('../customer');

describe('Customers', () =>{
    it('Should be able to save to the database',(done) => {

        let myCustomer = new Customer('me','me@me.com','123 me street', 'm3m3m3m');
        myCustomer
            .save()
            .then((results)=>{
                done();
            });
    });
});
