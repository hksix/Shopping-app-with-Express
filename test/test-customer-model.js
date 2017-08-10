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
    it('Should be able to get a customer from a database',(done)=>{
        // let myCustomer = new Customer();
        Customer
            .get(1)
            .then((myCustomer)=>{
                // console.log(results);
                // console.log(myCustomer.name);
                // console.log(myCustomer.email);
                // console.log(myCustomer.address);
                // console.log(myCustomer.password);
                done();
        });
    });
    it ('should save, provide an id, adn the get via ID', (done)=>{
        let data = ['ronald mcdonald','r@mcds.com','everywhere', 'yum'];
        let c1 = new Customer(...data);
        c1.save()
            .then((results)=>{
                let customer_id = results.customer_id;
                Customer.get(customer_id)
                    .then((c2)=>{
                        expect(c2.name).to.equal(data[0]);
                        expect(c2.email).to.equal(data[1]);
                        expect(c2.address).to.equal(data[2]);
                        done();
            });
        });
    });
    it('should have customer_id when we retrive it from db', (done)=>{
        let data = ['ronald mcdonald','r@mcds.com','everywhere', 'yum'];
        let c1 = new Customer(...data);
        c1.save()
            .then((results)=>{
                let customer_id = results.customer_id;
                Customer.get(customer_id)
                    .then((c2)=>{
                        expect(c2.customer_id).to.equal(customer_id);      
                        done();
            })
                    .catch(console.log);
        })

    });
    it ('should update user and retain the new values',(done)=>{
        let newName = 'Williama';
        let data = ['ronald mcdonald','r@mcds.com','everywhere', 'yum'];
        let c1 = new Customer(...data);
        c1.save()
            .then((resultsFromSave1)=>{
                c1.customer_id = resultsFromSave1.customer_id;
                c1.name = newName;
                console.log(c1.name);
                c1.save()
                    .then((resultsFromSave2)=>{

                    let customer_id =resultsFromSave1.customer_id;
                    Customer.get(customer_id)
                        .then((c2)=>{
                            expect(c2.name).to.equal(newName);
                        done();
                })
                .catch(console.log);
                // done();
            })
            // done();
        });
        // done();
    });
});
