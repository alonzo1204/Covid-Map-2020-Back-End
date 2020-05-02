//
'use stricts'
// start with mocha
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url= 'http://localhost:8080/api/test';
const tools = require("../tools")
//
var agent = chai.request.agent(url)


//############# Comprobnacion de Token en Cookie ##############
describe('Authenticate a user: ',()=>{

	it('should receive an OK and a cookie with the authentication token', (done) => {
		agent
			.get('/authentication')
  			.auth('user', 'password')
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.cookie('authToken');
				expect(res).to.have.status(200);
				return agent.get('/personalData/user')
      			.then(function (res) {
         			expect(res).to.have.status(200);
         			console.log(res.body)
         			done();
      			});
				done();
			});
	});

});


//https://www.youtube.com/watch?time_continue=560&v=7nafaH9SddU&feature=emb_title
//https://www.freecodecamp.org/news/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52/


//describe('Obtain personal data without authToken: ',()=>{
//
//	it('should receive an error because we need authToken', (done) => {
//		agent
//			.get('/personalData/user')
//      		.then(function (res) {
//         		expect(res).to.have.status(500);
//         		console.log(res.body)
//      	});
//		done();
//	});
//
//});