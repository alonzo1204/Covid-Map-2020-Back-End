'use stricts'
// start with mocha
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url= 'http://localhost:8080/api/test';
const tools = require("../tools")


describe('Get all comments: ',()=>{
	it('should get all comments', (done) => {
		chai.request(url)
            .get('/comments')
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
    });
});

// describe('Get countries by Id: ',()=>{
// 	it('should get countries by ', (done) => {
// 		chai.request(url)
// 			.post('/datacountries')
//             //.send({id:0, country: "Croacia", year: 2017, days: 10})
//             .send({ idDataCountry: 7, idUsername: 1,username: "victor",  comment: "prueba mocha"})
// 			.end( function(err,res){
// 				console.log(res.body)
// 				expect(res).to.have.status(200);
// 				done();
// 			});
// 	});
// });