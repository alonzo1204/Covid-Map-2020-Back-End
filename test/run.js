'use stricts'
// start with mocha
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url= 'http://localhost:8080/api/test';
const tools = require("../test/tools")

// describe('Insert a country: ',()=>{

// 	it('should insert a country', (done) => {
// 		chai.request(url)
// 			.post('/comments')
//             //.send({id:0, country: "Croacia", year: 2017, days: 10})
//             .send({ idDataCountry: 7, idUsername: 1,username: "victor",  comment: "prueba mocha"})
// 			.end( function(err,res){
// 				console.log(res.body)
// 				expect(res).to.have.status(200);
// 				done();
// 			});
// 	});
// });

describe('get all comments: ',()=>{

	it('should get all countries', (done) => {
		chai.request(url)
            .get('/comments')
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
    });


});
describe('get all countries: ',()=>{

	it('should get all countries', (done) => {
		chai.request(url)
            .get('/dataCountries')
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
    });


});

