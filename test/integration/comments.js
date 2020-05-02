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

describe('Get comment by Id: ',()=>{
	it('should get a comment by its Id', (done) => {
		chai.request(url)
            .get('/comments/1')
			.end( function(err,res){
                console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
    });
});

describe('Get comment by Id: ',()=>{
	it('should get a comment of a Country by its IdDataCountry', (done) => {
		chai.request(url)
            .get('/commentsByDataCountry/7')
			.end( function(err,res){
                console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
    });
});

describe('Insert a country: ',()=>{
	it('should insert a country', (done) => {
		chai.request(url)
            .post('/comments')
            .send({
				id: 14,
				idDataCountry: 6,
				idUsername: 1,
				username: "victor",
				comment: "prueba mocha "})
			.end( function(err,res){
                console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
    });
});

describe('Update the text of a comment: ',()=>{
	it('should update the text the comment with the Id 14', (done) => {
		chai.request(url)
            .put('/comments/14')
            .send({
				idDataCountry: 6,
				idUsername: 1,
				username: "victor",
				comment: "prueba mocha  corregido"})
			.end( function(err,res){
				console.log(res.body)
                //expect(res.body).to.have.property('comment').to.be.equal(0);
				expect(res).to.have.status(200);
				done();
			});
    });
});

describe('Get comment by Id: ',()=>{
	it('should get a comment by its Id', (done) => {
		chai.request(url)
            .get('/comments/14')
			.end( function(err,res){
                console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
    });
});

describe('Delete comment by Id: ',()=>{
	it('should delete a comment by its Id', (done) => {
		chai.request(url)
            .delete('/comments/14')
			.end( function(err,res){
                console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
    });
});